import React from 'react';
import Footer from '../components/footer';
const Home = () => {
    return (
       <div className="min-h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: "url('C:/Users/kashy/OneDrive/Desktop/nikhil/Alumni-portal/public/Image/1758616677245.jpg')" }}>
            <div className="w-full flex justify-center items-center pt-8 absolute top-0 left-0 z-20">
                <h1 className="text-5xl font-bold text-black drop-shadow-lg mb-4 text-center bg-white bg-opacity-80 px-8 py-2 rounded">ALUMNI-PORTAL</h1>
            </div>
            <Footer />
        </div>
        )
    };
export default Home;