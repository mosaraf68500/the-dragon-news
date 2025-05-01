import React from 'react'; 

import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h1>Journalism Without Fear or Favour</h1>

        </div>
    );
};

export default Header;