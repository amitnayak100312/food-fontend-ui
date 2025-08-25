import React from 'react';
import "./Home.css";
import MultitemCarousel from './MultitemCarousel';
import { Card } from '@mui/material';
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

    <section className='p-10 lg:py-10 lg:px-20'>
      <h1 className='text-3xl font-semibold py-3 text-center'>
        Order From Our Handpicked Favorites
      </h1>

      <div>
          <Card className='m-5 '></Card>
      </div>
    </section>
    </div>
  );
}

export default Home;