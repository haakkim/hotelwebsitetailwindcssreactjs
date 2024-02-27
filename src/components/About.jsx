import React from 'react'

const About = () => {
  return (
    <div className='w-screen h-screen py-8  mt-12 bg-gray-300'>
        <div className='grid   grid-cols-1 md:grid-cols-2 mx-auto py-4 px-8 gap-5'>
        <div className="bg-center bg-cover  bg-no-repeat  h-[100%] mt-5 " 
        style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/09/21/28/exclusive-banquet-1812772_1280.jpg')"}}></div>
                <div className='px-8 mt-5'>
                <h1 className='text-5xl text-center'>Welcome TO ViewHotel</h1>
                <p className='py-12 font-medium  text-left'>Welcome A hotel is an establishment that provides lodging, meals, and various services to travelers and guests. They come in a variety of sizes and types, ranging from small boutique hotels to large
                     luxury resorts. Here's a more detailed description A hotel is an establishment that provides lodging, meals, and various services to travelers and guests. They come in a variety of sizes and types, ranging from small boutique hotels to large luxury resorts. Here's a more detailed description
                     </p>


            </div>


        </div>
      
    </div>
  )
}

export default About
