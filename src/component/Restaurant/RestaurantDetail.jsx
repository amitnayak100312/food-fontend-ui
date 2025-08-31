import { Grid } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RestaurantDetail = () => {
    // Import Swiper components

    return (
        <div className="px-5 py-5 lg:px-20">
            <Grid container spacing={4} alignItems="center">
                {/* Left Side: Main Image */}
                <Grid item xs={12} md={6}>
                    <img
                        className="w-full h-[50vh] object-cover rounded-md"
                        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Restaurant Main"
                    />
                </Grid>
                {/* Right Side: Slider and Details */}
                <Grid item xs={12} md={6}>
                    <Swiper spaceBetween={16} slidesPerView={1} loop>
                        <SwiperSlide>
                            <img
                                className="w-full h-[50vh] object-cover rounded-md"
                                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/335581096/original/7462bc5f9c9411f8e01ba3bf57f2115c69acc68d/create-high-quality-4k-renders-for-your-restaurant-and-cafe-e48e.jpg"
                                alt="Restaurant Side 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-[50vh] object-cover rounded-md"
                                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Restaurant Side 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-[50vh] object-cover rounded-md"
                                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Restaurant Side 3"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <section className="mb-5 mt-5 space-y-2">
                        <h3 className="text-3xl font-bold">Restaurant Name</h3>
                        <p className="text-lg text-gray-500">Cuisine: Indian</p>
                        <p className="mt-1 text-lg text-gray-500">
                            A delightful place to enjoy authentic Indian cuisine.
                        </p>
                    </section>
                </Grid>
            </Grid>
        </div>
    );
};

export default RestaurantDetail;