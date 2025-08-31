import { Grid } from '@mui/material';
import React from 'react';

const RestaurantDetail = () => {
    return (
        <div className='px-5 py-5 lg:px-20'>
          
           

            <div className="lg:w-1/2">
                        
                        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Application UI Icon Pack
                        </h1>
                        <div className="flex items-center mt-5">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Version 1.0 (Updated June 5, 2021)
                        </p>

                        <p className="mt-6 text-base text-gray-700">
                            The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="flex-1 sm:flex-none justify-center bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200">
                                Pay $220
                            </button>
                            <button className="flex-1 sm:flex-none justify-center bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                                Preview
                            </button>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-lg font-semibold text-gray-900">Highlights</h2>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-700">200+ SVG icons in 3 unique styles</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-700">Compatible with Figma, Sketch, and Adobe XD</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-700">Drawn on 24 x 24 pixel grid</span>
                                </li>
                            </ul>
                        </div>
                    </div>
        </div>
    );
};

export default RestaurantDetail;