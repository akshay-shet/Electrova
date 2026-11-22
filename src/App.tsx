import React from 'react';
import { useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { CartPage } from './components/CartPage';
import { WishlistPage } from './components/WishlistPage';
import { OrdersPage } from './components/OrdersPage';
import { ProfilePage } from './components/ProfilePage';
import { SignInPage } from './components/SignInPage';
import { SignUpPage } from './components/SignUpPage';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const { activeView } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282c3f]">
      <Header />

      <main className="flex-1">
        {activeView === 'home' && <HomePage />}
        {activeView === 'catalog' && <CatalogPage />}
        {activeView === 'product-details' && <ProductDetailsPage />}
        {activeView === 'cart' && <CartPage />}
        {activeView === 'wishlist' && <WishlistPage />}
        {activeView === 'orders' && <OrdersPage />}
        {activeView === 'profile' && <ProfilePage />}
        {activeView === 'signin' && <SignInPage />}
        {activeView === 'signup' && <SignUpPage />}
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
