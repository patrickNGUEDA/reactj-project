import React, { useState, Fragment } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import Modal from "react-modal";
import ModalVilla from "../modals/ModalVilla";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCar,
  FaChartArea,
} from "react-icons/fa";
import { GiPoolDive } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";

const Duplex = () => {
  const [isOpenMin, setIsOpenMin] = useState(false);
  const [selectedPrixMin, setSelectedPrixMin] = useState(null);
  const [isOpenMax, setIsOpenMax] = useState(false);
  const [selectedPrixMax, setSelectedPrixMax] = useState(null);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [etatSelectionne, setEtatSelectionne] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [selectedDuplex, setSelectedDuplex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  // Liste des prix min pour chaque état
  const prixMinParEtat = {
    vendre: [
      "3,000",
      "5,000",
      "10,000",
      "15,000",
      "20,000",
      "300,000",
      "1,000,000",
      "200,000,000,000"/* ... autres valeurs pour A vendre */,
    ],
    louer: [
      "10,000",
      "15,000",
      "20,000",
      "25,000",
      "30,000" ,
      "20,000,000,000,"/* ... autres valeurs pour A louer */,
    ],
  };
  // Liste des prix max pour chaque état
  const prixMaxParEtat = {
    vendre: [
      "15,000",
      "25,000",
      "30,000",
      "40,000",
      "50,000" ,
      "60,000",
      "70,000",
      "80,000",
      "90,000",
      "100,000",
      "500,000,000,000"/* ... autres valeurs pour A vendre */,
    ],
    louer: [
      "50,000",
      "60,000",
      "70,000",
      "80,000",
      "90,000",
      "100,000" /* ... autres valeurs pour A louer */,
    ],
  };

  const handleDuplexClick = (Duplex) => {
    const paddedIndex = `00${filteredDuplex.indexOf(Duplex) + 1}`.slice(-3);
    const newReferenceNumber = `${
      Duplex.etat === "vendre" ? "DV" : "DL"
    }-${paddedIndex}`;
    setReferenceNumber(newReferenceNumber);

    setSelectedDuplex(Duplex);
    setShowModal(true);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  const navigate = (direction) => {
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : selectedDuplex.images.length - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex < selectedDuplex.images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };
  const locations = ["Douala", "Yaoundé", "Bafoussam", "Maroua", "Bertoua"];
  // Fonction pour gérer la sélection d'un état
  const handlePropertyTypeChange = (etat) => {
    setEtatSelectionne(etat);
    setShowMessage(false);
    // Réinitialisez les prix sélectionnés lorsque l'état change
    setSelectedPrixMin(null);
    setSelectedPrixMax(null);
  };

  // Fonction pour gérer la sélection du prix min
  const handleSelection = (prixmin) => {
    setSelectedPrixMin(prixmin);
    setIsOpenMin(false);
  };

  // Fonction pour gérer la sélection du prix max
  const handlePriceSelection = (pricemax) => {
    setSelectedPrixMax(pricemax);
    setIsOpenMax(false);
  };

  // Fonction pour gérer la sélection de l'emplacement
  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setIsOpenLocation(false);
  };

  const handleDropdownClickMin = () => {
    if (!etatSelectionne) {
      // Set the state to show the message
      setShowMessage(true);
      return;
    }
    setIsOpenMin((prev) => !prev);
  };

  const handleDropdownClickMax = () => {
    if (!etatSelectionne) {
      // Set the state to show the message
      setShowMessage(true);
      return;
    }
    setIsOpenMax((prev) => !prev);
  };
  const Duplex = [
    {
      id: 1,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Mbangue",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/terrain.jpg ",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image terrain",
      pageUrl: "/login",
      surface: "50.000m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "200,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
    {
      id: 2,
      title: "Ter",
      ville: "Yaoundé",
      pays: "Camroun",
      quartier: "Etoug-Ebe",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/villa.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain6.jpg",
        "/src/assets/galerieTerrain/terrain7.jpg",
        "/src/assets/galerieTerrain/terrain8.jpg",
        "/src/assets/galerieTerrain/terrain9.jpg",
        "/src/assets/galerieTerrain/terrain10.jpg",
        // ... autres liens d'images
      ],
      alt: "image duplex",
      pageUrl: "/login",
      surface: "400m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "150,000,000fcfa",
      date: "12/05/2023",
      etat: "vendre",
    },
    {
      id: 3,
      title: "T",
      ville: "Yaoundé",
      pays: "Camroun",
      quartier: "Mbangue",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/immeuble.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain11.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image immeuble",
      pageUrl: "/login",
      surface: "500m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "350,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
    {
      id: 4,
      title: "T",
      ville: "Yaoundé",
      pays: "Camroun",
      quartier: "Mvog-ada",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "400m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "70,000,000fcfa",
      date: "12/05/2023",
      etat: "vendre",
    },
    {
      id: 5,
      title: "T",
      ville: "Bafoussam",
      pays: "Camroun",
      quartier: "Tamdja",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "1000m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "200,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
    {
      id: 6,
      title: "T",
      ville: "Bertoua",
      pays: "Camroun",
      quartier: "Itali",
      localisation: "derriere le college NAl",
      description: "",

      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "300m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "0",
      piscine: "non",
      prix: "9,000,000fcfa",
      date: "12/05/2023",
      etat: "vendre",
    },
    {
      id: 7,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Mbangue",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],

      alt: "image appatement",
      pageUrl: "/login",
      surface: "400m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "2",
      piscine: "non",
      prix: "35,000,000FCFA",
      date: "12/05/2023",
      etat: "vendre",
    },
    {
      id: 8,
      title: "T",
      ville: "Yaoundé",
      pays: "Camroun",
      quartier: "Bastos",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      alt: "image appatement",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      pageUrl: "/login",
      surface: "1000m²",
      nbreChambre: "6",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "500,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
    {
      id: 9,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Pitoaré",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain4.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "400m²",
      nbreChambre: "4",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "300,000,000,000fcfa",
      date: "12/05/2023",
      etat: "vendre",
    },
    {
      id: 10,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Mbangue",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "100.000m²",
      nbreChambre: "5",
      nbreDouche: "2",
      parking: "3",
      piscine: "non",
      prix: "800,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
    {
      id: 11,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Domayo",
      localisation: "derriere le college NAl",
      description: "",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain11.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain6.jpg",
      ],
      alt: "image appatement",
      pageUrl: "/login",
      surface: "100.000m²",
      nbreChambre: "7",
      nbreDouche: "3",
      parking: "3",
      piscine: "non",
      prix: "300,000fcfa/mois",
      date: "12/05/2023",
      etat: "louer",
    },
  ];
  const filteredDuplex = Duplex.filter((duplex) => {
    const isTypeMatch =
      !etatSelectionne ||
      duplex.etat.toLowerCase() === etatSelectionne.toLowerCase();
    const isLocationMatch =
      !selectedLocation ||
      duplex.ville.toLowerCase() === selectedLocation.toLowerCase();
      const isPriceRangeMatch =
      (!selectedPrixMin ||
        parseFloat(duplex.prix.replace(/,/g, ''), 10) >= parseFloat(selectedPrixMin.replace(/,/g, ''), 10)) &&
      (!selectedPrixMax ||
        parseFloat(duplex.prix.replace(/,/g, ''), 10) <= parseFloat(selectedPrixMax.replace(/,/g, ''), 10));

    return isTypeMatch && isLocationMatch && isPriceRangeMatch;
  });

  return (
    <>
      <Fragment>
        <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver lg:py-4 py-28 mt-20 w-screen rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 mt-4">
            <div className="md:w-1/2 ">
              <div className="flex mb-1 justify-center lg:items-center lg:mb-2 -mt-32 mr-12 gap-5 lg:mt-0 ">
                {/* Options de radio pour choisir le type de propriété */}
                <div className="mb-[0.125rem] lg:mr-10 ml-6 inline-flex items-center h-[40px] w-[100px]  bg-Cprimary rounded-lg ">
                  <input
                    type="radio"
                    name="etatSelectionne"
                    value="vendre"
                    onChange={() => handlePropertyTypeChange("vendre")}
                    className="h-5 w-5 appearance-none checked:bg-Csecondary1 rounded-full border-2 checked:border-white m-1"
                  />
                  <label
                    htmlFor="terrainRadio"
                    className="text-white font-semibold text-base mt-0.5"
                  >
                    Acheter
                  </label>
                </div>

                <div className="mb-[0.125rem] inline-flex items-center h-[40px] w-[100px]  bg-Cprimary rounded-lg  ">
                  <input
                    type="radio"
                    name="etatSelectionne"
                    id="batimentRadio"
                    value="louer"
                    onChange={() => handlePropertyTypeChange("louer")}
                    className="h-5 w-5 appearance-none checked:bg-Csecondary1 rounded-full border-2 checked:border-whiter m-1"
                  />
                  <label
                    htmlFor="batimentRadio"
                    className="text-white font-semibold text-base mt-0.5"
                  >
                    Louer
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-10 lg:w-[200px]  w-[230px] rounded-md ml-0 lg:mr-10 mr-6 -mt-20 lg:-mt-14 lg:right-36">
              <h2 className="lg:mr-5 mr-32  font-semibold text-base text-Cprimary lg:mt-0 ">
                Localisation
              </h2>
              <button
                onClick={() => setIsOpenLocation((prev) => !prev)}
                // style={{ zIndex: 1, pointerEvents: 'auto' }}
                className="bg-Csecondary1  flex w-full items-center justify-between font-semibold text-base rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-white "
              >
                {selectedLocation ? selectedLocation : "Lieu"}
                {!isOpenLocation ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpenLocation && (
                <div className="bg-white absolute top-20 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
                  {locations.map((location, i) => (
                    <div
                      className="flex flex-col w-full p-1 "
                      key={i}
                      onClick={() => handleLocationSelection(location)}
                    >
                      <h3 className="font-semibold text-sm text-Cprimary hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-Cprimary border-l-4">
                        {location}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex flex-col items-center h-10 lg:w-[200px]  w-[230px] rounded-md ml-0 lg:mr-10 mr-6 lg:-mt-14 lg:right-36">
              <h2 className="lg:mr-14 mr-40  font-semibold text-base text-Cprimary mt-8 lg:mt-0 ">
                Prix min
              </h2>
              <button
                // onClick={() => setIsOpen((prev) => !prev)}
                onClick={handleDropdownClickMin}
                className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-semibold text-base rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-white"
              >
                {selectedPrixMin ? selectedPrixMin : "Prix min"}
                {!isOpenMin ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpenMin && (
                <div className="bg-white absolute lg:top-16  top-28 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
                  {prixMinParEtat[etatSelectionne]?.sort((a, b) => parseFloat(a.replace(/,/g, ""), 10) - parseFloat(b.replace(/,/g, ""), 10)).map((prixmin, i) => (
                    <div
                      className="flex w-full p-1 hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-Cprimary border-l-4"
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

            <div className="relative flex flex-col items-center h-10 lg:w-[200px]  w-[230px] rounded-md ml-0 lg:mr-10 mr-6 -mt-3 lg:-mt-14 lg:right-36">
              <h2 className="lg:mr-14 mr-40 mt-20 lg:mt-0 font-semibold text-base text-Cprimary">
                Prix max
              </h2>
              <button
                // onClick={() => setIsOpenPrice((prev) => !prev)}
                onClick={handleDropdownClickMax}
                className="bg-Csecondary1 p-0 flex w-full items-center justify-between font-semibold text-base rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-white"
              >
                {selectedPrixMax ? selectedPrixMax : "Prix max"}
                {!isOpenMax ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpenMax && (
                <div className="bg-white absolute lg:top-16 top-36 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
                  {prixMaxParEtat[etatSelectionne]
                    ?.filter(
                      (price) =>
                      parseFloat(price.replace(/,/g, ""), 10) >
                      (selectedPrixMin ? parseFloat(selectedPrixMin.replace(/,/g, ""), 10) : 0)
                    ).sort((a, b) => parseFloat(a.replace(/,/g, ""), 10) - parseFloat(b.replace(/,/g, ""), 10))
                    .map((price, i) => (
                      <div
                        className="flex w-full p-1 hover:bg-Csecondary1 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-Cprimary border-l-4"
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
          </div>
        </div>
        {showMessage && (
          <div className="text-red-500 text-center font-semibold text-base italic lg:mt-0 mt-10">
            S'il vous plaît sélectionnez un type de propriété (Acheter ou Louer)
            avant de choisir votre marge de prix!
          </div>
        )}

        <div className="px-4 lg:px-14 bg-neutralSilver max-w-screen-2xl mx-auto my-8 mt-14">
          <h2 className="text-3xl text-center font-montserrat font-bold mb-4 text-Csecondary1 uppercase lg:-mt-2 ">
            DUPLEX
          </h2>
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="px-16 lg:px-14 max-w-screen-2xl  mx-auto  w-screen py-1 mt-7">
              <div>
                <div className="grid lg:grid-cols-3 gap-7 mb-20 mt-3 items-center mr-3 ml-16">
                  {filteredDuplex.length === 0 ? (
                    <p className="text-Cred-primary font-semibold text-center text-xl">
                      Aucune duplex ne correspond aux critères de recherche
                      sélectionnés.
                    </p>
                  ) : (
                    filteredDuplex.map((duplex, index) => {
                      // Créez un numéro de référence alphanumérique en combinant le titre et l'index
                      const paddedIndex = `00${index + 1}`.slice(-3);
                      const referenceNumber = `${
                        duplex.etat === "vendre" ? "DV" : "DL"
                      }-${paddedIndex}`;
                      duplex.referenceNumber = referenceNumber;

                      return (
                        <div
                          key={duplex.id}
                          className=" md:w-2/3 lg:w-full  2xl:w-full mx-auto bg-Cprimary rounded-2xl shadow-2xl mb-2 hover:scale-95 transition-all duration-300 -ml-28 "
                        >
                          <div className="relative ">
                            <div
                              className=" "
                              onClick={() => {
                                setSelectedDuplex(duplex);
                                setShowModal(true);
                                handleDuplexClick(duplex);
                              }}
                            >
                              <img
                                src={duplex.image}
                                alt="Les valeur d'efficace"
                                className="h-full w-full object-center rounded-md border border-Csecondary1 brightness-125 lg:-mb-2  "
                              />
                            </div>

                            <div className="lg:w-full w-full h-full ">
                              <h3 className="px-3 mt-3 text-xl font-poppins font-semibold text-white flex ">
                                <div
                                  onClick={() => {
                                    setSelectedDuplex(duplex);
                                    setShowModal(true);
                                  }}
                                  className="italic underline uppercase top-8 cursor-pointer"
                                >
                                  {referenceNumber}
                                </div>
                                <h3 className="lg:ml-32 2xl:ml-40 ml-28  italic text-base text-Cprimary bg-white rounded-lg px-1 py-1">
                                  A {duplex.etat}
                                </h3>
                              </h3>
                              <p className=" px-1 text-base font-serif text-white text-justify mr-2 flex ">
                                <FaMapMarkerAlt
                                  className="mr-2 mt-1"
                                  style={{ color: "white" }}
                                />
                                {duplex.pays},{duplex.ville}-{duplex.quartier},
                                {duplex.localisation}
                              </p>
                              <p className=" px-1 text-base font-serif text-white text-justify  flex ">
                                <MdPriceCheck
                                  className=" -ml-1 h-8 w-8"
                                  style={{ color: "white" }}
                                />
                                {duplex.prix}
                              </p>
                              <p className=" px-1 text-base font-serif text-white text-justify mr-2 flex ">
                                <FaChartArea
                                  className="mr-2 ml-1 mt-1 "
                                  style={{ color: "white " }}
                                />
                                {duplex.surface}
                              </p>

                              <div className="featured-property-box-icons justify-between flex m-2 p-2">
                                <div className="bed-icon text-center flex">
                                  <div className="bg-slate-300 p-1 rounded-md ">
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      title={`Chambres:${duplex.nbreChambre}`}
                                      className=""
                                    >
                                      <FaBed />
                                    </a>
                                  </div>
                                  <p className="text-white px-2">
                                    {duplex.nbreChambre}
                                  </p>
                                </div>
                                <div className="bath-icon text-center flex ">
                                  <div className="bg-slate-300 p-1 rounded-md ">
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      title={`Douches:${duplex.nbreDouche}`}
                                    >
                                      <FaBath />
                                    </a>
                                  </div>
                                  <p className="text-white px-2">
                                    {duplex.nbreDouche}
                                  </p>
                                </div>
                                <div className="garage-icon text-center flex">
                                  <div className="bg-slate-300 p-1 rounded-md  ">
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      title={`Parking:${duplex.parking}`}
                                      className=""
                                    >
                                      <FaCar />
                                    </a>
                                  </div>
                                  <p className="text-white px-2">
                                    {duplex.parking}
                                  </p>
                                </div>

                                {/* <div className="area-icon text-center flex ">
                                 <div className="bg-slate-300 p-1 rounded-md">
                                 <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title={`Surface:${villa.surface}`}
                                  >
                                    <FaChartArea />
                                  </a>
                                 </div>
                                 <p className="text-white px-2">{villa.surface}</p>
                                </div> */}

                                <div className="area-icon text-center flex ">
                                  <div className="bg-slate-300 p-1 rounded-md">
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      title={`Piscine:${duplex.piscine}`}
                                    >
                                      <GiPoolDive />
                                    </a>
                                  </div>
                                  <p className="text-white px-2">
                                    {duplex.piscine}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  {/* Le modal */}

                  <ModalVilla
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                  >
                    {selectedDuplex && (
                      <div className="p-4">
                        <div className="flex sticky top-1">
                          <h3 className="text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg w-20 p-2 px-2">
                            {referenceNumber}
                          </h3>
                          <h3 className="text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg w-24 p-2 px-2 ml-3">
                            A {selectedDuplex.etat}
                          </h3>
                          <a
                            href={`https://wa.me/237686741680?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20votre%20service,${referenceNumber}`}
                            className=""
                          >
                            <h3 className="text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg w-44 px-2 p-2 ml-3 flex ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                className="mx-auto h-full w-4 mt-0.5 ml-1"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                              >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                              </svg>{" "}
                              +237 686 741 680
                            </h3>
                          </a>
                        </div>
                        <img
                          src={selectedDuplex.image}
                          alt={selectedDuplex.title}
                          className="object-cover w-full h-[500px] rounded-md"
                        />
                        <p className="text-black">
                          {selectedDuplex.pays} -{selectedDuplex.ville}
                        </p>
                        <p className="mb-5 font-normal text-texteCouleur text-lg text-justify ">
                          Notre équipe d'experts en immobilier est composée de
                          professionnels passionnés qui connaissent le marché
                          local comme leur poche. Chacun de nos agents est
                          dévoué à vous aider à atteindre vos objectifs
                          immobiliers, que vous cherchiez à acheter votre
                          première maison, à vendre votre propriété existante,
                          ou à investir dans des opportunités immobilières.
                        </p>
                        <div className="px-4 lg:-ml-20 max-w-screen-2x1 mx-auto my-8 mt-4">
                          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-2">
                            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                              {selectedDuplex.images.map(
                                (image, imageIndex) => (
                                  <div
                                    key={imageIndex}
                                    onClick={() => openModal(imageIndex)}
                                  >
                                    <img
                                      src={image}
                                      alt={`Image ${imageIndex + 1}`}
                                      className="object-cover w-full h- rounded-md cursor-pointer"
                                    />
                                  </div>
                                )
                              )}

                              <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Image Modal"
                                className="-mt-12 w-[750px] h-[650px] lg:m-0 m-2 lg:-mt-12"
                                style={{
                                  overlay: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  content: {
                                    position: "relative",
                                  },
                                }}
                              >
                                {selectedImageIndex !== null && (
                                  <>
                                    <button
                                      onClick={() => navigate("prev")}
                                      className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-20"
                                    >
                                      {/* Utilisez l'icône "keyboard_arrow_left" de Material Icons */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="2em"
                                        viewBox="0 0 448 512"
                                        fill="none"
                                        strokeWidth={50}
                                        stroke="currentColor"
                                        className="ml-2 "
                                      >
                                        <path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" />
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => navigate("next")}
                                      className="absolute right-0 top-1/2 transform -translate-y-1/2 mt-20 "
                                    >
                                      {/* Utilisez l'icône "keyboard_arrow_right" de Material Icons */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="2em"
                                        viewBox="0 0 448 512"
                                        fill="none"
                                        strokeWidth={50}
                                        stroke="currentColor"
                                        className="mr-2"
                                      >
                                        <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z" />
                                      </svg>
                                    </button>
                                    <img
                                      src={
                                        selectedDuplex.images[
                                          selectedImageIndex
                                        ]
                                      }
                                      alt={`Image ${selectedImageIndex + 1}`}
                                      className="object-contain w-full h-full mt-20"
                                    />
                                  </>
                                )}
                                <button
                                  onClick={closeModal}
                                  className="absolute top-0 right-0 lg:m-0 m-1 lg:mt-24 mt-52 text-white font-semibold bg-Cprimary p-1 rounded-md font-poppins"
                                >
                                  Fermer
                                </button>
                              </Modal>
                            </div>

                            <div className="md:w-2/3 mx-auto text-center md:text-left ">
                              <h2 className="text-2xl font-semibold mb-4 text-neutralDGrey md:w-4/5 px-5 ">
                                À Propos d'EFFICACE
                              </h2>
                              <p className="md:w-[500px] px-5 mb-5 font-normal text-texteCouleur text-lg text-justify">
                                Bienvenue chez EFFICACE, votre partenaire de
                                confiance dans le domaine de l'immobilier depuis
                                2023. Nous sommes fiers de mettre à votre
                                disposition notre expertise et notre passion
                                pour l'immobilier, afin de vous accompagner dans
                                toutes vos transactions immobilières.
                              </p>

                              <button className="btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                                En savoir plus
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </ModalVilla>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 lg:-mx-80 text-center md:text-left divide- divide-x-2 divide-gray-400 lg:-mt-96 mt-36 lg:pl-36 2xl:pl-52 ">
              <h2 className="text-2xl font-semibold mb-4 text-Cprimary  md:w-4/5 lg:mt-96 -mt-44 uppercase ">
                Autres biens
              </h2>
              <div className=" md:w-4/4 text-lg font-poppins mb-1 text-justify divide- divide-x- divide-gray-400  text-texteCouleur ">
                <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5">
                  Commerciaux
                </h2>
                <div className="pl-3  divide-  divide-gray-400  text-base font-poppins ">
                  <a
                    className="block p-1 hover:text-Csecondary1"
                    href="#"
                  >
                    Bureaux
                  </a>
                  <a
                    className="block p-1 hover:text-Csecondary1"
                    href="#"
                  >
                    Boutiques
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="#">
                    Magasins
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="#">
                    Fond de commerce
                  </a>
                </div>
                <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5 mt-3">
                  Résidentiels
                </h2>
                <div className="pl-3  divide- devide- divide-gray-400  text-base font-poppins ">
                  <a className="block p-1 hover:text-Csecondary1" href="/villa">
                    Villa
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="#">
                    Appartement
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="immeuble">
                    Immeuble
                  </a>
                  <a
                    className="block p-1 hover:text-Csecondary1"
                    href="/duplex"
                  >
                    Duplex
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="#">
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
        </div>

        {/* <div className="text-center md:-end-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold mb-4 text-Csecondary1 lg:pt-36 uppercase lg:-mt-20  ">
            villa
          </h2>
        </div> */}
      </Fragment>
    </>
  );
};

export default Duplex;
