// import React from 'react';
import {GiSelfLove  } from 'react-icons/gi';
import {FaCopyright  } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
    <div className='h-100 w-100   '>
            <div className="text-dark  fw-bold gap-4 d-flex justify-content-center align-items-center bg-success bg-opacity-10">
                <p>copyright <FaCopyright/> 2023 DISH Dizzle Made with <GiSelfLove/> by aaaaaaaa ||</p>
                <p>Recipes</p>
                <p>Cookbooks</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                
            </div>
        </div>
        </>
    );
};

export default Footer;