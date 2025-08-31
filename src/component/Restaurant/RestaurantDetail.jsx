import { Grid } from '@mui/material';
import React from 'react';

const RestaurantDetail = () => {
    return (
        <div className="px-5 py-5 lg:px-20">
            <Grid container spacing={4} alignItems="center">
                {/* Left Side: Image */}
                <Grid item xs={12} md={6}>
                    <img
                        className="w-full h-[40vh] object-cover rounded-md"
                        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Restaurant Main"
                    />
                </Grid>
                {/* Right Side: Restaurant Details */}
                <Grid item xs={12} md={6}>
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold">Restaurant Name</h3>
                        <p className="text-gray-500">Cuisine: Indian</p>
                        <p className="text-gray-500">
                            A delightful place to enjoy authentic Indian cuisine.
                        </p>
                        {/* Optional: Add more details here */}
                    </section>
                </Grid>
            </Grid>
        </div>
    );
};

export default RestaurantDetail;