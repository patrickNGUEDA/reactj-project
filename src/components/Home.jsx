"use client";

//import {Carousel} from 'flowbite-react';
import React, { useState, useEffect, useRef } from "react";
import Appartement from "../assets/exploration/Appartement.jpg";
import Bureau from "../assets/exploration/bureau.jpg";
import Duplex from "../assets/exploration/duplex.jpg";
import Immeuble from "../assets/exploration/immeuble.jpg";
import Magasin from "../assets/exploration/magasin.jpg";
import Studio from "../assets/exploration/studio.jpg";
import Terrain from "../assets/exploration/terrain.jpg";
import Villa from "../assets/exploration/villa.jpg";
import Carousel1 from "../assets/acceuil/imgCarousel1.jpg";
import Carousel2 from "../assets/acceuil/imgCarousel2.png";
import Carousel3 from "../assets/acceuil/imgCarousel3.png";
import Carousel4 from "../assets/acceuil/imgCarousel4.png";

import Accampagnement from "../assets/accompagnement/accompagnement2.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchForm from "./SousMenu/SearchForm";
import Services from "./Proposer";

const Home = () => {
  const blog = [
    {
      id: 1,
      title: "Créer des processus de sauvegarde rationalisés",
      image: "/src/assets/image18.png",
    },
    {
      id: 2,
      title: "Quelles sont vos responsabilités en matière d'immobilier",
      image: "/src/assets/image19.png",
    },
    {
      id: 3,
      title: "Réorganiser le modèle de vos proprietes avec nos notre equipe",
      image: "/src/assets/image20.png",
    },
    {
      id: 4,
      title: "Créer des processus de sauvegarde",
      image: "/src/assets/image18.png",
    },
  ];

  const explorez = [
    {
      id: 1,
      title: "Terrains",
      descriptin:
        " C'est sont des parcelles de terre qui peuvent être utilisée à diverses fins, telles que la construction de bâtiments, l'agriculture ...",
      image: "/src/assets/acceuil/terrain.jpg ",
      alt: "image terrain",
      pageUrl: "/terrain",
    },
    {
      id: 2,
      title: "Villa",
      descriptin:
        "Elles sont des propriétés de luxe offrant un espace de vie spacieux et des équipements haut de gamme.",
      image: "/src/assets/acceuil/villa.jpg",
      alt: "image villa",
      pageUrl: "/villa",
    },
    {
      id: 3,
      title: "Immeubles",
      descriptin:
        "Ils sont des propriétés résidentielles ou commerciales comprenant plusieurs unités. Ils sont un excellent investissement pour les propriétaires cherchant à générer des revenus locatifs.",
      image: "/src/assets/acceuil/immeuble.jpg",
      alt: "image immeuble",
      pageUrl: "/immeuble",
    },
    {
      id: 4,
      title: "Appartements",
      descriptin:
        "C'est sont des unités de logement au sein d'un immeuble. Ils offrent un espace de vie pratique et confortable pour les individus et les familles.",
      image: "/src/assets/acceuil/appartement.png",
      alt: "image appatement",
      pageUrl: "/immeuble",
    },
    {
      id: 5,
      title: "Magasins",
      descriptin:
        "C'est sont des espaces commerciaux destinés à la vente au détail. Ils varient en taille et en emplacement, offrant aux commerçants un lieu idéal pour établir leur entreprise.",
      image: "/src/assets/acceuil/magasin.jpg",
      alt: "immage magasin",
      pageUrl: "#",
    },
    {
      id: 6,
      title: "Hotel",
      descriptin:
        "C'est sont des établissements qui proposent des chambres d'hébergement temporaire aux clients.",
      image: "/src/assets/acceuil/hotel.png",
      alt: "immage hotel",
      pageUrl: "#",
    },
    {
      id: 7,
      title: "Bureaux",
      descriptin:
        "Ils offrent un environnement professionnel pour le travail, avec différentes configurations allant des espaces de travail partagés aux bureaux privés.",
      image: "/src/assets/acceuil/bureau.jpg",
      alt: "image bureau",
      pageUrl: "#",
    },
    {
      id: 8,
      title: "Projets architecturaux ",
      descriptin:
        "Font référence à la conception et à la planification d'un bâtiment ou d'une structure. Cela englobe la vision créative de l'architecte, les plans, les dessins et toutes les spécifications nécessaires à la construction.",
      image: "/src/assets/acceuil/projetArchi.png",
      alt: "imge projet archi",
      pageUrl: "#",
    },
  ];

  const slides = [
    { imgSrc: Carousel1, label: "Slide 1" },
    { imgSrc: Carousel2, label: "Slide 2" },
    { imgSrc: Carousel3, label: "Slide 3" },
    { imgSrc: Carousel4, label: "Slide 4" },
  ];

  return (
    <div className=" h-full  ">
      <div className="px-0 lg:px-0 py-14  relative ">
        <div className="absolute inset-0 z-10 flex justify-center items-center -mt-44 ">
          <SearchForm />
        </div>
        <div className="lg:w-full h-full flex items-center justify-cente w-auto">
        <Carousel
          className="custom-carousel custom-carousel-image  "
          showStatus={false}
          showThumbs={false}
          centerMode
          dynamicHeight
          autoPlay
          interval={8000}
          infiniteLoop
          transitionTime={500}
          stopOnHover={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className=" lg:w-full w-[700px]">
              <img src={slide.imgSrc} alt={slide.label} />
            </div>
          ))}
        </Carousel>
        </div>
        
      </div>
      <div className="text-center md:-end-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-Csecondary1 lg:mt-0 -mt-14 uppercase">
          Explorez le monde immobilier
        </h2>
      </div>
      <div className="px-1 lg:px-8 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen py-1 mt-0">
        <div className="grid lg:grid-cols-4 gap-x-3 md:gap-10 mb-20 mt-3  lg:ml-5 ">
          {explorez.map((explorez) => (
            <div
              key={explorez.id}
              className="w-full md:w-2/3 lg:w-full h-full mx-auto rounded-2xl  hover:scale-95 transition-all duration-300"
            >
              <a href={explorez.pageUrl} className="">
                <div className="relative w-60 h-60 xl:ml-28  left-10 ml-6 xs:w-52 xs:h-52  items-stretch  ">
                  <img
                    src={explorez.image}
                    alt="Mes biens immobiliers"
                    className="bg-Csecondary1 absolute top-0 left-0 h-full w-full object-cover z-0 rounded-full shadow-2xl mb-20 border border-Csecondary1 brightness-125 md:-ml-32 "
                  />
                </div>
              </a>
              <div className="flex flex-col items-center justify-center  pb-3">
                <h3 className="my-3 text-2xl font-poppins font-semibold text-Csecondary mr-0 lg:mr-14">
                {explorez.title}
                </h3>
                <p className="text-center text-base font-serif text-texteCouleur lg:-ml -ml-2">
                  {explorez.descriptin}
                </p>
                {/* <p color= 'secondary1' className='font-secondary mb-10 lg:mb-0'>Commandez</p> */}
              </div>
            </div>
          ))}

          {/* <div className='w-full md:w-2/3 lg:w-full h-full mx-auto rounded-2xl hover:scale-95 transition-all duration-300 '>
                <div className=' relative w-64 h-64  left-20 lg:left-7'>
                    <img src={Bureau} alt='Mes biens immobiliers' className='bg-Csecondary1 absolute top-0 left-0 h-full w-full object-cover z-0 rounded-full shadow-2xl mb-20 border border-Csecondary1 '></img>
                </div>
                
                <div className='flex flex-col items-center justify-center px-2 pb-3'>
                <h3  className='my-3 text-2xl font-semibold  font-poppins -ml-10'>
                    Bureaux
                </h3>
                <p className='text-center text-base font-serif text-texteCouleur -ml-2 '>
                 Ils offrent un environnement professionnel pour le travail, avec différentes configurations allant des espaces de travail partagés aux bureaux privés.
                </p>
                 <p color= 'secondary1' className='font-secondary mb-10 lg:mb-0'>Commandez</p> 
                </div>
            </div> */}

          {/* <div className='w-full md:w-2/3 lg:w-full h-full mx-auto bg-Csecondary1 rounded-2xl shadow-2xl mb-20 border border-gray-200 hover:scale-95 transition-all duration-300'>
                <div className=' relative w-full h-72 '>
                    <img src={banner2} alt='' className='bg-Csecondary1 absolute top-0 left-0  h-full w-full  object-cover z-0 rounded-md '></img>
                </div>
                
                <div className='flex flex-col items-center justify-center px-5 pb-3'>
                <h3 className='my-3 text-lg  font-poppins text-white'>
                    Du nouveau dans le continent
                </h3>
                <p className='text-center text-base font-montserrat '>
                   Optenez votre bien immoblier a faible et en respectant les delais.
                </p>
                <p color= 'secondary1' className='font-secondary'>Commandez</p>
                </div>
            </div>


            <div className='w-full md:w-2/3 lg:w-full h-full mx-auto bg-Csecondary1 rounded-2xl shadow-2xl mb-20 border border-gray-200 hover:scale-95 transition-all duration-300'>
                <div className=' relative w-full h-72 '>
                    <img src={banner2} alt='' className='bg-Csecondary1 absolute top-0 left-0 w-full  h-full object-cover z-0 rounded-md '></img>
                </div>
                
                <div className='flex flex-col items-center justify-center px-5 pb-3'>
                <h3 variant ="h4" className='my-3 text-lg  font-poppins text-white'>
                    Du nouveau dans le continent
                </h3>
                <p className='text-center text-base font-poppins text-texteCouleur'>
                   Optenez votre bien immoblier a faible et en respectant les delais.
                </p>
                <p color= 'secondary1' className='font-secondary lg:mb-0'>Commandez</p>
                </div>
            </div> */}
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen py-2 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2  -mt-10">
            <h2 className="text-3xl font-semibold font-poppins mb-4 text-Csecondary1 md:w-2/3 text-center">
              Obtenez des conseils{" "}
            </h2>
            <p className="md:w-2/3 text-xl text-texteCouleur font-serif mb-8 text-center ">
              {" "}
              Se connecter pour une expérience plus personnalisée{" "}
            </p>
            <button className="bg-Csecondary1 lg:flex items-center flex justify-center text-white py-2 px-4  transition-all duration-300 rounded hover:bg-Cprimary animate ml-40 font-poppins text-base">
              {" "}
              <a href="/login">Se connecter</a>{" "}
            </button>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 mr-3">
            <img
              src={Accampagnement}
              alt="Mes biens immobiliers"
              className="rounded-md shadow-2xl mb-20 border border-Csecondary1"
            ></img>
          </div>
        </div>

        <div className="text-center md:-end-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold mb-4 font-poppins text-Csecondary1 items-center flex justify-center">
            Comment ça marche ?{" "}
          </h2>
          {/* <p className='text-xl font-serif text-texteCouleur'>Devenez propriétaire d'un bien en moins de 5 min top chrono !</p> */}
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  bg-neutralSilver  w-screen py-2 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 ">
           
            <p className="md:w-2/3 text-2xl font-bold text-texteCouleur font-serif mb-8 text-center ">
              {" "}
              Devenez propriétaire d'un bien en moins de{" "}
              <span className="text-Csecondary1"> 5 min </span> top chrono !
            </p>
           
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 p-7">
            <video
              controls
              width="100%"
              height="80%"
              className="rounded-sm  shadow-2xl border border-Csecondary1 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            >
              <source src="/src/assets/music/test.mp4" type="video/mp4" />
              <p>
                Votre navigateur ne prend pas en charge la lecture de la vidéo.
              </p>
            </video>
            {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ResGY_wAXEE"
                    
                    allowFullScreen
                ></iframe> */}
          </div>
        </div>
      </div>
      <div className="text-center md:-end-1/2 mx-auto p-10  ">
        <h2 className="text-3xl font-semibold mb-4 font-poppins text-Csecondary1 items-center flex justify-center">
          Actualité sur l'immobilier{" "}
        </h2>
        <p className="text-xl font-serif text-texteCouleur">
          Suivre en temps réel les nouvelles sur les biens immobilier
        </p>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen py-2 mt-0">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-0 mt-4">
          {/* <div className='text-center md:-end-1/2 mx-auto'>
            <h2 className='text-4xl font-semibold mb-4 text-neutralDGrey'>Explorez le monde immobilier</h2>

            </div> */}

          <div className="grid lg:grid-cols-4 sm:grid-cols- grid-cols-1 gap-7 items-center justify-between">
            {blog.map((blog) => (
              <div
                key={blog.id}
                className="mx-auto relative mb-12 cursor-pointer .hover:scale-110"
              >
                <img
                  src={blog.image}
                  alt=""
                  className="hover:scale-95 transition-all duration-300"
                />

                <div className="text-center px-4 py-8 bg-white shadow-lgrounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 rounded-md  hover:scale-95 transition-all duration-300">
                  <h3 className="mb-3 text-Cprimary font-semibold">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-base text-Cprimary hover:text-Csecondary1 flex items-center"
                    >
                      En savoir plus
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="20"
                        viewBox="0 0 25 11"
                        fill="none"
                        className="ml-0"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905ML1 5.39905"
                          stroke="#1d4e9c"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
      {/* <Services/> */}
    </div>
  );
};

export default Home;
