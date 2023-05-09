import React from 'react';
export function SignIn() {
  return (
    <div id="linkDiv" class="bg-red-300 w-[300px] absolute top-[10rem] right-[70px] p-4 h-[350px] !important">
      <div class="bg-black w-full h-full">
        <div class="flex flex-col items-start space-y-1 bg-green-300 w-full h-full p-4">
        <a href=" " class="flex flex-row text-sm mb-0.875 w-full h-14 font-medium leading-none text-white bg-blue-900 hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
          <img src="/assets/facebook.png" alt="Facebook Icon" class = "w-9 h-9 fill-white color-white" />
            Continue with Facebook
          </a>
          <a href=" " class="text-sm mb-0.875 w-full h-14 font-medium leading-none text-black bg-amazon hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
            Continue with Amazon
          </a> 
          <a href=" " class="text-sm mb-0.875 w-full h-14 font-medium leading-none text-white bg-email hover:bg-gray-200 border border-gray-300 py-2 px-4 rounded">
            Continue with Email
          </a>
        </div>
      </div>
    </div>
  );
}


