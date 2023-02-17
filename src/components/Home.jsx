import React from 'react'

function Home() {
  return (
    <>
        <div className="flex flex-col justify-center items-center bg-[url('/src/images/background/cover.png')] bg-cover bg-center bg-no-repeat py-[2rem] animate-[zoomloop_10s_ease-in-out_infinite]">
            <img src="/src/images/logo/gta_logo.png" alt="Grand Theft Auto Logo" className='h-1/2 w-1/2 md:h-1/3 md:w-1/3 lg:h-1/4 lg:w-1/4 ease-out duration-300 hover:invert'/>
            <p className='text-white mt-5 mx-6 md:w-3/4 lg:w-1/2 text-justify font-[700] drop-shadow-[3px_3px_1px_#000]'>Grand Theft Auto (GTA) is a series of action-adventure games created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its parent company, Rockstar Games.</p>
        </div>
    </>
  )
}

export default Home