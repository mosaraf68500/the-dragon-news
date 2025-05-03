import React from 'react';

import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const AuthLayOut = () => {
    return (
        <div className='  bg-base-200'>
            <header className='w-11/12 mx-auto py-4'>
                <NavBar></NavBar>
            </header>

            <main className='w-11/12 mx-auto '> 

            <Outlet></Outlet>
            
           

            </main>

        </div>
    );
};

export default AuthLayOut;