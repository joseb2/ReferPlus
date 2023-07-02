import React from 'react'; 


export default function Navbar() { 
    return ( 
        <div id="container" className="bg-white">
            <div id="navbar" className="h-16 bg-gray-800 text-white flex justify-between items-center px-4">
                <div id="title-navbar" className="flex items-center border-4">
                    <h1 className="text-lg font-bold">Refer+</h1>
                </div>
            </div>  
            <div id="banner" className="h-64 bg-orange-300 flex justify-center items-center">
                <img id="banner-image" href=" " alt="placeholder" className="max-h-full max-w-full"/>
            </div> 
        </div> 
    )}
           
