import React from 'react';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <LatestNews ></LatestNews>


            </header>

            <main>

            </main>

            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;