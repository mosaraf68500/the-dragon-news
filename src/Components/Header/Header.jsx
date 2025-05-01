import React from 'react'; 

import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4 space-y-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
            <p className='text-accent font-bold'>{format(new Date(),"EEEE , MMMM dd , yyyy")}</p>

        </div>
    );
};

export default Header;