'use client';

 //import {Carousel} from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const MainBanner = () => {
  // ... Code du composant MainBanner

  
};

const Home = () => {
    return (
      <div className='bg-gray-200 h-screen '>
      
        <div className='px-0 lg:px-0 py-20'>
        <Carousel className='w-full shadow-2xl mb-20 border border-gray-500'
          interval={8000}
          transitionTime= {500}
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          mouseTracking
          infiniteLoop
          dynamicHeight
          transitionMode="fade"
          
          
        > 
        
            <div>
              <img src={banner1} className='' alt='Slide 1' />
             
            </div>
            <div>
              <img src={banner2} className='' alt='Slide 2' />
              
            </div>
            <div>
              <img src={banner3} className='' alt='Slide 3' />
            
         </div>
        </Carousel>
        <div></div>
        </div>
      </div>
    );
  }
  


  

export default Home;