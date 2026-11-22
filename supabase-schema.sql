-- ==============================================================
-- ELECTROVA ELECTRONICS E-COMMERCE DATABASE SCHEMA (SUPABASE)
-- ==============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text not null,
  mobile_number text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." 
  on public.profiles for select using (true);

create policy "Users can insert their own profile." 
  on public.profiles for insert with check (auth.uid() = id);

create policy "Users can update own profile." 
  on public.profiles for update using (auth.uid() = id);

-- 2. CATEGORIES
create table if not exists public.categories (
  id text primary key,
  name text not null,
  short_name text not null,
  tagline text,
  image text,
  icon_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.categories enable row level security;
create policy "Categories are viewable by everyone." on public.categories for select using (true);

-- 3. PRODUCTS
create table if not exists public.products (
  id text primary key,
  name text not null,
  brand text not null,
  category_id text references public.categories(id) on delete set null,
  price numeric not null,
  original_price numeric not null,
  discount_percent numeric not null default 0,
  rating numeric not null default 5.0,
  rating_count integer not null default 0,
  review_count integer not null default 0,
  images text[] not null default '{}',
  thumbnail text not null,
  description text not null,
  features text[] not null default '{}',
  specs jsonb not null default '{}'::jsonb,
  colors text[] not null default '{}',
  variants text[] not null default '{}',
  in_stock boolean not null default true,
  warranty text not null,
  is_new_arrival boolean default false,
  is_best_seller boolean default false,
  is_trending boolean default false,
  is_deal_of_the_day boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.products enable row level security;
create policy "Products are viewable by everyone." on public.products for select using (true);

-- 4. REVIEWS
create table if not exists public.reviews (
  id uuid default uuid_generate_v4() primary key,
  product_id text references public.products(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete set null,
  customer_name text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  title text not null,
  description text not null,
  verified_purchase boolean default true,
  helpful_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.reviews enable row level security;

create policy "Reviews are viewable by everyone." 
  on public.reviews for select using (true);

create policy "Authenticated users can create reviews." 
  on public.reviews for insert with check (auth.role() = 'authenticated');

create policy "Users can update their own reviews." 
  on public.reviews for update using (auth.uid() = user_id);

-- 5. CART ITEMS
create table if not exists public.cart_items (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  product_id text references public.products(id) on delete cascade not null,
  quantity integer not null default 1 check (quantity > 0),
  selected_color text,
  selected_variant text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, product_id, selected_color, selected_variant)
);

alter table public.cart_items enable row level security;

create policy "Users can view their own cart." 
  on public.cart_items for select using (auth.uid() = user_id);

create policy "Users can insert into their own cart." 
  on public.cart_items for insert with check (auth.uid() = user_id);

create policy "Users can update their own cart." 
  on public.cart_items for update using (auth.uid() = user_id);

create policy "Users can delete from their own cart." 
  on public.cart_items for delete using (auth.uid() = user_id);

-- 6. WISHLIST ITEMS
create table if not exists public.wishlist_items (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  product_id text references public.products(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, product_id)
);

alter table public.wishlist_items enable row level security;

create policy "Users can view their own wishlist." 
  on public.wishlist_items for select using (auth.uid() = user_id);

create policy "Users can insert into their own wishlist." 
  on public.wishlist_items for insert with check (auth.uid() = user_id);

create policy "Users can delete from their own wishlist." 
  on public.wishlist_items for delete using (auth.uid() = user_id);

-- 7. ORDERS
create table if not exists public.orders (
  id text primary key,
  user_id uuid references auth.users(id) on delete set null not null,
  total_amount numeric not null,
  discount_amount numeric not null default 0,
  shipping_fee numeric not null default 0,
  status text not null default 'Processing',
  payment_method text not null,
  shipping_address jsonb not null,
  order_date timestamp with time zone default timezone('utc'::text, now()) not null,
  estimated_delivery_date timestamp with time zone not null
);

alter table public.orders enable row level security;

create policy "Users can view their own orders." 
  on public.orders for select using (auth.uid() = user_id);

create policy "Users can insert their own orders." 
  on public.orders for insert with check (auth.uid() = user_id);

-- 8. ORDER ITEMS
create table if not exists public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id text references public.orders(id) on delete cascade not null,
  product_id text references public.products(id) on delete set null not null,
  product_name text not null,
  brand text not null,
  price numeric not null,
  quantity integer not null,
  image text not null,
  color text
);

alter table public.order_items enable row level security;

create policy "Users can view their own order items." 
  on public.order_items for select using (
    exists (
      select 1 from public.orders
      where orders.id = order_items.order_id
      and orders.user_id = auth.uid()
    )
  );

create policy "Users can insert order items." 
  on public.order_items for insert with check (
    exists (
      select 1 from public.orders
      where orders.id = order_items.order_id
      and orders.user_id = auth.uid()
    )
  );

-- Function to handle user creation and automatic profile insert
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, mobile_number)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', 'Customer'),
    coalesce(new.raw_user_meta_data->>'mobile_number', '')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile upon auth.users signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
