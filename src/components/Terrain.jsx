import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import YourComponent from "../components/SousMenu/MaisonDropdown";

const Terrain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSelection = (selectedItem) => {
    setSelectedItem(selectedItem);
    setIsOpen(false); // Fermer le sous-menu après la sélection
    const foundItem = PrixMin.find((item) => item.prix === selectedItem.name);
    if (foundItem) {
      setPhoneNum(foundItem.contact);
    } else {
      setPhoneNum("Numéro non trouvé");
    }
  };
  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setIsOpenLocation(false); // Ferme le dropdown des lieux après la sélection
    // Votre logique pour la sélection du lieu
  };

  const handlePriceSelection = (price) => {
    if (selectedItem && parseInt(price, 10) > parseInt(selectedItem, 10)) {
      setSelectedPrice(price);
      setIsOpenPrice(false); // Ferme le dropdown du prix maximum après la sélection
      // Votre logique pour la sélection du prix maximum
    } else {
      // Afficher un message ou appliquer une logique appropriée pour informer l'utilisateur
      alert("Le prix maximum doit être supérieur au prix minimum sélectionné.");
    }
  };

  const PrixMin = [
    "1.000.000",
    "2.000.000",
    "2.500.000",
    "3.000.000",
    "3.500.000",
    "4.000.000",
    "4.500.000",
  ];
  const PrixMax = [
    "1.500.000",
    "2.000.000",
    "2.300.000",
    "2.500.000",
    "3.000.000",
    "3.500.000",
    "4.000.000",
    "4.500.000",
    "5.000.000",
  ];
  const locations = ["VilleA", "VilleB", "VilleC", "VilleD", "VilleE"];

  const blog = [
    {
      id: 1,
      title: "Créer des processus de sauvegarde rationalisés",
      image: "/src/assets/image18.png",
    },
    {
      id: 2,
      title:
        "Quelles sont vos responsabilités en matière d'immobilier et comment pouvez-vous les gérer ?",
      image: "/src/assets/image19.png",
    },
    {
      id: 3,
      title: "Réorganiser le modèle de vos proprietes avec nos notre equipe",
      image: "/src/assets/image20.png",
    },
  ];

  const Terrains = [
    {
      id: 1,
      title: "T",
      descriptin: " Camroun,Douala-Mbangue, derriere le college NAL ",
      image: "/src/assets/exploration/terrain.jpg ",
      alt: "image terrain",
      pageUrl: "/login",
      dimension: "50.000m²",
      prix: "20.000fcfa/m²",
      date: "12/05/2023",
      etat: "a loyer",
    },
    {
      id: 2,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL",
      image: "/src/assets/exploration/villa.jpg",
      alt: "image villa",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 3,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL",
      image: "/src/assets/exploration/immeuble.jpg",
      alt: "image immeuble",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000fcfa/m²",
      date: "12/05/2023",
      etat: "a loyer",
    },
    {
      id: 4,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 5,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 6,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 7,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 8,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 9,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
    {
      id: 10,
      title: "T",
      descriptin: "Camroun,Douala-Mbangue, derriere le college NAL,",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "400m²",
      prix: "20.000f/m²",
      date: "12/05/2023",
      etat: "a vendre",
    },
  ];

  return (
    <>
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  bg-neutralSilver  py-2 mt-20 w-screen rounded-md ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="md:w-1/2 ">
            <div className="flex mb-4 justify-center lg:items-center lg:mb-2 lg:mr-44 mt-2 -ml-36">
              {/* Options de radio pour choisir le type de propriété */}
              <div className="mb-[0.125rem] lg:mr-10 ml-6 ML inline-flex items-center min-h-[2rem] pl-[7rem]">
                <input
                  type="radio"
                  name="propertyType"
                  value="Acheter"
                  className="h-5 w-5 appearance-none checked:bg-Cprimary rounded-full border-2 checked:border-Csecondary1"
                />
                <label
                  htmlFor="terrainRadio"
                  className="text-Cprimary font-lato text-base px-1"
                >
                  Acheter
                </label>
              </div>

              <div className="mb-[0.125rem] inline-flex items-center min-h-[2rem] pl-[1rem]  ">
                <input
                  type="radio"
                  name="propertyType"
                  id="batimentRadio"
                  value="Louer"
                  className="h-5 w-5 appearance-none checked:bg-Cprimary rounded-full border-2 checked:border-Csecondary1"
                />
                <label
                  htmlFor="batimentRadio"
                  className="text-Cprimary font-lato text-base px-1 "
                >
                  Louer
                </label>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mx-auto lg:flex sm:flex-row flex-col sm:items-center lg:ml-52 lg:p-7   ">
            <div className="lg:px-14 pt-2 lg:inline-flex inline-grid gap-y-8 ">
              <form
                action=""
                className="lg:px-1 pt-2 inline-flex gap-4 -mt-6 lg:-ml-80  "
              >
                <div className="mr-2 -mt-2">
                  <label htmlFor="name" className="text-Cprimary">
                    Dimension
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="on"
                    placeholder="700x375"
                    className="focus:ring-primary  block  border-secondary1 rounded-md p-5 text-black  h-10 lg:w-32  border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200  dark:text-Cprimary  focus:border-Cprimary focus:border border-Csecondary1 bg-Csecondary1"
                  />
                </div>

                <div></div>
              </form>
              <div className="relative flex flex-col items-center h-10 lg:w-[120px] rounded-md ml-0 lg:mr-10 mr-6">
                <h2 className="lg:mr-20 mr-36  -mt-6 text-Cprimary">Lieux</h2>
                <button
                  onClick={() => setIsOpenLocation((prev) => !prev)}
                  className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-Cprimary"
                >
                  {selectedLocation ? selectedLocation : "Lieu"}
                  {!isOpenLocation ? (
                    <AiOutlineCaretDown className="h-8" />
                  ) : (
                    <AiOutlineCaretUp className="h-8" />
                  )}
                </button>
                {isOpenLocation && (
                  <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2">
                    {locations.map((location, i) => (
                      <div
                        className="flex w-full p-1 hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                        key={i}
                        onClick={() => handleLocationSelection(location)}
                      >
                        <h3 className="font-semibold mr-44 px-0 text-sm text-Cprimary">
                          {location}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative flex flex-col items-center h-10 lg:w-[120px] rounded-md ml-0 lg:mr-10 mr-6">
                <h2 className="lg:mr-14 mr-36  -mt-6 text-Cprimary">
                  Prix min
                </h2>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-Cprimary"
                >
                  {selectedItem ? selectedItem : "Prix min"}
                  {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                  ) : (
                    <AiOutlineCaretUp className="h-8" />
                  )}
                </button>
                {isOpen && (
                  <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2">
                    {PrixMin.map((prixmin, i) => (
                      <div
                        className="flex w-full p-1 hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                        key={i}
                        onClick={() => handleSelection(prixmin)}
                      >
                        <h3 className="font-semibold mr-44 px-0 text-sm text-Cprimary">
                          {prixmin}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* <div className='relative flex flex-col items-center h-10 w-[120px] rounded-md ml-0 mr-10'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary'>
          {selectedItem ? selectedItem : 'Prix min'}
          {!isOpen ? <AiOutlineCaretDown className='h-8' /> : <AiOutlineCaretUp className='h-8' />}
        </button>
        {isOpen && (
          <div className='bg-blue-200 absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52'>
            {PrixMin.map((prixmin, i) => (
              <div className='flex w-full p-1 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4' key={i} onClick={() => handleSelection(prixmin)}>
                <h3 className='font-semibold mr-44 px-0 text-sm'>{prixmin}</h3>
              </div>
            ))}
          </div>
        )}
      </div> */}

              <div className="relative flex flex-col items-center h-10 lg:w-[120px] rounded-md ml-0 lg:mr-10 mr-6 ">
                <h2 className="lg:mr-14 mr-36 -mt-6 text-Cprimary">Prix max</h2>
                <button
                  onClick={() => setIsOpenPrice(!isOpenPrice)}
                  className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-Cprimary"
                >
                  {selectedPrice ? selectedPrice : "Prix max"}
                  {!isOpenPrice ? (
                    <AiOutlineCaretDown className="h-8" />
                  ) : (
                    <AiOutlineCaretUp className="h-8" />
                  )}
                </button>
                {isOpenPrice && (
                  <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 ">
                    {PrixMax.filter(
                      (price) =>
                        parseInt(price, 10) >
                        (selectedItem ? parseInt(selectedItem, 10) : 0)
                    ).map((price, i) => (
                      <div
                        className="flex w-full p-1 hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                        key={i}
                        onClick={() => handlePriceSelection(price)}
                      >
                        <h3 className="font-semibold mr-44 px-0 text-sm text-Cprimary">
                          {price}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="relative z-[2] rounded-r rounded-md border-2 border-primary px-4 py-2 text-xs lg:w-24 w-52 uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-Csecondary1 text-Cprimary font-semibold "
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <YourComponent/>

        <div className='text-center md:-end-1/2 mx-auto '>
             <h2 className='text-3xl font-semibold mb-4 text-Csecondary1 lg:pt-36 uppercase lg:-mt-20  '>Les valeurs d'EFFICACE</h2>
        </div>

            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen  py-1 mt-0'>

                <div className='grid lg:grid-cols-2 gap-7 mb-20 mt-3 items-center mr-3 ml-20 '>
                
                    {
                    Terrains.map(Terrains => (
                    <div key={Terrains.id} className=' md:w-2/3 lg:w-full lg:h-full mx-auto bg-Csecondary1 rounded-2xl shadow-2xl mb-2 border border-Cprimary hover:scale-95 transition-all duration-300 -ml-20 w-[410px] lg:ml-5 '> 
                       

                        <div className='flex items-center gap-4 '>
                        <a href={Terrains.pageUrl}>
                            <div className=' relative '>
                            <img src={Terrains.image} alt="Les valeur d'efficace" className='h-[200px] w-[1000px] object-center rounded-md border border-Csecondary1 brightness-125 lg:-mb-2 '/>
                            </div>
                        </a>
                            <div>
                            <h3  className='my-2 text-2xl font-poppins font-semibold text-white uppercase m-2'>
                                {Terrains.title}
                            </h3>
                            <p className=' text-base font-serif text-texteCouleur text-justify m-2'>
                                {Terrains.descriptin}
                            </p>
                            </div>
                        </div>

                
                    </div>

                    ))
                    }
                    

                </div>
        
            </div> */}

      <div className="text-center md:-end-1/2 mx-auto mt-7 lg:-ml-44 ">
        <h2 className="text-4xl font-semibold mb-4 text-Csecondary1 lg:pt-7 uppercase  ">
          Nos Terrains
        </h2>
        <h2 className="text-lg font-semibold mb-4 text-Cprimary ">
          Nous offrons une large gamme de services innovants dans le domaine de
          l'immobilier :
        </h2>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8 lg:-mt-20 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-7 2xl:ml-24 ">
          <div>
            {/* <div className='grid lg:grid-cols-2 gap-7 mb-20 mt-2 items-center mr-3 ml-2'>
                                       
                                   {
                                   Terrains.map(Terrains => (
                                   <div key={Terrains.id} className=' md:w-2/3 lg:w-full lg:h-full mx-auto bg-Csecondary bg-neutralSilver rounded-2xl shadow-2xl mb-1 border border-Cprimary hover:scale-95 transition-all duration-30 ml-10 mr-1 w-[410px] lg:-ml-24  '> 
                                   <div className='flex items-center gap-4 '>
                                       <a href={Terrains.pageUrl}>
                                       <div className=' relative '>
                                           <img src={Terrains.image} alt="Les valeur d'efficace" className='h-[200px] w-[1000px] object-center rounded-md border border-Csecondary1 brightness-125 lg:-mb-1  '/>
                                       </div>
                                       </a>
                                       <div>
                                       <h3  className='my-2 text-2xl font-poppins font-semibold text-whit uppercase  '>
                                            {Terrains.title}
                                       </h3>
                                       <p className=' text-base font-serif text-texteCouleur text-justify mr-2'>
                                            {Terrains.descriptin}
                                       </p>
                                       </div>
                                       </div>
                                       </div>
           
                                       ))
                                       }
            
                                </div> */}

            <div className="grid lg:grid-cols-2 gap-7 mb-20 mt-20 items-center mr-3 ml-2">
              {Terrains.map((Terrain, index) => {
                // Créez un numéro de référence alphanumérique en combinant le titre et l'index
                const paddedIndex = `00${index + 1}`.slice(-3);

                const referenceNumber = `${Terrain.title.replace(
                  /\s+/g,
                  ""
                )}-${paddedIndex}`;

                return (
                  <div
                    key={Terrain.id}
                    className="md:w-2/3 lg:w-full  lg:h-full mx-auto bg-Csecondary bg-neutralSilver rounded-2xl shadow-2xl mb-1 border border-Cprimary hover:scale-95 transition-all duration-300 ml-1 mr-1 w-[420px] lg:-ml-24 "
                  >
                    <div className="flex items-center gap-4 ">
                      <a href={Terrain.pageUrl}>
                        <div className="relative lg:w-[250px] lg:h-60 lg:-mb-1 w-36 h-52 ">
                          <img
                            src={Terrain.image}
                            alt="Les valeur d'efficace"
                            className=" object-center rounded-md border border-Csecondary1 brightness-125 absolute top-0 left-0 w-full  h-full object-cover z-0 "
                          />
                        </div>
                      </a>
                      <div className="w-[1300px] h-full ">
                        <h3 className="my-2 mt-0 text-xl font-poppins font-semibold text-Cprimary flex   ">
                          {/* {Terrain.title} -  */}
                          <a
                            className="italic underline uppercase top-8"
                            href={Terrain.pageUrl}
                          >
                            {" "}
                            {referenceNumber}
                          </a>
                          <h3 className="lg:ml-32 ml-28 italic text-base text-Csecondary1">
                            {Terrain.etat}
                          </h3>
                        </h3>
                        <p className="text-base font-serif text-texteCouleur text-justify  mr-2 flex ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 mr-1  border-Csecondary1 uppercase leading-normal  transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-Cprimary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                          {Terrain.descriptin}
                        </p>
                        <p className="text-base font-serif text-texteCouleur text-justify mr-2 flex  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-1  border-Csecondary1 uppercase leading-normal  transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-Cprimary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                          </svg>

                          {Terrain.date}
                        </p>
                        <p className="text-base font-serif text-texteCouleur text-justify mr-4 flex pt-2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="none"
                            strokeWidth={20}
                            stroke="currentColor"
                            className="w-6 h-6  mr-1 border-Csecondary1 uppercase leading-normal  transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-Cprimary  "
                          >
                            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
                          </svg>
                          {Terrain.dimension}
                          <div className="px-5 flex ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              fill="none"
                              viewBox="0 0 320 512"
                              strokeWidth={50}
                              stroke="currentColor"
                              className="w-4 h-4  border-Csecondary1 uppercase leading-normal  transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-Cprimary mt-1 mr-1  "
                            >
                              <path d="M0 96C0 60.7 28.7 32 64 32h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V320 96zM64 288h96c53 0 96-43 96-96s-43-96-96-96H64V288z" />
                            </svg>{" "}
                            {Terrain.prix}
                          </div>
                        </p>
                        <div className="pt-3">
                          <a className="italic underline" href="">
                            voir plus
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <img src="" alt="" />
          </div>
          <div className="md:w-3/5 lg:-mx-40 mx text-center md:text-left divide- divide-x-2 divide-gray-400 lg:mt-52 mt-36 pl-14 2xl:pl-36">
            <h2 className="text-2xl font-semibold mb-4 text-Cprimary  md:w-4/5 -mt-44 uppercase ">
              Autres biens
            </h2>
            <div className=" md:w-4/4 text-lg font-poppins mb-1 text-justify divide- divide-x- divide-gray-400  text-texteCouleur ">
              <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5">
                Commerciaux
              </h2>
              <div className="pl-3  divide-  divide-gray-400  text-base font-poppins ">
                <a
                  className="block p-1 hover:text-Csecondary1"
                  href="/services"
                >
                  Bureaux
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Magasins
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Fond de commerce
                </a>
              </div>
              <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5 mt-3">
                Résidentiels
              </h2>
              <div className="pl-3  divide- devide- divide-gray-400  text-base font-poppins ">
                <a
                  className="block p-1 hover:text-Csecondary1"
                  href="/services"
                >
                  Villa
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Appartement
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Immeuble
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Duplex
                </a>
                <a className="block p-1 hover:text-Csecondary1" href="/!#">
                  Studio
                </a>
              </div>
              <a href="/terrain">
                <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5 mt-3">
                  Terrains
                </h2>
              </a>
            </div>

            <div className="pl-3 mb-4">
              <img
                src="/src/assets/exploration/duplex.jpg"
                className="h-44 w-44"
                alt=""
              />
            </div>

            <button className="btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ml-10">
              En savoir plus
            </button>
          </div>
        </div>
        <div id="scrollspy1" className="sticky-top pl-3 text-sm"></div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen lg:py-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center mr-10 ml-10  gap-8">
          <div className="md:w-1/2 ml-20">
            <h2 className="text-3xl font-semibold mb-4 text-Cprimary md:w-2/3 ">
              Ils nous ont fait confiance{" "}
            </h2>
            <p className="md:w-3/4 text-lg font-poppins text-texteCouleur mb-8 text-justify">
              Faites confiance à EFFICACE pour réaliser vos aspirations
              immobilières.{" "}
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-7 items-center flex-wrap -mt-4">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/company/company1.jpg"
                  alt=""
                  className="h-16 w-16"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    2,245,548
                  </h4>
                  <p>Membres</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/company/company2.jpg"
                  alt=""
                  className="h-16 w-16"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    2,245,548
                  </h4>
                  <p>Membres</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/company/company3.jpg"
                  alt=""
                  className="h-16 w-16"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    2,245,548
                  </h4>
                  <p>Evenement</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/icons/club.png"
                  alt=""
                  className="h-20 w-20"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    245,548
                  </h4>
                  <p>Club</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/icons/membre2.png"
                  alt=""
                  className="h-20 w-20"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    2,245,548
                  </h4>
                  <p>Membres</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/icons/payement.png"
                  alt=""
                  className="h-20 w-20"
                />
                <div>
                  <h4 className="text-2x1 text-neutralDGrey font-semibold">
                    2,245,548
                  </h4>
                  <p>Payement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 mt-40">
        <div className="text-center md:-end-1/2 mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey">
            De l'efficassité dans l'immobiler
          </h2>
          <p className="text-base font-montserrat text-justify text-neutralDGrey mb-8 md:w-3/4 mx-auto">
            {/* ... Votre texte ... */}
            Bienvenue chez EFFICACE, votre partenaire de confiance dans le
            domaine de l'immobilier depuis 2023. Nous sommes fiers de mettre à
            votre disposition notre expertise et notre passion pour
            l'immobilier, afin de vous accompagner dans toutes vos transactions
            immobilières. Chez EFFICACE, notre mission est de vous offrir un
            service immobilier de premier ordre, basé sur l'intégrité, la
            transparence et le professionnalisme. Nous comprenons que l'achat,
            la vente ou la location d'une propriété est l'une des décisions les
            plus importantes de votre vie, c'est pourquoi nous nous engageons à
            vous fournir un accompagnement personnalisé et des solutions sur
            mesure.
          </p>
        </div>
        {/* notre blog */}
        <div className="grid lg:grid-cols-3 sm:grid-cols- grid-cols-1 gap-8 items-center justify-between">
          {blog.map((blog) => (
            <div
              key={blog.id}
              className="mx-auto relative mb-12 cursor-pointer "
            >
              <img
                src={blog.image}
                alt=""
                className="hover:scale-95 transition-all duration-300"
              />
              {/* eleent de survol sur les images */}
              <div className="text-center px-4 py-8 bg-white shadow-lgrounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 rounded-md">
                <h3 className="mb-3 text-neutralGrey font-semibold">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <a
                    href="/"
                    className="font-bold text-brandPrimary hover:text-neutral-700 flex items-center"
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
                        stroke="#4CAF4F"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Terrain;
