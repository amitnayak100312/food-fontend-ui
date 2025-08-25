import React from 'react';
import "./Home.css";
import MultitemCarousel from './MultitemCarousel';
const Home = () => {
  return (
    // The banner itself is the main container and positioning context.
    <div className=''>
    <section className='banner'>
      
      <div className='relative z-10 w-full h-full flex flex-col justify-center items-center'>
        <div className='w-[50vw] text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Eatway</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Your favorite food delivery service</p>
        </div>
      </div>
    </section>
    <section className='p-10 lg:py-10 lg:px-20'>
            <p className='text-2xl lg:text-3xl font-semibold text-center py-10'>
              Discover our top meals, curated just for you!
            </p>
            <MultitemCarousel />
    </section>
    </div>
  );
}

export default Home;