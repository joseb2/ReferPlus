import React from 'react';
import { Link } from 'react-router-dom';  



//SignIn.js
export default function SignIn() {  
  return ( 
  
    <div id="linkDiv" class="bg-white rounded-lg .input-with-margin border border-solid border-gray-400 w-[350px] absolute top-[10rem] right-[70px] p-4 min-h-[350px] !important">
      <div class="bg-black w-full h-full">
        <div id = "linkDivBox" class="flex flex-col font-sans items-start space-y-1 bg-white w-full h-full p-4">
          <a id = "button-facebook" href=" " class="flex items-center  justify-between text-sm mb-0.875 w-full h-14 font-medium leading-none text-white bg-facebook hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
            <img src="/assets/facebook_box.png" alt="Facebook Icon" class = "mr-6 w-8 h-8 align-center fill-black" />
            <span class = "flex items-center justify-center text-14 ">Continue with Facebook</span>
          </a>
          <a id = "button-amazon" href=" " class="flex items-center justify-between text-sm mb-0.875 w-full h-14 font-medium leading-none text-black bg-amazon hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
            
            <img src="/assets/amazon.png" alt="Amazon Icon" class = "w-8 h-8 align-center " />
            <span class = "flex items-center justify-center text-14">Continue with Amazon</span>
          </a> 
          <Link to="/register" className="flex flex-row justify-end items-center text-sm mb-0.875 w-full h-14 font-medium leading-none text-white bg-email hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
            <span className="flex items-center justify-center">Sign up with email</span>
          </Link>
        </div>
        <div id = "sign-in" class = "p-4 bg-white">
          <div class = "p-4  text-sm w-full h-full">
            <span class = "items-center flex justify-around ">
              Already a member?
              <a class = "text-lg text-bold" href = " ">Sign In</a>
            </span> 
          </div>
        </div>
      </div>
    </div>
  );
}
//single sign-in/ oauth2

