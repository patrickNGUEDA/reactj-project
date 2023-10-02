'use client';

import {Carousel} from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg';



const Home =()=>{
    return(
        <div className='bg-neutralSilver w-screen' id='accueil'>
            <div className='px-4 lg:px-14 max-w-screen2xl mx-auto w-screen h-screen'>
   
            <Carousel className='w-full mx-auto'>
                    <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                         {/**ajout du texte*/}
                         <div className='md:w-1/2'>

                         <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-2/4 leading-snug'>
                            Ta propriété est <span className='text-brandPrimary leading-snug'>notre priorité</span>
                            </h1>
                            <p className='text-neutralGrey italic text-base mb-4'> L'innovation , au coeur de nos activitées</p>
                            <button className='px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Registre</button>
                         </div>
                    </div>
                    <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                         {/**ajout du texte*/}
                         <div className='md:w-1/2'>

                         <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-2/4 leading-snug'>
                            Ta propriété est <span className='text-brandPrimary leading-snug'>notre priorité</span>
                            </h1>
                            <p className='text-neutralGrey italic text-base mb-4'>Pensez et nous realisons</p>
                            <button className='px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Registre</button>
                         </div>
                    </div>
                    <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                         {/**ajout du texte*/}
                         <div className='md:w-1/2'>

                         <h1 className='text-2xl font-semibold mb-4 text-neutralDGrey md:w-2/4 leading-snug'>
                            Ta propriété est <span className='text-brandPrimary leading-snug'>notre priorité</span>
                            </h1>
                            <p className='text-neutralGrey italic text-base mb-4'> L'innovation , au coeur de nos actions</p>
                            <button className='px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Registre</button>
                         </div>
                    </div>
                    {/* <div className='flex h-full items-center justify-center '>
                         slide 2
                    </div>
                    <div className='flex h-full items-center justify-center '>
                         slide 3
                    </div>
                    <div className='flex h-full items-center justify-center'>
                        slide 4
                    </div>
                    <div className='flex h-full items-center justify-center'>
                        slide 5
                    </div> */}
                </Carousel>
            </div>
        </div>
    )
}


  

export default Home;