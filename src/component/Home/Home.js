import React from 'react';
import Banner from './Banner';
import Card from './Card';
import CardHeading from './CardHeading';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardHeading/>
            <Card/>
        </div>
    );
};

export default Home;