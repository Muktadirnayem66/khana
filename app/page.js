import HeroSection from '@/components/landing/HeroSection';
import RecipeCardList from '@/components/landing/RecipeCardList';
import RecipeCategory from '@/components/landing/RecipeCategory';
import React from 'react';

const Home = () => {
  return (
    <>
    <section className="container">
      <HeroSection/>
      
    </section>
    <section className="container py-8">
    <div className="grid grid-cols-12 py-4">

      <RecipeCategory/>
      <RecipeCardList/>
    </div>

    </section>
    </>
  );
};

export default Home;