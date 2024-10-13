import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div  className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         
         <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
          "Need assistance? Our customer support team is available 24/7 to answer any questions or
           resolve any issues you may have. Reach out to us via chat, email, or phone for quick and friendly help."
           "We offer fast and reliable shipping options to ensure your products arrive on time. Enjoy free shipping on all orders over $50, and track your order every step of the way."
          </p>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
           
           <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 987 654 3210</li>
                <li>contact@shopify.com</li>
            </ul>
           </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center font-semibold'> &copy; Copyright 2024  shopify.com - All  Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer