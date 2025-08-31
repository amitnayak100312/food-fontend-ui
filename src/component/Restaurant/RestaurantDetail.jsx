
import React, { useState } from 'react';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

const productImages = [
    { id: 1, url: 'https://i.imgur.com/vT2t2I0.png', alt: 'Tote bag front view' },
    { id: 2, url: 'https://i.imgur.com/gB4g7g4.png', alt: 'Tote bag front view slightly angled' },
    { id: 3, url: 'https://i.imgur.com/rL45eUi.png', alt: 'Tote bag back view' },
    { id: 4, url: 'https://i.imgur.com/nophYyA.png', alt: 'Tote bag top open view' },
];


const [mainImage, setMainImage] = useState(productImages[0]);
const RestaurantDetail = () => {
    return (
        <div className="font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Column: Product Image */}

  
        <div className="lg:w-1/2">
            {/* Main Image Display */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg border-2 border-gray-200">
                <img
                    src={mainImage.url}
                    alt={mainImage.alt}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4 grid grid-cols-4 gap-4">
                {productImages.map((image) => (
                    <button
                        key={image.id}
                        onClick={() => setMainImage(image)}
                        // Apply a ring/border if the thumbnail is the currently selected one
                        className={`relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                        ${mainImage.id === image.id ? 'ring-2 ring-indigo-500 ring-offset-2' : 'ring-1 ring-gray-200'}`}
                    >
                        <span className="sr-only">{image.alt}</span>
                        <img src={image.url} alt={image.alt} className="h-full w-full object-cover object-center rounded-md" />
                    </button>
                ))}
            </div>
        </div>

                    {/* Right Column: Product Details */}
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

                        <p className="mt-6 text-base text-gray-300">
                            The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.
                        </p>

                        

                        <div className="mt-10">
                            <h2 className="text-lg font-semibold">Highlights</h2>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-300">200+ SVG icons in 3 unique styles</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-300">Compatible with Figma, Sketch, and Adobe XD</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-300">Drawn on 24 x 24 pixel grid</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

               
            </main>
        </div>
    );
};

export default RestaurantDetail;