import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 border-2 broder-white'/>
        <h1 className='text-4xl font-bold'>
            Hola, soy {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Thiago Vilchez</span>
            , Programador de nivel Training 
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Especializado en programacion de paginas web.
        </p>

    </div>
  )
}

export default Hero