import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import Fondo from "../assets/fondo3.png";

const Contact = () => {
  return (
    <div 
      className="bg-black text-white py-20" 
      id="contact" 
      style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 bg-opacity-75">
        <h2 className="text-4xl font-bold text-center mb-12">Contactame</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>¡Hablemos!</h3>
            <p>Estoy abierto a discutir proyectos de desarrollo web u oportunidades de asociación.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>thiagovilchez@iresm.edu.ar</a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+3541267980</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Rio Cosquin 783, San Antonio de Arredondo, Córdoba, Argentina</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Tu Nombre</label>
                <input 
                  type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Ingresa tu nombre' 
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input 
                  type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Ingresa tu Email' 
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Mensaje</label>
                <textarea 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  rows="5" 
                  placeholder='Ingresa tu mensaje' 
                />
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
