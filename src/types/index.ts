export type ProductCategory =
  | 'Laptops'
  | 'Tablets'
  | 'Smart Watches'
  | 'Headphones'
  | 'Earbuds'
  | 'Bluetooth Speakers'
  | 'Smart TVs'
  | 'Digital Cameras'
  | 'Gaming Consoles'
  | 'Gaming Accessories'
  | 'Keyboards'
  | 'Computer Mouse'
  | 'Monitors'
  | 'Printers'
  | 'Power Banks'
  | 'Chargers and Cables'
  | 'Projectors'
  | 'Home Appliances'
  | 'Networking Devices'
  | 'Computer Accessories';

export interface ProductReview {
  id: string;
  productId: string;
  customerName: string;
  rating: number; // 1 to 5
  title: string;
  description: string;
  date: string;
  verifiedPurchase?: boolean;
  helpfulCount?: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number; // Current selling price in INR
  originalPrice: number; // MRP
  discountPercent: number;
  rating: number; // Average rating (e.g. 4.6)
  ratingCount: number;
  reviewCount: number;
  images: string[];
  thumbnail: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  colors: string[];
  variants?: string[];
  inStock: boolean;
  warranty: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isDealOfTheDay?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedVariant?: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
  product: Product;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  mobileNumber?: string;
  addresses?: ShippingAddress[];
  createdAt: string;
}

export interface ShippingAddress {
  id: string;
  name: string;
  phone: string;
  pincode: string;
  addressLine: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  discountAmount: number;
  shippingFee: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Net Banking' | 'Cash on Delivery';
  shippingAddress: ShippingAddress;
  orderDate: string;
  estimatedDeliveryDate: string;
}

export type SortOption =
  | 'recommended'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'customer-rating'
  | 'newest'
  | 'better-discount';

export interface FilterState {
  category?: ProductCategory | null;
  brands: string[];
  priceRange: [number, number];
  minRating: number;
  minDiscount: number;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: SortOption;
}
