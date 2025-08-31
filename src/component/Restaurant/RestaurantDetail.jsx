import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, Radio, RadioGroup, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';
// import moduleName from 'module'
import FormControlLabel from '@mui/material/FormControlLabel';


// SVG icon for stars
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

// SVG icon for checkmarks
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-400">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

// Image data for the restaurant gallery
const restaurantImages = [
    { id: 1, url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A glass of wine on a table' },
    { id: 2, url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Platter of gourmet food' },
    { id: 3, url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Cozy interior of the restaurant' },
    { id: 4, url: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/335581096/original/7462bc5f9c9411f8e01ba3bf57f2115c69acc68d/create-high-quality-4k-renders-for-your-restaurant-and-cafe-e48e.jpg', alt: 'The exterior of the restaurant at night' },
];

//Category Selection
const category = [
   "Pizza",
   "Pasta",
   "Salad",
   "Dessert"
];

//Food Type Selection
const foodTypes = [
   {label:"All", value:"all"},
  {label:"Veg", value:"veg"},
  {label:"Non-Veg", value:"non_veg"},
  {label:"Seasonal", value:"seasonal"}
];

const RestaurantDetailPage = () => {
    //local state for food type selection
    const [selectedFoodType, setSelectedFoodType] = useState("all");

    // State for the image gallery
    const [mainImage, setMainImage] = useState(restaurantImages[0]);

    return (
        
        <div className="px-5 lg:px-20 font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Restaurant Image Gallery */}
                    <div className="lg-w-1/2">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg border-2 border-gray-700">
                            <img
                                src={mainImage.url}
                                alt={mainImage.alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-4 gap-4">
                            {restaurantImages.map((image) => (
                                <button
                                    key={image.id}
                                    onClick={() => setMainImage(image)}
                                    className={`relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 
                                    ${mainImage.id === image.id ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-700'}`}
                                >
                                    <img src={image.url} alt={image.alt} className="h-full w-full object-cover object-center rounded-md" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Restaurant Details */}
                    <div className="lg-w-1/2">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                            The Golden Spoon
                        </h1>
                        <div className='mt-2 text-lg text-indigo-400 font-semibold'>

                        <LocationOnIcon />  
                        <span>
                            Gujarat,Surat
                        </span>
                        <br />  
                        <CalendarTodayIcon />
                            <span>
                                Mon-Sun 10:00 AM - 11:00 PM(Today)
                            </span>
                        </div>


                        <div className="flex items-center mt-3">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                             <p className="ml-2 text-sm text-gray-400">451 reviews</p>
                        </div>
                        <p className="mt-4 text-gray-400">
                            Experience a culinary journey with our exquisite selection of authentic Indian and Continental dishes. The Golden Spoon offers a sophisticated atmosphere perfect for any occasion.
                        </p>

                        <p className="mt-6 text-2xl font-bold text-white">Avg. Cost: ₹1,200 for two</p>
                        
                        <div className="mt-8 flex items-center gap-4">
                            <button className="flex-1 justify-center bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200">
                                Book a Table
                            </button>
                            <button className="flex-1 justify-center bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                                View Menu
                            </button>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-lg font-semibold text-white">Highlights</h2>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-400">Authentic Indian Cuisine</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-400">Live Music on Weekends</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-gray-400">Rooftop Seating Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        
               
             <Divider />
                    <section className="pt-[2rem] lg:flex relative ">
                            <div className="space-y-10 lg:w-[20%] filter">
                                
 
                             <div className="space-y-5 lg:sticky top-28">
                              <div>
                                <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                  Food Type
                                </Typography>

                                <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                    <RadioGroup value={selectedFoodType} 
                                    onChange={(e) => setSelectedFoodType(e.target.value)} name='food-type' value={selectedFoodType}>
                                        {foodTypes.map((type) => (
                                            <FormControlLabel
                                                key={type.value}
                                                control={<Radio />}
                                                label={type.label}
                                                
                                            /> 
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                              </div>
                            </div>
                            </div>
                    </section>
        </div>
    );
};

export default RestaurantDetailPage;