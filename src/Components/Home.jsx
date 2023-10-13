import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
{/* bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.9)] */}
<div className="h-screen w-full relative">
  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.6)]  flex justify-center items-center">
  <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl text-center w-3/4 leading-snug animate-bounce'>The landing page where customers start their shopping journey.</h1>
  </div>
  <div className="h-full w-full bg-[url(/img/bg.jpg)] bg-cover">
  </div>
</div>
<div class="container mx-auto border px-10 py-14 flex justify-center flex-col items-center gap-y-5 bg-gray-100">
            <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center'>This section provides access to all your products or product categories</h2>
            <p className='text-center sm:w-4/5 lg:w-3/5 leading-snug'>
                Discover our wide range of high-quality products, thoughtfully curated and organized into various categories for your convenience. From fashion to electronics, find everything you need in one place for a seamless shopping experience.</p>
        </div>
            </>
        )
    }
}
