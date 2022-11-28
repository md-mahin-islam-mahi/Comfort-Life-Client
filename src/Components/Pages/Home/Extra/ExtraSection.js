import React from 'react';

const ExtraSection = () => {
    return (
        <div className="footer p-10 bg-gray-100 text-primary-content my-20 rounded-lg">
                <div className='mx-auto lg:flex'>
                    <div className='text-center my-5'>
                        <h3 className="text-2xl text-gray-400 font-semibold pb-2 mb-3 border-b-2">Our Timing</h3>
                        <p className='text-gray-400'>We are here 24 hours. <br /> You can buy/sell from here any time you want.</p>
                    </div>

                    <div className='text-center my-5 lg:mx-60'>
                        <h3 className="text-2xl text-gray-400 font-semibold pb-2 mb-3 border-b-2">Out Office</h3>
                        <p className='text-gray-400'>Dhaka, Bangladesh</p>
                    </div>

                    <div className='text-center my-5'>
                        <h3 className="text-2xl text-gray-400 font-semibold pb-2 mb-3 border-b-2">Our Contact Info</h3>
                        <p className='text-gray-400'>Phone: +00 000 000</p>
                        <p className='text-gray-400'>Email: comfort@life.com</p>
                    </div>
                </div>
        </div>
    );
};

export default ExtraSection;