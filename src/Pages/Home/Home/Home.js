import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Announcement from '../Announcement/Announcement';
import Banner from '../Banner/Banner';
import MenCategories from '../Categories/MenCategories/MenCategories';


const Home = () => {
    return (
        <div className="container">
            <Announcement />
            <Navbar />
            <Banner />
            <MenCategories />
        </div>
    );
};

export default Home;