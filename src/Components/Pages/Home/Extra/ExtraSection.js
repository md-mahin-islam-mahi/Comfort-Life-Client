import React from 'react';

const ExtraSection = () => {
    return (
        <div className="footer p-10 bg-gray-100 text-primary-content my-20 rounded-lg">
                <div className='mx-auto lg:flex'>
                    <div className='text-start my-5'>
                        <h3 className="text-2xl text-gray-400 font-semibold">Our Timing</h3>
                        <p>We are here 24 hours. <br /> You can buy/sell from here any time you want.</p>
                    </div>

                    <div className='text-start my-5 lg:mx-60'>
                        <h3 className="text-2xl text-gray-400 font-semibold">Out Office</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    <div className='text-start my-5'>
                        <h3 className="text-2xl text-gray-400 font-semibold">Our Contact Info</h3>
                        <p>Phone: +00 000 000</p>
                        <p>Email: comfort@life.com</p>
                    </div>
                </div>
        </div>
    );
};

export default ExtraSection;