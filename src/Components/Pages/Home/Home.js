import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Advertisement from '../Advertisement/Advertisement';
import ExtraSection from './Extra/ExtraSection';

const Home = () => {
    const [allFurnitures, setAllFurnitures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/furniture-available')
            .then(res => res.json())
            .then(data => setAllFurnitures(data))
    }, [])


    return (
        <div>
            <div className='w-full'>
                <div className="hero min-h-screen mb-20" style={{ backgroundImage: `url("https://w0.peakpx.com/wallpaper/911/193/HD-wallpaper-bedroom-interior-chest-dressing-table.jpg")` }}>
                    <div className="hero-overlay bg-opacity-90"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className="mb-5 text-4xl font-bold">Welcome to</h2>
                            <h1 className="mb-5 text-7xl font-bold">Comfort Life</h1>
                            <p className="mb-5">This is a place where you can buy resaled furnitures like bes, sofa, table, chare, dressing tables, cupboard etc. We provide good quality products.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* advertisement section */}
            <div>
                <h4 className="text-4xl text-gray-500 font-semibold mb-10">Available Products</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-40 mx-auto p-5'>
                    {
                        allFurnitures.map(furniture => <Advertisement
                            key={furniture._id}
                            furniture={furniture}
                        ></Advertisement>)
                    }
                </div>
            </div>

            <div className='my-5 mx-auto text-center'>
                <h4 className="text-4xl text-gray-500 font-semibold">Our Products Collection</h4>
                <p className="text-xl text-gray-400 mt-5">You will find the best resalable furnitures here</p>
            </div>

            <div>
                <div className="hero my-20 mx-auto">
                    <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                        <img src="https://i.ibb.co/5kHbr1w/sofa.jpg" alt='sofa' className="max-w-xm rounded-lg shadow-2xl lg:ml-40" />
                        <div className='lg:text-start lg:w-1/2 '>
                            <h1 className="text-5xl font-bold text-gray-500">Best Sofa Set!</h1>
                            <p className="py-6 w-96 text-gray-400">We have the best resalable sofa sets in our collection. We collect the best quality products and sel to you.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero my-20 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/bQx7kLm/bed.jpg" alt='bed' className="max-w-xm rounded-lg shadow-2xl lg:mr-40" />
                    <div className='lg:text-start lg:w-1/2 '>
                        <h1 className="text-5xl font-bold text-gray-500">Attractice Bed Set!</h1>
                        <p className="py-6 w-96 text-gray-400">We provide the best resalable bed sets in our collection. We collect the best quality products and sel to you.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="hero my-20 mx-auto">
                    <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                        <img src="https://i.ibb.co/Mh50WFc/dressing-table.jpg" alt='dressing table' className="max-w-xm rounded-lg shadow-2xl lg:ml-40" />
                        <div className='lg:text-start lg:w-1/2 '>
                            <h1 className="text-5xl font-bold text-gray-500">Best Dressing Table Set!</h1>
                            <p className="py-6 w-96 text-gray-400">We have the best resalable dressing table sets in our collection. We collect the best quality products and sel to you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/category">
                <button className='btn btn-outline btn-primary mb-20'>See More</button>
            </Link>

            <div>
                <h2 className="text-5xl text-primary font-semibold">About Us</h2>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;