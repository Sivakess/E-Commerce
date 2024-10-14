import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from  '../components/NewsletterBox';


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p >Welcome to Shopify – your one-stop destination for quality products at affordable prices!</p>
        <p> We believe that shopping should be an enjoyable and satisfying experience. Our mission is to provide high-quality products at affordable prices, making it easy for you to find exactly what you need.</p>
        <p>Founded in 2023, we started as a small venture with a vision to bring together unique, trendy, and functional products for our customers. Over the years, we have expanded our offerings to include a diverse range of categories, ensuring there is something for everyone.</p>
        <b className='text-gray-800'>Our Miossion</b>
        <p>We are committed to sustainability and ethical practices. We believe in supporting our local communities and promoting environmentally friendly products whenever possible.
        We appreciate your support and look forward to serving you!
        </p>
        <p>Thank you for choosing Shopify. We look forward to serving you and making your shopping experience memorable.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'}  text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We understand that our customers deserve the best, and we strive to deliver products that meet the highest standards of excellence. Our quality assurance process ensures that every item in our inventory undergoes thorough inspection and testing before it reaches your hands.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'> We understand that your time is valuable. That's why we've designed our shopping experience to be as convenient as possible. Whether you're at home, at work, or on the go, our online store is accessible 24/7, allowing you to shop at your convenience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customer service team is committed to being available when you need us. With multiple channels of communication—be it live chat, email, or phone support—we ensure that you can reach us easily. Our dedicated staff responds promptly to inquiries, ensuring you receive the information you need without delay.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About