import React from 'react';
import Button from '../../Button/Button';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://w0.peakpx.com/wallpaper/911/193/HD-wallpaper-bedroom-interior-chest-dressing-table.jpg")` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className="mb-5 text-4xl font-bold">Welcome to</h2>
                    <h1 className="mb-5 text-7xl font-bold">Comfort Life</h1>
                    <p className="mb-5">This is a place where you can buy resaled furnitures like bes, sofa, table, chare, dressing tables, cupboard etc. We provide good quality products.</p>
                    <Button>Explore More</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;