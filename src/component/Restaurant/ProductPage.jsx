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


const ProductPage = () => {
    const [activeTab, setActiveTab] = useState('reviews');

    const tabs = [
        { id: 'reviews', name: 'Customer Reviews' },
        { id: 'faq', name: 'FAQ' },
        { id: 'license', name: 'License' },
    ];

    return (
        <div className="font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Column: Product Image */}
                    <div className="lg:w-1/2">
                        <div className="bg-gradient-to-br rounded-2xl p-8 shadow-lg">
                          <img
                        className='w-full h-[40vh] object-cover rounded-md'
                        src='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='Restaurant Main'
                    />
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

                {/* Tabs Section */}
                <div className="mt-16 border-t border-gray-200 pt-6">
                    <nav className="flex gap-8">
                        {tabs.map((tab) => (
                             <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 font-medium transition-colors duration-200
                                    ${activeTab === tab.id
                                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                                        : 'text-gray-500 hover:text-gray-800'
                                    }`
                                }
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default ProductPage;