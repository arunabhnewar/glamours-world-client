import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Announcement from '../Announcement/Announcement';
import Banner from '../Banner/Banner';
import MenCategories from '../Categories/MenCategories/MenCategories';
import WomenCategories from '../Categories/WomenCategories/WomenCategories';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div className="container">
            <Announcement />
            <Navbar />
            <Banner />
            <MenCategories />
            <WomenCategories />
            <Products />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;