import React from "react";
import AboutImage from "../assets/acceuil/appartement.jpg";
import Partenaire from "../assets/exploration/bureau.jpg";
import Services from "./Proposer";

const About = () => {
  const explorez = [
    {
      id: 1,
      title: "Nos valeurs",
      descriptin: (
        <p>
          {" "}
          1. Responsabilité;
          <br /> 2. Discipline; <br /> 3. Innovation;
          <br /> 4. Efficacité;
          <br /> 5. Performance.
        </p>
      ),
      image: "/src/assets/exploration/villa.jpg",
      alt: "image villa",
      pageUrl: "/login",
    },
    {
      id: 2,
      title: "Notre mission",
      descriptin: (
        <p>
          {" "}
          Rendre l'investissement immobilier accessible à tous.
          <br />
          Loger des personnes physiques et morales dans le monde en général et
          en Afrique en particulier, tout en facilitant le financement et la
          gestion immobilière, basé sur l'intégrité, la transparence et le
          professionnalisme.{" "}
        </p>
      ),
      image: "/src/assets/exploration/immeuble.jpg",
      alt: "image immeuble",
      pageUrl: "/login",
    },
    {
      id: 3,
      title: "Notre vision",
      descriptin:
        "Concourir à un monde meilleur en multipliant les emplois et en mettant à disposition de la population une offre variée de biens immobiliers.",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
    },
    {
      id: 4,
      title: "Notre engagement",
      descriptin:
        " Chez EFFICACE, nous croyons en la responsabilité sociale et en l'engagement envers notre communauté.",
      image: "/src/assets/exploration/terrain.jpg ",
      alt: "image terrain",
      pageUrl: "/login",
    },
  ];

  const NotreEquipe = [
    {
      id: 1,
      Nom: "Patrick NGUEDA NGUINTO ",
      Profession: " Ingénieur polytechnicien - Génie Logiciel",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 2,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 3,
      Nom: "Patrick ",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 4,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 5,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 6,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 7,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
    {
      id: 8,
      Nom: "Patrick",
      Profession: " ingenieur polytechnicien",
      image: "/src/assets/notreEquipe/patrick.jpg ",
      alt: "image patrick",
      poste: "chef du departement informatique",
      pageUrl: "#!",
    },
  ];

  const Services = [
    {
      id: 1,
      service: "Accompagnement des Sociétés Civiles Immobilières (SCI) ",
      descriptin:
        "Ce service consiste à fournir un soutien complet dans la gestion administrative et patrimoniale des biens immobiliers détenus par ces entités.",
    },
    {
      id: 2,
      service: "Conception et mise en service des ERP de gestion en BTP ",
      descriptin:
        "  Il s'agit de développer des solutions logicielles ou de conseiller sur l'utilisation d'ERP existants pour gérer les processus, les ressources, les coûts et la logistique dans le domaine du BTP.",
    },
    {
      id: 3,
      service: "Création immobilière et BTP ",
      descriptin:
        " Ce service consiste en la conception, le développement et la mise en œuvre de projets immobiliers et de construction dans le secteur du BTP. ",
    },
    {
      id: 4,
      service: " Gestion immobilière ",
      descriptin:
        " La gestion immobilière implique la supervision quotidienne des biens immobiliers, y compris la collecte des loyers, l'entretien, la gestion des locataires, la comptabilité et le reporting financier pour les propriétaires de biens immobiliers.",
    },
    {
      id: 5,
      service: "Investissements immobiliers ",
      descriptin:
        " Ce service propose des conseils et des stratégies d'investissement dans le secteur immobilier pour maximiser les rendements et réduire les risques.",
    },
    {
      id: 6,
      service: "Transformations immobilières",
      descriptin:
        "Ce service se concentre sur la rénovation, la réhabilitation ou la transformation de biens immobiliers existants.",
    },
  ];

  return (
    <div>
      {/* <Services/> */}
      <div className=" mt-20 ">
        <div className="px-0 lg:px-0 py-20  relative ">
          <img
            src={AboutImage}
            alt="About image"
            className="w-full h-[550px] bg-gradient-to-r opacity-80 object-cover z-0 absolute top-0 left-0  "
          />
          <div className="relative z-10  mx-auto text-center md:text-center  lg:ml-48 ml-5 mr-5  bg-Csecondary bg-neutralSilver  rounded-md md:w-[700px] lg:mt-0 hover:scale-95 transition-all duration-300 border border-Cprimary -mt-10">
            <div className="mx-auto text-center md:text-center ml-7 ">
              <h2 className="text-2xl font-semibold mb-7 text-Cprimary md:w-4/5 uppercase ml-0 mr-8 py-4 underline italic ">
                Qui sommes nous ?
              </h2>
              <h2 className="text-3xl font-semibold mb-7 text-black md:w-4/5 uppercase ml-0 mr-7 py-4 -mt-12">
                À Propos d'EFFICACE
              </h2>
              <p className="text-base font-lato text-Csecondary1 mb-0 mr-7 text-justify -mt-10 lg:font-poppins  ">
                {/* ... Votre texte ... */}
                {/* Bienvenue chez EFFICACE, votre partenaire de confiance dans le domaine de l'immobilier depuis 2023. Nous sommes fiers de mettre à votre disposition notre expertise et notre passion pour l'immobilier, afin de vous accompagner dans toutes vos transactions immobilières. <br />  */}
                <span className="font-semibold italic"> EFFICACE</span> est une
                entreprise{" "}
                <span className="font-semibold italic">
                  de création, de transformation, de construction, de
                  financement et de gestion immobilière
                </span>{" "}
                dont le siège est à Kotto, Douala. Créée en 2023, elle est
                dirigée par une équipe de jeunes et dynamique, ayant des
                compétences diverses, unis par la nécessité de loger les
                personnes physiques et morales dans le monde en général et en
                Afrique en particulier. Avec pour slogan{" "}
                <span className="font-semibold italic">
                  « l'innovation cœur de nos actions »
                </span>
                , elle apporte dans le domaine de l'immobilier des solutions à
                la fois efficaces, innovantes voir efficientes pour faciliter la
                vie des investisseurs et des usagers du secteur de l'immobilier.
                Elle permet d'investir dans le secteur immobilier à partir de{" "}
                <span className=" italic font-semibold"> 100.000 fcfa</span> et
                met à la disposition des usagers du secteur des outils de
                gestion de construction.
                {/* <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5 text-center'>Notre Mission</h3> */}
                {/* <a href="/accueil">
                            <button className='btn-primary px-4 py-2 mb-3 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ml-3'>En savoir plus</button>
                         </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Le texte d'appropos */}

      <div className="text-center md:-end-1/2 mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-Csecondary1 lg:pt-36 uppercase -mt-20">
          Les valeurs d'EFFICACE
        </h2>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen  py-1 mt-0">
        <div className="grid lg:grid-cols-4 gap-7 mb-20 mt-3 items-center mr-3">
          {explorez.map((explorez) => (
            <div
              key={explorez.id}
              className="w-full md:w-2/3 lg:w-full h-full mx-auto bg-Csecondary1 rounded-2xl shadow-2xl mb-2 border border-Cprimary hover:scale-95 transition-all duration-300 "
            >
              <a href={explorez.pageUrl}>
                <div className=" relative w-full h-72 ">
                  <img
                    src={explorez.image}
                    alt="Les valeur d'efficace"
                    className="bg-Csecondary1 absolute top-0 left-0 w-full  h-full object-cover z-0 rounded-md "
                  />
                </div>
              </a>
              <div className="flex flex-col items-center justify-center px-2  pb-1">
                <h3 className="my-2 text-2xl font-poppins font-semibold text-white uppercase">
                  {explorez.title}
                </h3>
                <p className=" text-lg font-serif text-texteCouleur text-justify">
                  {explorez.descriptin}
                </p>
                {/* <p color= 'secondary1' className='font-secondary mb-10 lg:mb-0'>Commandez</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center md:-end-1/2 mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-Csecondary1 pt-10 uppercase ">
          Nos domaines de compétences
        </h2>
        <h2 className="text-lg font-semibold mb-4 text-Cprimary ">
          Nous offrons une large gamme de services innovants dans le domaine de
          l'immobilier :
        </h2>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen  py-5">
        <div className="grid lg:grid-cols-3 gap-7 mb-20  items-center mr-3 -mt-4">
          {Services.map((Services) => (
            <div
              key={Services.id}
              className="w-full md:w-2/3 lg:w-full h-full shadow-2xl mb-1 border border-Cprimary flex items-center gap-4 bg-neutral-200 px-9 py-10 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300  "
            >
              <div className="flex flex-col items-center justify-center px-2  pb-1">
                <h3 className="my-2 text-xl font-poppins font-semibold text-Cprimary">
                  {Services.service}
                </h3>
                <p className=" text-lg font-serif text-texteCouleur text-justify">
                  {Services.descriptin}
                </p>
                {/* <p color= 'secondary1' className='font-secondary mb-10 lg:mb-0'>Commandez</p> */}
              </div>
            </div>
          ))}

          <a
            href="src/assets/documents/Offre de services_à partager.pdf"
            target="_blank"
          >
            <button className="btn-primary px-3 py-2 ml-2 bg-Cprimary text-white rounded hover:bg-Csecondary1 transition-all duration-300 hover:-translate-y-4 -mt-2 ">
              En savoir plus
            </button>
          </a>
        </div>
      </div>

      {/* <div className='px-4 lg:px-8 max-w-screen-2x1 mx-auto my-8 mt-7'>
            
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={AboutImage} alt="" className='rounded-md'/>
            </div>
            

               <div className='md:w-3/5 mx-auto text-center md:text-left mt-4'>
                
                  
                   <h2 className='text-lg font-semibold mb-4 text-Cprimary text-justify'>Nous offrons une large gamme de services innovants dans le domaine de l'immobilier :</h2>
                   <div className='text-cente md:-end-1/2 mx-auto text-texteCouleur '>


                  
                    <h3 className='text-lg font-semibold mb-1 c lg:pt-2'>Accompagement des Societes Commerciale 
                    Immobilieres (SCI)</h3>
                    
                    <h3 className='text-lg font-semibold mb-1 lg:pt-2'>Conception et mise en service des ERP de gestion en BTP</h3>
              
                    <h3 className='text-lg font-semibold mb-1  lg:pt-2'>Creation immobilieres et BTP </h3>
         
                    <h3 className='text-lg font-semibold mb-1  lg:pt-2 '>Gestion immobilere </h3>
             
                    <h3 className='text-lg font-semibold mb-1  lg:pt-2 '>Investissements immobilieres </h3>
               
                    <h3 className='text-lg font-semibold mb-1  lg:pt-2'>Transformatons immobilieres </h3>
                   
                </div>

                   <a href="src/assets/documents/Offre de services_à partager.pdf"><button className='btn-primary px-3 py-2 ml-3 bg-Cprimary text-white rounded hover:bg-Csecondary1 transition-all duration-300 hover:-translate-y-4 mt-5'>En savoir plus</button></a>
               </div>


               
           
        </div>
       
            </div> */}

      {/* <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilve w-screen py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                    <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-2/3'>Faites vos differentes <br /> <span className='text-brandPrimary'>contirbutions</span></h2>
                    <p className='md:w-3/4 text-base text-neutralDGrey mb-8 text-justify' >Faites confiance à EFFICACE pour réaliser vos aspirations immobilières. </p>
                    </div>
                    
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'> 
                            <div className='flex items-center gap-4 bg-neutral-200 px-9 py-10 shadow-lgrounded-md mx-auto rounded-md     hover:scale-95 transition-all duration-300 '>
                            <h3 className='mb-3 text-neutralGre font-semibold'>Accompagement des Societes Commerciale </h3>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/evenement.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Evenement</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'> 
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/club.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>245,548</h4>
                                    <p>Club</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/payement.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Payement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

      <div className="text-center md:-end-1/2 mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-Csecondary1 lg:-mt-20 uppercase -mt-14">
          Notre equipe
        </h2>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 bg-neutralSilver mx-auto my-8 mt-7 p-3">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div>
            <img src={AboutImage} alt="" className="rounded-md " />
          </div>

          <div className="md:w-3/5 mx-auto text-center md:text-left lg:mt-10">
            {/* <h2 className='text-4xl font-semibold mb-4 text-neutralDGrey  md:w-4/5'>À Propos d'EFFICACE</h2> */}
            <p className="md:w-4/4 text-lg font-poppins text-texteCouleur mb-8 text-justify ">
              Notre équipe puri-discilinnaires est composée de professionnels
              jeunes et dynamique, passionnés qui connaissent le marché local
              comme leur poche. Chacun de nos agents est dévoué à vous aider à
              atteindre vos objectifs immobiliers, que vous cherchiez à acheter
              votre première maison, à vendre votre propriété existante, ou à
              investir dans des opportunités immobilières.
            </p>
            {/* <a href="src/assets/documents/Offre de services_à partager.pdf"><button className='btn-primary px-3 py-2 ml-3 bg-Cprimary text-white rounded hover:bg-Csecondary1 transition-all duration-300 hover:-translate-y-4'>En savoir plus</button></a> */}
          </div>
        </div>
        <div className="text-center md:-end-1/2 mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-Cprimary lg:pt-10  underline ">
            Nos responsables
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-x-2 gap-y-4 mb-20 mt-7 xl:ml-12 ">
          {NotreEquipe.map((NotreEquipe) => (
            <div
              key={NotreEquipe.id}
              className="w-full md:w-2/3 lg:w-full h-full mx-auto rounded-2xl le  hover:scale-95 transition-all duration-300"
            >
              <a href={NotreEquipe.pageUrl}>
                <div className="relative w-44 h-44 lg:-ml-14 lg:left-14 left-1/3 xl:left-20 -ml-10  ">
                  <img
                    src={NotreEquipe.image}
                    alt={NotreEquipe.alt}
                    className="bg-Csecondary1 absolute top-0 left-0 h-full w-full object-center z-0 rounded-full shadow-2xl mb-20 border border-Csecondary1"
                  />
                </div>
              </a>
              <div className="flex flex-col items-center justify-center px-2 pb-3 lg:-ml-14 ">
                <h3 className="my-3 text-2xl font-poppins font-semibold text-Csecondary mr-0">
                  {NotreEquipe.Nom}
                </h3>
                <p className="-my-2 text-center text-base font-serif text-texteCouleur lg:-ml-10 ">
                  {NotreEquipe.Profession} <br />
                  {NotreEquipe.poste}
                </p>
                {/* <p  className='text-center text-base font-serif text-texteCouleur -ml-2'>{NotreEquipe.poste}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center md:-end-1/2 mx-auto">
        <h2 className="text-4xl font-semibold  mb-4 text-Csecondary1 lg:pt-7 uppercase ">
          Nos partenaires
        </h2>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={Partenaire} alt="" className="float-left rounded-md " />
          </div>
          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div className="px-14">
              <h5 className="text-CPrimary text-3xl font-semibold mb-2">
                Ils nous ont fait confiance
              </h5>
              <p className="text-lg font-poppins text-texteCouleur mb-8">
                Faites confiance à EFFICACE pour réaliser vos aspirations
                immobilières.{" "}
              </p>
              <div>
                {/* classer les logo horizontalement */}
                <div className="flex items-center gap-8 flex-wrap ">
                  <img
                    src="src/assets/company/company1.jpg"
                    alt=""
                    className="cursor-pointer w-16 h-16"
                  />
                  <img
                    src="src/assets/company/company2.jpg"
                    alt=""
                    className="cursor-pointer w-16 h-16"
                  />
                  <img
                    src="src/assets/company/company3.jpg"
                    alt=""
                    className="cursor-pointer w-16 h-16"
                  />
                </div>
                {/* <div className='flex items-center mt-8 '>
                            <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 flex items-center'>
                             Rencontrer tout les clients {" "}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 25 11" fill="none" className='ml-0'>
                                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905ML1 5.39905" stroke="#4CAF4F" />
                                </svg>
                            </a>
                                
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutralSilver h-20 font-poppins text-xl lg:flex items-center flex justify-between lg:px-10  px-5 border-y border-Csecondary1 ">
        <p className="text-texteCouleur font-semibold lg:text-3xl">
          Avez-vous un projet? <br /> Parlons-en
        </p>

        <button className="bg-Cprimary  text-white py-2 px-4  transition-all duration-300 rounded-full hover:bg-Csecondary1 animate ">
          {" "}
          <a href="/contact">Contactez-nous</a>{" "}
        </button>
      </div>

      {/* <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen py-10  '>
                <div className='flex flex-col md:flex-row justify-between items-center mr-10 ml-10  gap-8'>
                    <div className='md:w-1/2'>
                    <h2 className='text-3xl font-semibold mb-4 text-Cprimary md:w-2/3'>Ils nous ont fait confiance </h2>
                    <p className='md:w-3/4 text-lg font-poppins text-texteCouleur mb-8 text-justify' >Faites confiance à EFFICACE pour réaliser vos aspirations immobilières. </p>
                    </div>
                    
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-7 items-center flex-wrap -mt-4'>
                        <div className='space-y-5'> 
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/company/company1.jpg" alt="" className='h-16 w-16'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Membres</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/company/company2.jpg" alt="" className='h-16 w-16'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Membres</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/company/company3.jpg" alt="" className='h-16 w-16'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Evenement</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-5'> 
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/club.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>245,548</h4>
                                    <p>Club</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/membre2.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Membres</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/payement.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Payement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div> */}

      {/* <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8 mt-[500px]'>
                    
                    
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                    
                    
                    <div className='md:w-3/5 mx-auto text-center md:text-center ml-7'>
                        <h2 className='text-5xl font-semibold mb-7 text-neutralDGrey  md:w-4/5'>À Propos d'EFFICACE</h2>
                        <p className='md:w-3/4 text-base text-neutralDGrey mb-8  text-justify' >
                                  
                            Bienvenue chez EFFICACE, votre partenaire de confiance dans le domaine de l'immobilier depuis 2023. Nous sommes fiers de mettre à votre disposition notre expertise et notre passion pour l'immobilier, afin de vous accompagner dans toutes vos transactions immobilières.
                            <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5'>Notre Mission</h3>
                            Chez EFFICACE, notre mission est de vous offrir un service immobilier de premier ordre, basé sur l'intégrité, la transparence et le professionnalisme. Nous comprenons que l'achat, la vente ou la location d'une propriété est l'une des décisions les plus importantes de votre vie, c'est pourquoi nous nous engageons à vous fournir un accompagnement personnalisé et des solutions sur mesure.

                            <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5'>Notre Équipe</h3>
                            Notre équipe d'experts en immobilier est composée de professionnels passionnés qui connaissent le marché local comme leur poche. Chacun de nos agents est dévoué à vous aider à atteindre vos objectifs immobiliers, que vous cherchiez à acheter votre première maison, à vendre votre propriété existante, ou à investir dans des opportunités immobilières.

                            <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5'>Nos Services</h3>
                            tels que l'achat, la vente, la location, la gestion de biens, etc.

                            <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5' >Notre Engagement envers la Communauté</h3>
                            Chez EFFICACE, nous croyons en la responsabilité sociale et en l'engagement envers notre communauté. Nous nous efforçons de contribuer activement au bien-être de notre région en participant à des initiatives locales et en soutenant des œuvres de bienfaisance qui nous tiennent à cœur.

                            <h3 className='text-3xl font-semibold mb-4 text-neutralDGrey md:w-4/5'>Contactez-Nous</h3>
                            Nous sommes impatients de vous servir et de vous aider à concrétiser vos rêves immobiliers. N'hésitez pas à nous contacter pour discuter de vos besoins ou pour planifier une consultation gratuite. Chez EFFICACE, nous sommes là pour vous à chaque étape de votre parcours immobilier.

                            Faites confiance à EFFICACE pour réaliser vos aspirations immobilières. Nous sommes plus qu'une entreprise immobilière, nous sommes votre partenaire pour un avenir immobilier prospère.
                        </p>
                            <button className='btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>En savoir plus</button>
                    </div>
                    
                </div>
                
            </div> */}

      {/* <Services/>
           
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilve w-screen py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                    <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-2/3'>Faites vos differentes <br /> <span className='text-brandPrimary'>contirbutions</span></h2>
                    <p className='md:w-3/4 text-base text-neutralDGrey mb-8 text-justify' >Faites confiance à EFFICACE pour réaliser vos aspirations immobilières. </p>
                    </div>
                    
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'> 
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/membre2.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Membres</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/evenement.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Evenement</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'> 
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/club.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>245,548</h4>
                                    <p>Club</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="src/assets/icons/payement.png" alt="" className='h-20 w-20'/>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>2,245,548</h4>
                                    <p>Payement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
    </div>
  );
};

export default About;
