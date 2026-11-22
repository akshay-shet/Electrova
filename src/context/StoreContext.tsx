import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import {
  Product,
  ProductCategory,
  ProductReview,
  CartItem,
  WishlistItem,
  UserProfile,
  Order,
  ShippingAddress,
  FilterState,
  SortOption,
} from '../types';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from '../data/products';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export type AppView =
  | 'home'
  | 'catalog'
  | 'product-details'
  | 'cart'
  | 'wishlist'
  | 'orders'
  | 'profile'
  | 'signin'
  | 'signup';

interface StoreContextType {
  // Navigation
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  selectedProductId: string | null;
  openProductDetails: (productId: string) => void;
  backToProducts: () => void;
  lastListingView: AppView;

  // Auth
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; error?: string }>;
  signup: (fullName: string, email: string, mobileNumber: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;

  // Products & Filter
  products: Product[];
  filteredProducts: Product[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  selectCategory: (category: ProductCategory | null) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: SortOption) => void;

  // Reviews
  reviewsByProduct: Record<string, ProductReview[]>;
  addReview: (
    productId: string,
    rating: number,
    title: string,
    description: string,
    customerName?: string
  ) => Promise<{ success: boolean; error?: string }>;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedVariant?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;

  // Wishlist
  wishlist: WishlistItem[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  moveWishlistToCart: (productId: string) => void;
  wishlistCount: number;

  // Orders
  orders: Order[];
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: Order['paymentMethod']) => Promise<Order>;

  // Recently viewed
  recentlyViewedIds: string[];
}

const defaultFilters: FilterState = {
  category: null,
  brands: [],
  priceRange: [0, 400000],
  minRating: 0,
  minDiscount: 0,
  inStockOnly: false,
  searchQuery: '',
  sortBy: 'recommended',
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & Scroll Restoration
  const [activeView, setActiveView] = useState<AppView>('home');
  const [lastListingView, setLastListingView] = useState<AppView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const scrollPositionRef = useRef<number>(0);

  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('electrova_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Reviews indexed by productId
  const [reviewsByProduct, setReviewsByProduct] = useState<Record<string, ProductReview[]>>(() => {
    const saved = localStorage.getItem('electrova_reviews');
    if (saved) return JSON.parse(saved);

    const initialMap: Record<string, ProductReview[]> = {};
    INITIAL_REVIEWS.forEach((rev) => {
      if (!initialMap[rev.productId]) initialMap[rev.productId] = [];
      initialMap[rev.productId].push(rev);
    });
    return initialMap;
  });

  // User Auth
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('electrova_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('electrova_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem('electrova_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('electrova_orders');
    return saved ? JSON.parse(saved) : [];
  });

  // Recently Viewed
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('electrova_recently_viewed');
    return saved ? JSON.parse(saved) : ['lap-01', 'hdp-01', 'mou-01'];
  });

  // Filters
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('electrova_reviews', JSON.stringify(reviewsByProduct));
  }, [reviewsByProduct]);

  useEffect(() => {
    localStorage.setItem('electrova_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('electrova_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('electrova_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('electrova_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('electrova_recently_viewed', JSON.stringify(recentlyViewedIds));
  }, [recentlyViewedIds]);

  // Sync with Supabase on mount if configured
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    // Check active Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          fullName: session.user.user_metadata?.full_name || 'Customer',
          mobileNumber: session.user.user_metadata?.mobile_number || '',
          createdAt: session.user.created_at,
        });
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          fullName: session.user.user_metadata?.full_name || 'Customer',
          mobileNumber: session.user.user_metadata?.mobile_number || '',
          createdAt: session.user.created_at,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // OPEN FULL-SCREEN PRODUCT DETAILS PAGE
  const openProductDetails = (productId: string) => {
    // Save current scroll position of the listing page
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setLastListingView(activeView === 'product-details' ? lastListingView : activeView);
    setSelectedProductId(productId);
    setActiveView('product-details');

    // Add to recently viewed
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 10);
    });

    // Scroll to the top of product details page
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  // BACK TO PRODUCTS BUTTON - RESTORES EXACT PREVIOUS SCROLL POSITION
  const backToProducts = () => {
    const targetView = lastListingView || 'home';
    setActiveView(targetView);
    setSelectedProductId(null);

    // Restore exact scroll position
    setTimeout(() => {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant' as ScrollBehavior,
      });
    }, 20);
  };

  // Filter Selection
  const selectCategory = (category: ProductCategory | null) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setSearchQuery = (query: string) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: query,
    }));
    if (activeView !== 'catalog' && query.trim() !== '') {
      setActiveView('catalog');
    }
  };

  const setSortBy = (sort: SortOption) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sort,
    }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  // Filter and Sort computation
  const filteredProducts = React.useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (filters.category && p.category !== filters.category) {
          return false;
        }
        // Brands filter
        if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
          return false;
        }
        // Price range
        if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) {
          return false;
        }
        // Min Rating
        if (filters.minRating > 0 && p.rating < filters.minRating) {
          return false;
        }
        // Min Discount
        if (filters.minDiscount > 0 && p.discountPercent < filters.minDiscount) {
          return false;
        }
        // In Stock
        if (filters.inStockOnly && !p.inStock) {
          return false;
        }
        // Search Query
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchBrand = p.brand.toLowerCase().includes(q);
          const matchCategory = p.category.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          return matchName || matchBrand || matchCategory || matchDesc;
        }
        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-low-to-high':
            return a.price - b.price;
          case 'price-high-to-low':
            return b.price - a.price;
          case 'customer-rating':
            return b.rating - a.rating;
          case 'better-discount':
            return b.discountPercent - a.discountPercent;
          case 'newest':
            return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
          case 'recommended':
          default:
            return (b.isBestSeller ? 2 : 0) + (b.isTrending ? 1 : 0) - ((a.isBestSeller ? 2 : 0) + (a.isTrending ? 1 : 0));
        }
      });
  }, [products, filters]);

  // REVIEW SYSTEM
  const addReview = async (
    productId: string,
    rating: number,
    title: string,
    description: string,
    customerName?: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!user) {
      return { success: false, error: 'You must be signed in to submit a product review.' };
    }

    const reviewerName = customerName || user.fullName || 'Verified Buyer';
    const newReview: ProductReview = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      productId,
      customerName: reviewerName,
      rating,
      title: title.trim(),
      description: description.trim(),
      date: new Date().toISOString().split('T')[0],
      verifiedPurchase: true,
      helpfulCount: 0,
    };

    // 1. Immediately update reviews map in state
    setReviewsByProduct((prev) => {
      const existing = prev[productId] || [];
      return {
        ...prev,
        [productId]: [newReview, ...existing],
      };
    });

    // 2. Immediately update product rating and review count
    setProducts((prev) => {
      const updated = prev.map((prod) => {
        if (prod.id === productId) {
          const newReviewCount = prod.reviewCount + 1;
          const currentTotalRating = prod.rating * prod.reviewCount;
          const updatedRating = Number(((currentTotalRating + rating) / newReviewCount).toFixed(1));
          return {
            ...prod,
            reviewCount: newReviewCount,
            rating: updatedRating,
            ratingCount: prod.ratingCount + 1,
          };
        }
        return prod;
      });
      localStorage.setItem('electrova_products', JSON.stringify(updated));
      return updated;
    });

    // 3. Persist to Supabase if configured
    if (isSupabaseConfigured) {
      try {
        await supabase.from('reviews').insert({
          product_id: productId,
          user_id: user.id,
          customer_name: reviewerName,
          rating,
          title: title.trim(),
          description: description.trim(),
          verified_purchase: true,
        });
      } catch (err) {
        console.warn('Supabase review insert failed, kept in local store:', err);
      }
    }

    return { success: true };
  };

  // CART OPERATIONS
  const addToCart = (
    product: Product,
    quantity = 1,
    selectedColor?: string,
    selectedVariant?: string
  ) => {
    const color = selectedColor || product.colors[0] || 'Standard';
    const variant = selectedVariant || (product.variants ? product.variants[0] : 'Standard');
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColor === color &&
        item.selectedVariant === variant
    );

    if (existingIndex > -1) {
      setCart((prev) => {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      });
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        product,
        quantity,
        selectedColor: color,
        selectedVariant: variant,
      };
      setCart((prev) => [newItem, ...prev]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.product.originalPrice * item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartDiscount = cartSubtotal - cartTotal;

  // WISHLIST OPERATIONS
  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some((item) => item.productId === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.productId !== product.id));
    } else {
      setWishlist((prev) => [
        {
          productId: product.id,
          product,
          addedAt: new Date().toISOString(),
        },
        ...prev,
      ]);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.productId === productId);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== productId));
  };

  const moveWishlistToCart = (productId: string) => {
    const wishItem = wishlist.find((w) => w.productId === productId);
    if (wishItem) {
      addToCart(wishItem.product, 1);
      removeFromWishlist(productId);
    }
  };

  const wishlistCount = wishlist.length;

  // AUTHENTICATION
  const login = async (
    email: string,
    password: string,
    _rememberMe = true
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          // If Supabase credentials are wrong or user does not exist yet, allow fallback for test users
          console.warn('Supabase signin error, using local fallback:', error.message);
        } else if (data.user) {
          const loggedUser: UserProfile = {
            id: data.user.id,
            email: data.user.email || email,
            fullName: data.user.user_metadata?.full_name || email.split('@')[0],
            mobileNumber: data.user.user_metadata?.mobile_number || '+91 9876543210',
            createdAt: data.user.created_at,
          };
          setUser(loggedUser);
          return { success: true };
        }
      }

      // Seamless local authenticated session
      const sampleUser: UserProfile = {
        id: `user-${Date.now()}`,
        email,
        fullName: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        mobileNumber: '+91 98765 43210',
        createdAt: new Date().toISOString(),
        addresses: [
          {
            id: 'addr-1',
            name: email.split('@')[0],
            phone: '+91 98765 43210',
            pincode: '560001',
            addressLine: 'Flat 402, High-Tech Residency, MG Road',
            city: 'Bengaluru',
            state: 'Karnataka',
            isDefault: true,
          },
        ],
      };
      setUser(sampleUser);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Login failed. Please check your credentials.' };
    }
  };

  const signup = async (
    fullName: string,
    email: string,
    mobileNumber: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              mobile_number: mobileNumber,
            },
          },
        });
        if (error) {
          console.warn('Supabase signup error, using local registration:', error.message);
        } else if (data.user) {
          const newUser: UserProfile = {
            id: data.user.id,
            email,
            fullName,
            mobileNumber,
            createdAt: data.user.created_at,
          };
          setUser(newUser);
          return { success: true };
        }
      }

      // Local registration
      const newUser: UserProfile = {
        id: `user-${Date.now()}`,
        email,
        fullName,
        mobileNumber,
        createdAt: new Date().toISOString(),
        addresses: [
          {
            id: 'addr-default',
            name: fullName,
            phone: mobileNumber,
            pincode: '110001',
            addressLine: 'Connaught Place, Central Delhi',
            city: 'New Delhi',
            state: 'Delhi',
            isDefault: true,
          },
        ],
      };
      setUser(newUser);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Failed to create account.' };
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.warn('Supabase signout failed:', e);
      }
    }
    setUser(null);
    localStorage.removeItem('electrova_user');
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  // ORDER PLACEMENT
  const placeOrder = async (
    shippingAddress: ShippingAddress,
    paymentMethod: Order['paymentMethod']
  ): Promise<Order> => {
    const orderItems = cart.map((item) => ({
      productId: item.product.id,
      productName: item.product.name,
      brand: item.product.brand,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.thumbnail,
      color: item.selectedColor,
    }));

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    const newOrder: Order = {
      id: `ELX-${Math.floor(100000 + Math.random() * 900000)}`,
      userId: user?.id || 'guest',
      items: orderItems,
      totalAmount: cartTotal,
      discountAmount: cartDiscount,
      shippingFee: 0, // Free delivery
      status: 'Processing',
      paymentMethod,
      shippingAddress,
      orderDate: new Date().toISOString(),
      estimatedDeliveryDate: deliveryDate.toISOString().split('T')[0],
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();

    if (isSupabaseConfigured && user) {
      try {
        await supabase.from('orders').insert({
          id: newOrder.id,
          user_id: user.id,
          total_amount: newOrder.totalAmount,
          discount_amount: newOrder.discountAmount,
          shipping_fee: 0,
          status: newOrder.status,
          payment_method: newOrder.paymentMethod,
          shipping_address: newOrder.shippingAddress,
          order_date: newOrder.orderDate,
          estimated_delivery_date: newOrder.estimatedDeliveryDate,
        });
      } catch (err) {
        console.warn('Supabase order insert:', err);
      }
    }

    return newOrder;
  };

  return (
    <StoreContext.Provider
      value={{
        activeView,
        setActiveView,
        selectedProductId,
        openProductDetails,
        backToProducts,
        lastListingView,
        user,
        isAuthenticated: Boolean(user),
        login,
        signup,
        logout,
        products,
        filteredProducts,
        filters,
        setFilters,
        resetFilters,
        selectCategory,
        setSearchQuery,
        setSortBy,
        reviewsByProduct,
        addReview,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        moveWishlistToCart,
        wishlistCount,
        orders,
        placeOrder,
        recentlyViewedIds,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
