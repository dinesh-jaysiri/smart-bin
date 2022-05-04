import React from 'react';
import home from '../images/smart.png'

function HomePage(props) {
    return (
        <div className='home-page page-container'>
            <img src={home} className="home-img" />
        </div>
    );
}

export default HomePage;