import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import AddressCard from "./AddressCard";
const items = [1, 1]
const Cart = () => {
    return (
        <div>
            <main className="lg:flex justify-between">

                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10" >
                    {items.map((items) => (<CartItem />))}
                    <Divider />


                    <div className="billDetIS px-5 text-sm">
                        <p>Bill Details</p>
                        <div className="space-y-3">

                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹299</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Fee</p>
                                <p>₹21</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Platform Fee</p>
                                <p>₹28</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Chares</p>
                                <p>₹42</p>
                            </div>

                            <Divider />
                        </div>

                        <div className="flex justify-between text-gray-400">
                            <p>Total Pay</p>
                            <p>₹2000</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] ">
                    <div>
                        <h1 className="text-2xl text-center font-semibold py-10 ">Choose Delivery Address</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1, 1, 1, 1].map((item) => (
                                <AddressCard item={item} showButton={true} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cart;
