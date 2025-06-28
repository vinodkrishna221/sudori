import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import ArtisanDirectoryPage from './pages/ArtisanDirectoryPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage';
import CustomerOrdersPage from './pages/customer/CustomerOrdersPage';
import CustomerWishlistPage from './pages/customer/CustomerWishlistPage';
import CustomerAddressesPage from './pages/customer/CustomerAddressesPage';
import CustomerPaymentMethodsPage from './pages/customer/CustomerPaymentMethodsPage';
import CustomerProfilePage from './pages/customer/CustomerProfilePage';
import ArtisanDashboardPage from './pages/artisan/ArtisanDashboardPage';
import ArtisanProductsPage from './pages/artisan/ArtisanProductsPage';
import ArtisanOrdersPage from './pages/artisan/ArtisanOrdersPage';
import ArtisanInventoryPage from './pages/artisan/ArtisanInventoryPage';
import ArtisanDashboardProfilePage from './pages/artisan/ArtisanProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Sudori - Premium Indian Handicrafts | Authentic Artisan Marketplace</title>
        <meta name="description" content="Discover authentic Indian handicrafts from master artisans. Premium handwoven textiles, traditional jewelry, ceramics & more. Supporting artisan communities worldwide." />
        <meta name="keywords" content="Indian handicrafts, handmade, artisan, traditional crafts, textiles, jewelry, pottery" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
          <Route path="/artisans" element={<ArtisanDirectoryPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
          
          {/* Customer Dashboard Routes */}
          <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
          <Route path="/customer/orders" element={<CustomerOrdersPage />} />
          <Route path="/customer/wishlist" element={<CustomerWishlistPage />} />
          <Route path="/customer/addresses" element={<CustomerAddressesPage />} />
          <Route path="/customer/payment-methods" element={<CustomerPaymentMethodsPage />} />
          <Route path="/customer/profile" element={<CustomerProfilePage />} />
          
          {/* Artisan Dashboard Routes */}
          <Route path="/artisan/dashboard" element={<ArtisanDashboardPage />} />
          <Route path="/artisan/products" element={<ArtisanProductsPage />} />
          <Route path="/artisan/orders" element={<ArtisanOrdersPage />} />
          <Route path="/artisan/inventory" element={<ArtisanInventoryPage />} />
          <Route path="/artisan/profile" element={<ArtisanDashboardProfilePage />} />
          
          <Route path="/track-order/:orderId" element={<OrderTrackingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App