import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center text-accent font-semibold'>
            <div></div>
            <div>
                <nav className='flex gap-6'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </nav>
            </div>
            <div className='flex gap-4'>
                <img src={user} alt="" />
                <button className='btn  bg-primary text-white px-8'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default NavBar;