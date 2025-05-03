import React from 'react';
import SocialBtn from '../SocialBtn/SocialBtn';
import FindUs from '../../Components/FindUs/FindUs';
import Qzone from '../../Components/Qzone/Qzone';

const RightSide = () => {
    return (
        <div className='space-y-6 '>
            <SocialBtn></SocialBtn>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightSide;