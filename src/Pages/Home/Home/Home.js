import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Announcement from '../Announcement/Announcement';
import Banner from '../Banner/Banner';
import MenCategories from '../Categories/MenCategories/MenCategories';
import WomenCategories from '../Categories/WomenCategories/WomenCategories';


const Home = () => {
    return (
        <div className="container">
            <Announcement />
            <Navbar />
            <Banner />
            <MenCategories />
            <WomenCategories />
        </div>
    );
};

export default Home;