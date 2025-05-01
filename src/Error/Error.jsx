import React from 'react';

import { NavLink } from 'react-router';
import image from "../assets/images (8) (1).jpg"

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4">Oops!</h1>
            <p className="text-lg text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <img 
                className="w-[400px] rounded-2xl shadow-2xl mb-8 transition-transform duration-300 hover:scale-105" 
                src={image} 
                alt="Error " 
            />
            <NavLink to="/">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
                    Back To Home
                </button>
            </NavLink>
        </div>
    );
};

export default Error;