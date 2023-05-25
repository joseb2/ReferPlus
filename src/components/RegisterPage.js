import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return ( 

    <>
      <h1 className = "mb-8">Register Page</h1> 


      <div class="flex flex-col items-start space-y-2 .input-with-margin">
        <label for="ap_customer_name" class="text-sm font-medium">
            Your name
        </label>
        <input type="text" maxlength="50" id="ap_customer_name" autocomplete="name" placeholder="First and last name" name="customerName" tabindex="1" class="w-full max-w-md p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"></input>
      </div> 
      <div class="flex flex-col items-start space-y-2 .input-with-margin">
        <label for="ap_customer_name" class="text-sm font-medium">
            Your name
        </label>
        <input type="text" maxlength="50" id="ap_customer_name" autocomplete="name" placeholder="First and last name" name="customerName" tabindex="1" class="w-full max-w-md p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"></input>
      </div>
      <div class="flex flex-col items-start space-y-2 .input-with-margin">
        <label for="ap_customer_name" class="text-sm font-medium">
            Your name
        </label>
        <input type="text" maxlength="50" id="ap_customer_name" autocomplete="name" placeholder="First and last name" name="customerName" tabindex="1" class="w-full max-w-md p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"></input>
      </div>
      <div class="flex flex-col items-start space-y-2 .input-with-margin">
        <label for="ap_customer_name" class="text-sm font-medium">
            Your name
        </label>
        <input type="text" maxlength="50" id="ap_customer_name" autocomplete="name" placeholder="First and last name" name="customerName" tabindex="1" class="w-full max-w-md p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"></input>
      </div>



      <Link to="/">Go back to Home</Link>
    </> 
    
  );
}

export default RegisterPage;
