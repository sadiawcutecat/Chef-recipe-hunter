// import React from 'react';
// import Marquee from "react-fast-marquee";
// import './ExtraOne.css'


const ExtraOne = () => {
    return (
        <div className='my-5'>
            <h2 className='text-success fw-bold text-center'>Here Some New foooody!!</h2>
            {/* <Marquee speed={50} pauseOnClick ={true} > */}
                <div className='d-flex justify-content-evenly mt-5'>
                    <div >
                        <img className='images' src="/src/assets/images/appetizer.jpg" alt="" />
                        <p className='text-center'>Appetizer</p>
                    </div>
                    <div>
                        <img className='images' src="/src/assets/images/brunch.jpg" alt="" />
                        <p className='text-center'>Brunch</p>
                    </div>
                    <div>
                        <img className='images' src="/src/assets/images/desserts.jpg" alt=""  />
                        <p className='text-center'>Desserts</p>

                    </div>
                    <div>
                        <img className='images' src="/src/assets/images/dinner.jpg" alt=""  />
                        <p className='text-center'>Dinner</p>
                    </div>
                    <div>
                        <img className='images' src="/src/assets/images/Salad.jpg" alt=""  />
                        <p className='text-center'>Salad</p>
                    </div>
                    <div>
                        <img className='images' src="/src/assets/images/drinks.jpg" alt="" />
                        <p className='text-center'>Drinks</p>
                    </div>
                </div>

            {/* </Marquee> */}

        </div>
    );
};

export default ExtraOne;