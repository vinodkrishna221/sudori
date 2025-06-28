import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ArtisanSpotlight from '../components/home/ArtisanSpotlight';
import TestimonialSection from '../components/home/TestimonialSection';
import ImpactSection from '../components/home/ImpactSection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <ArtisanSpotlight />
        <TestimonialSection />
        <ImpactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;