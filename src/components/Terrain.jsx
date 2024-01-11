import React, { useState, Fragment } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import YourComponent from "../components/SousMenu/MaisonDropdown";
import ModalTerrain from "./modals/ModalTerrain";
import ModalCarousel from "./modals/modalCarousel";
import aboutImage from "../assets/banner3.jpg";
import Modal from "react-modal";
import { FaMapMarkerAlt, FaChartArea, FaRegCalendarAlt } from "react-icons/fa";

import { MdPriceCheck, MdOutlineTitle } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

const Terrain = () => {
  const [isOpenMin, setIsOpenMin] = useState(false);
  const [selectedPrixMin, setSelectedPrixMin] = useState(null);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isOpenMax, setIsOpenMax] = useState(false);
  const [selectedPrixMax, setSelectedPrixMax] = useState(null);
  const [selectedTerrain, setSelectedTerrain] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [etatSelectionne, setEtatSelectionne] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // Par exemple, 9 éléments par page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleTerrainClick = (Terrain) => {
    const paddedIndex = `00${filteredTerrains.indexOf(Terrain) + 1}`.slice(-3);
    const newReferenceNumber = `${
      Terrain.etat === "vendre" ? "TV" : "TL"
    }-${paddedIndex}`;
    setReferenceNumber(newReferenceNumber);

    setSelectedTerrain(Terrain);
    setShowModal(true);
  };

  // Fonction pour gérer la sélection de l'emplacement
  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setIsOpenLocation(false);
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

  // Liste des prix min pour chaque état
  const prixMinParEtat = {
    vendre: [
      "3,000",
      "5000",
      "10,000",
      "15,000",
      "20,000",
      "35,000",
      "50,000",
      "80,000",
      "100,000",
      "130,000",
      "180,000",
      "200,000",
      "250,000",
      "300,000",
      "350,000",
      "400,000",
      "450,000",
      "500,000" /* ... autres valeurs pour A vendre */,
      ,
    ],
    louer: [
      "10,000",
      "15,000",
      "20,000",
      "25,000",
      "30,000",
      "20,000,000,000" /* ... autres valeurs pour A louer */,
    ],
  };
  // Liste des prix max pour chaque état
  const prixMaxParEtat = {
    vendre: [
      "4000",
      "15,000",
      "25,000",
      "30,000",
      "40,000",
      "50,000",
      "60,000",
      "70,000",
      "80,000",
      "90,000",
      "100,000",
      "130,000",
      "180,000",
      "200,000",
      "250,000",
      "300,000",
      "350,000",
      "400,000",
      "450,000",
      "500,000",
      "550,000" /* ... autres valeurs pour A vendre */,
      ,
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

  const locations = ["Douala", "Yaoundé", "Bafoussam", "Maroua", "Bertoua"];

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
        prevIndex > 0 ? prevIndex - 1 : selectedTerrain.images.length - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex < selectedTerrain.images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };
  const Terrains = [
    {
      numReference: 1,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Japoma Bakoko",
      descriptin:
        "zone à densité minime avec un haut taux de maison en construction. Le terrain est approximativement situé à 744m de la route principale et à moins d'un km du stade de JAPOMA",
      dossierTechnique: "Disponible",
      titreFoncier: " N° 20 458",
      certificatPropriete: "Non disponible",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "4°00’44.5’’N 9°49’45.6’’E",
      image: "/src/assets/terrain/JAPOMABAKOKOTF20458/carte Japoma bakoko.jpg ",
      images: [
        "/src/assets/terrain/JAPOMABAKOKOTF20458/terrainJapoma7.jpg",
        "/src/assets/terrain/JAPOMABAKOKOTF20458/terrainJapoma8.jpg",
        "/src/assets/terrain/JAPOMABAKOKOTF20458/terrainJapoma9.jpg",
        "/src/assets/terrain/JAPOMABAKOKOTF20458/terrainJapoma2.jpg",

        "/src/assets/terrain/JAPOMABAKOKOTF20458/terrainJapoma13.jpg",

        // ... autres liens d'images
      ],
      alt: "image terrain",
      pageUrl: "/login",
      dimension: "1000 m²",
      prix: "50000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte:
        "https://www.google.com/maps/place/4%C2%B000'44.5%22N+9%C2%B049'45.6%22E/@4.0184,9.8255782,2916m/data=!3m1!1e3!4m4!3m3!8m2!3d4.0123611!4d9.8293333?entry=ttu",
      etat: "vendre",
    },
    {
      numReference: 2,
      title: "Ter",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Makepe",
      descriptin:
        " zone urbaine à forte densité à multiple fonctions à la fois commercial et logement proche du centre de loisirs parcours Vita, situé à 310m du parcours Vita.",
      dossierTechnique: "non",
      titreFoncier: " N° 11 872",
      certificatPropriete: "N° 005734",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "non",
      coordonneesGeographiques: "4°05’04.7’’N 9°44’49.7’’E",
      image: "/src/assets/terrain/Makepe/makepe.jpg",
      images: [
        "/src/assets/terrain/Makepe/terrainMakepe1.jpg",
        "/src/assets/terrain/Makepe/terrainMakepe2.jpg",
        "/src/assets/terrain/Makepe/terrainMakepe3.jpg",
        "/src/assets/terrain/Makepe/terrainMakepe4.jpg",
        "/src/assets/terrain/Makepe/terrainMakepe5.jpg",
        "/src/assets/terrain/Makepe/terrainMakepe6.jpg",
        // ... autres liens d'images
      ],
      alt: "image villa",
      pageUrl: "/login",
      dimension: "1 112 m²",
      prix: "165000 fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 3,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Bwang Bakoko",
      descriptin:
        "zone à densité minime avec un faible taux de maison en construction. Le terrain est à approximativement 1,5km de la route principal ",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
      image: "/src/assets/terrain/BWANGBAKOKOTF40700/carteBawang bakoko.jpg",
      images: [
        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang1.jpg",
        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang2.jpg",

        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang4.jpg",
        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang5.jpg",
        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang6.jpg",
        "/src/assets/terrain/BWANGBAKOKOTF40700/terrainBwang7.jpg",

        // ... autres liens d'images
      ],
      alt: "img terrain",
      pageUrl: "/login",
      dimension: "2 741m²",
      prix: "35000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 4,
      title: "T",
      ville: "Doula",
      pays: "Camroun",
      quartier: "Mbanga Bakoko",
      descriptin:
        "zone à densité moyenne avec un haut taux de maison en construction. Le terrain est à approximativement 688m de la route principale",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 645",
      certificatPropriete: "006667",
      relief: "Relativement plat (5,0% a 10,0%)",
      morcelable: "non",
      coordonneesGeographiques: "4°00’44.7’’N 9°48’26.5’’E",
      image: "/src/assets/terrain/MBANGABAKOKOTF645/carte MBANGA bakoko.jpg",
      images: [
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga1.png",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga2.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga3.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga4.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga5.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga6.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga7.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga8.jpg",
        "/src/assets/terrain/MBANGABAKOKOTF645/terrainMbanga9.png",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "460 m²",
      prix: "40000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 5,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "Ngoma",
      descriptin:
        "Situé a 3 Km du carrefour Logbessou, cette zone et en plein croissance. Plussieurs projets immobiliers en developpement autour dudit terrain",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 11 872",
      certificatPropriete: "",
      relief: "Relativement plat (05% a 10%)",
      morcelable: "oui",
      coordonneesGeographiques: "4°6’28.21’’N 9°46’58.35’’E",
      image: "/src/assets/terrain/ngoma/ngoma.jpg",
      images: [
        "/src/assets/terrain/ngoma/terrainNgoma1.jpg",
        "/src/assets/terrain/ngoma/terrainNgoma2.jpg",
        "/src/assets/terrain/ngoma/terrainNgoma3.jpg",
        "/src/assets/terrain/ngoma/terrainNgoma6.jpg",
        "/src/assets/terrain/ngoma/terrainNgoma4.jpg",
        "/src/assets/terrain/ngoma/terrainNgoma5.jpg",
        // ... autres liens d'images
      ],
      alt: "img terrain",
      pageUrl: "/login",
      dimension: "40.000m²",
      prix: "20,000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 6,
      title: "T",
      ville: "Douala",
      pays: "Camroun",
      quartier: "PK27 Entrée Guinness",
      descriptin:
        "Le terain est approximativement a 6 Km de la route provinciale 14. Cette zon a dansité faible et l'activité pronner est l'agriculture et l'elevage. ",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 2671",
      certificatPropriete: "",
      relief: "légerement plat (5,0% a 10,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "4°12’40.6’’N 9°50’31.0’’E",
      image: "/src/assets/terrain/PK27entréeGuinness/carte pk27.jpg",
      images: [
        "/src/assets/terrain/PK27entréeGuinness/terrainPk27.PNG",

        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "11,30Ha",
      prix: "3500fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 7,
      title: "T",
      ville: "Yaounde",
      pays: "Camroun",
      quartier: "Mbangue",
      descriptin: "derriere le college NAL",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
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
      dimension: "400m²",
      prix: "10000FCFA/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 8,
      ville: "T",
      lieu: "Yaoundé",
      pays: "Camroun",
      quartier: "Bastos",
      descriptin: "derriere le college NAL",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
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
      dimension: "1000m²",
      prix: "100000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "louer",
    },
    {
      numReference: 9,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Pitoaré",
      descriptin: "derriere le college NAL",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
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
      dimension: "400m²",
      prix: "8000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "vendre",
    },
    {
      numReference: 10,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Mbangue",
      descriptin: "derriere le college NAL",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain1.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain3.jpg",
        "/src/assets/galerieTerrain/terrain5.jpg",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "100.000m²",
      prix: "150000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "louer",
    },
    {
      numReference: 11,
      title: "T",
      ville: "Maroua",
      pays: "Camroun",
      quartier: "Domayo",
      descriptin: "Deux voix, derriere le foyer des jeunes",
      dossierTechnique: "Disponible",
      titreFoncier: "N° 40 700",
      certificatPropriete: "003086",
      relief: "Relativement plat (0,0% a 5,0%)",
      morcelable: "oui",
      coordonneesGeographiques: "3°59’10.8’’N 9°49’34.3’’E",
      image: "/src/assets/exploration/appartement.jpg",
      images: [
        "/src/assets/galerieTerrain/terrain11.jpg",
        "/src/assets/galerieTerrain/terrain2.jpg",
        "/src/assets/galerieTerrain/terrain6.jpg",

        "/src/assets/galerieTerrain/terrain8.jpg",
        // ... autres liens d'images
      ],
      alt: "image appatement",
      pageUrl: "/login",
      dimension: "100.000m²",
      prix: "120000fcfa/m²",
      date: "12/05/2023",
      vueSatelitte: "",
      etat: "louer",
    },
  ];
  const handlePropertyTypeChange = (etat) => {
    setEtatSelectionne(etat);
    setShowMessage(false);

    // Réinitialisez les prix sélectionnés lorsque l'état change
    setSelectedPrixMin(null);
    setSelectedPrixMax(null);
  };
  const filteredTerrains = Terrains.filter((Terrain) => {
    const isTypeMatch =
      !etatSelectionne ||
      Terrain.etat.toLowerCase() === etatSelectionne.toLowerCase();

    const isLocationMatch =
      !selectedLocation ||
      Terrain.ville.toLowerCase() === selectedLocation.toLowerCase();

    const isPriceRangeMatch =
      (!selectedPrixMin ||
        parseFloat(Terrain.prix.replace(/,/g, ""), 10) >=
          parseFloat(selectedPrixMin.replace(/,/g, ""), 10)) &&
      (!selectedPrixMax ||
        parseFloat(Terrain.prix.replace(/,/g, ""), 10) <=
          parseFloat(selectedPrixMax.replace(/,/g, ""), 10));

    return isTypeMatch && isLocationMatch && isPriceRangeMatch;
  });
  const paginatedTerrains = filteredTerrains.slice(startIndex, endIndex);
  const totalTerrains = filteredTerrains.length; // utilisez la liste complète ou filtrée selon vos besoins
  const totalPages = Math.ceil(totalTerrains / itemsPerPage);

  return (
    <>
      <Fragment>
        <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  bg-neutralSilver py-2 mt-20 w-screen rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <div className="md:w-1/2 ">
              <div className="flex mb-1 justify-center lg:items-center lg:mb-2 mt-5 mr-14 gap-5 ">
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

            <div className="md:w-1/2 mx-auto lg:flex sm:flex-row flex-col sm:items-center lg:ml-96 lg:p-7   ">
              <div className="lg:px-14 pt-2 lg:inline-flex inline-grid gap-y-8 ">
                <form
                  action=""
                  className="lg:px-1 pt-2 inline-flex gap-4 -mt-6 lg:-ml-80"
                >
                  <div className="mr-2 -mt-2 hidden">
                    <label htmlFor="name" className="text-Cprimary">
                      Dimension
                    </label>
                    <input
                      type="number"
                      name="name"
                      id="name"
                      autoComplete="on"
                      placeholder="700"
                      min="0"
                      className="focus:ring-primary  block  border-secondary1 rounded-md p-5 text-black  h-10 lg:w-32  border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200  dark:text-Cprimary  focus:border-Cprimary focus:border border-Csecondary1 bg-Csecondary1"
                    />
                  </div>

                  <div></div>
                </form>

                <div className="relative flex flex-col items-center h-10 lg:w-[200px] rounded-md ml-0 lg:mr-10 mr-2 right-3 ">
                  <h2 className="lg:mr-5 mr-28 -mt-6 font-semibold text-base text-Cprimary">
                    Localisation
                  </h2>
                  <button
                    onClick={() => setIsOpenLocation((prev) => !prev)}
                    className="bg-Csecondary1 flex w-full items-center justify-between font-semibold text-base rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-white"
                  >
                    {selectedLocation ? selectedLocation : "Lieu"}
                    {!isOpenLocation ? (
                      <AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                  {isOpenLocation && (
                    <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
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

                <div className="relative flex flex-col items-center h-10 lg:w-[200px] rounded-md ml-0 lg:mr-10 mr-2 right-3">
                  <h2 className="lg:mr-14 mr-36  -mt-6 font-semibold text-base text-Cprimary">
                    Prix min/m²
                  </h2>
                  <button
                    // onClick={() => setIsOpen((prev) => !prev)}
                    onClick={handleDropdownClickMin}
                    className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimar text-white"
                  >
                    {selectedPrixMin ? selectedPrixMin : "Prix min"}
                    {!isOpenMin ? (
                      <AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                  {isOpenMin && (
                    <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
                      {prixMinParEtat[etatSelectionne]
                        ?.sort(
                          (a, b) =>
                            parseFloat(a.replace(/,/g, ""), 10) -
                            parseFloat(b.replace(/,/g, ""), 10)
                        )
                        .map((prixmin, i) => (
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

                <div className="relative flex flex-col items-center h-10 lg:w-[200px] rounded-md ml-0 lg:mr-10 mr-2 right-3">
                  <h2 className="lg:mr-14 mr-36 -mt-6 font-semibold text-base text-Cprimary">
                    Prix max/m²
                  </h2>
                  <button
                    // onClick={() => setIsOpenPrice(!isOpenPrice)}

                    onClick={handleDropdownClickMax}
                    className="bg-Csecondary1 p-0  flex w-full items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary text-white"
                  >
                    {selectedPrixMax ? selectedPrixMax : "Prix max"}
                    {!isOpenMax ? (
                      <AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                  {isOpenMax && (
                    <div className="bg-white absolute top-10 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52 border-2 z-10">
                      {prixMaxParEtat[etatSelectionne]
                        ?.filter(
                          (price) =>
                            parseFloat(price.replace(/,/g, ""), 10) >
                            (selectedPrixMin
                              ? parseFloat(
                                  selectedPrixMin.replace(/,/g, ""),
                                  10
                                )
                              : 0)
                        )
                        .sort(
                          (a, b) =>
                            parseFloat(a.replace(/,/g, ""), 10) -
                            parseFloat(b.replace(/,/g, ""), 10)
                        )
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

                <button
                  className="relative z-[2] rounded-r rounded-md border-2 border-primary px-4 py-2  lg:w-24 w-52 uppercase transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-Csecondary1 text-Cprimary font-semibold text-sm hidden"
                  type="button"
                  id="button-addon3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {showMessage && (
          <div className="text-red-500 text-center font-semibold text-base italic lg:mt-0 mt-10">
            S'il vous plaît sélectionnez un type de propriété (Acheter ou Louer)
            avant de choisir votre marge de prix!
          </div>
        )}
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
          <h2 className="text-4xl font-bold mb-4 text-Csecondary1 lg:pt-7 uppercase  ">
            Nos Terrains
          </h2>
          <h2 className="text-lg font-semibold mb-4 text-Cprimary ">
            Nous offrons une large gamme de services innovants dans le domaine
            de l'immobilier :
          </h2>
        </div>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 -mt-20   ">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center lg:gap-0 gap-7 2xl:ml-14">
            <div>
              <div className="grid lg:grid-cols-2 gap-7 mb-20 mt-20 items-center lg:px-7">
                {paginatedTerrains.length === 0 ? (
                  <p className="text-Cred-primary font-semibold text-center md:-end-1/2 mx-auto mt-7 lg:ml-44 text-xl lg:-mt-44 ">
                    Aucun terrain ne correspond aux critères de recherche
                    sélectionnés.
                  </p>
                ) : (
                  paginatedTerrains.map((Terrain, index) => {
                    // Créez un numéro de référence alphanumérique en combinant le titre et l'index
                    const paddedIndex = `00${Terrain.numReference}`.slice(-3);

                    const referenceNumber = `${
                      Terrain.etat === "vendre" ? "TV" : "TL"
                    }-${paddedIndex}`;
                    Terrain.referenceNumber = referenceNumber;

                    return (
                      <div
                        key={Terrain.numReference}
                        className="md:w-full lg:w-full  lg:h-full mx-auto bg-Csecondary bg-neutralSilver rounded-2xl shadow-2xl mb-1 border  border-Cprimary transition-all duration-300 w-full lg:-ml-24      hover:transform-translate-x-n5 hover:transform-translate-y-n5 hover:rotate-5 hover:scale-95 "
                      >
                        <div className="flex items-center gap-2">
                          <div
                            onClick={() => {
                              setSelectedTerrain(Terrain);
                              setShowModal(true);
                              handleTerrainClick(Terrain);
                            }}
                          >
                            <div className="relative lg:w-[250px] lg:h-[260px] lg:-mb-1 w-[120px] h-[260px]   ">
                              <img
                                src={Terrain.image}
                                alt="Les valeur d'efficace"
                                className="object-center rounded-md border border-Csecondary1 brightness-125 absolute top-0 left-0 w-full h-full object-cover z-0"
                              />
                            </div>
                          </div>

                          <div className="lg:w-[1300px] w-44 h-full  ">
                            <h3 className="my-2 mt-0 text-xl xs:text-sm font-poppins font-semibold text-Cprimary flex  ">
                              <div
                                onClick={() => {
                                  setSelectedTerrain(Terrain);
                                  setShowModal(true);
                                }}
                                className="italic underline uppercase top-8 cursor-pointer xs:text-sm "
                              >
                                {referenceNumber}
                              </div>
                              <h3 className="lg:ml-14 ml-4 md:ml-3 xl:ml-28 font-bold  italic text-base text-white bg-Cprimary rounded-lg px-1 py-1">
                                A {Terrain.etat}
                              </h3>
                            </h3>
                            <p className="text-base font-serif text-texteCouleur text-justify  mr-2 flex ">
                              <FaMapMarkerAlt
                                className="mr-2 mt-1"
                                style={{ color: "blue" }}
                              />
                              {Terrain.pays},{Terrain.ville}-{Terrain.quartier},
                            </p>
                            <p className="text-base font-serif text-texteCouleur text-justify mr-2 flex  ">
                              <FaRegCalendarAlt
                                className="mr-2 mt-1"
                                style={{ color: "blue" }}
                              />

                              {Terrain.date}
                            </p>
                            <p className="text-base font-serif text-texteCouleur text-justify mr-2 flex  ">
                              <MdOutlineTitle
                                className="mr-2 mt-1"
                                style={{ color: "blue" }}
                              />

                              {Terrain.titreFoncier}
                            </p>

                            <p className="text-base font-serif text-texteCouleur text-justify mr-4 flex flex-wrap  lg:px-0 px-2 lg:ml-0  ">
                              <FaChartArea
                                className="mr-2 mt-1 -ml-1 lg:ml-0"
                                style={{ color: "blue" }}
                              />

                              {Terrain.dimension}
                              <div className="lg:px-3 px-3 flex flex-wrap lg:mt-0 mt-1">
                                <MdPriceCheck
                                  className="mr-1 mt-1 -ml-5 w-6 h-6 lg:ml-1 sm:ml-5"
                                  style={{ color: "blue" }}
                                />
                                {Terrain.prix}
                              </div>
                            </p>
                            <div className="pt-3 text-Cprimary">
                              <a
                                className="italic underline"
                                href={Terrain.vueSatelitte}
                              >
                                Vu Satelitte
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
                {/* Le modal */}

                <ModalTerrain
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                >
                  {selectedTerrain && (
                    <div className="p-4">
                      <div className="flex sticky top-0 bg-white lg:gap-x-3 gap-1 lg:top-0 ">
                        <h3 className="text-sm lg:text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg lg:w-20 p-2 px-1 w-24 ">
                          {/* {selectedTerrain.etat} 
                        {selectedTerrain.title} */}
                          {referenceNumber}
                        </h3>
                        <h3 className="text-sm lg:text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg w-24 p-2  ">
                          A {selectedTerrain.etat}
                        </h3>
                        <a
                          href={`https://wa.me/237686741680?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20votre%20service,${referenceNumber}`}
                          className=""
                        >
                          <h3 className="text-sm lg:text-base font-semibold text-white mb-5 bg-Cprimary rounded-lg w-36 lg:w-44 p-2 flex ">
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
                        src={selectedTerrain.image}
                        alt={selectedTerrain.title}
                        className="object-cover w-full h-full rounded-md"
                      />
                      {/* {selectedTerrain.pays} -{selectedTerrain.ville}
                      <p className="mb-5 font-normal text-texteCouleur text-lg text-justify ">
                        Notre équipe d'experts en immobilier est composée de
                        professionnels passionnés qui connaissent le marché
                        local comme leur poche. Chacun de nos agents est dévoué
                        à vous aider à atteindre vos objectifs immobiliers, que
                        vous cherchiez à acheter votre première maison, à vendre
                        votre propriété existante, ou à investir dans des
                        opportunités immobilières.
                        {selectedTerrain.pays}
                      </p> */}
                      <div className="px-4 lg:-ml-20 max-w-screen-2x1 mx-auto my-8 mt-4">
                        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-2">
                          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
                            {selectedTerrain.images.map((image, imageIndex) => (
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
                            ))}

                            <Modal
                              isOpen={modalIsOpen}
                              onRequestClose={closeModal}
                              contentLabel="Image Modal"
                              className="-mt-12 w-[730px] h-[650px] lg:m-0 m-2 lg:-mt-12"
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
                                      className="mr-2 "
                                    >
                                      <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z" />
                                    </svg>
                                  </button>
                                  <img
                                    src={
                                      selectedTerrain.images[selectedImageIndex]
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

                          <div className="md:w-2/3 mx-auto text-center md:text-left xs:w-72 xs:-ml-5 ">
                            <p className="md:w-[500px] lg:px-5 mb-5 font-poppins text-texteCouleur text-lg text-justify leading-0">
                              Ce terrain est situé dans une{" "}
                              {selectedTerrain.descriptin} et possede: <br />
                              <h2 className="text-Cprimary font-semibold">
                                1. Un dossier techinique:{" "}
                                <span className="text-Csecondary1 italic">
                                  {selectedTerrain.dossierTechnique}{" "}
                                </span>{" "}
                              </h2>
                              <h2 className="text-Cprimary font-semibold">
                                2. Un certicat de propriété:{" "}
                                <span className="text-Csecondary1 italic">
                                  {" "}
                                  {selectedTerrain.certificatPropriete}
                                </span>
                              </h2>
                              <h2 className="text-Cprimary font-semibold">
                                {" "}
                                3. Un titre foncier:{" "}
                                <span className="text-Csecondary1 italic">
                                  {selectedTerrain.titreFoncier}
                                </span>{" "}
                              </h2>
                              <h2 className="text-Cprimary font-semibold">
                                {" "}
                                4. Un relief:{" "}
                                <span className=" text-Csecondary1 italic">
                                  {selectedTerrain.relief}
                                </span>
                              </h2>
                              <h2 className="text-Cprimary font-semibold">
                                {" "}
                                5. Coordonnées Geographiques:{" "}
                                <span className="text-Csecondary1 italic">
                                  <a href={selectedTerrain.vueSatelitte}>
                                    {selectedTerrain.coordonneesGeographiques}
                                  </a>
                                </span>
                              </h2>
                              <h2 className="text-Cprimary font-semibold">
                                {" "}
                                6. Morcelable:{" "}
                                <span className="text-Csecondary1 italic uppercase">
                                  {selectedTerrain.morcelable}
                                </span>
                              </h2>
                            </p>
                            <div className="flex xs:-ml-40 ">
                              <button className="bg-Cprimary text-white h-10 w-20  transition-all duration-300 rounded hover:bg-Csecondary1 animate lg:ml-44 xs:ml-44 lg:-mt-2">
                                {" "}
                                <a href="/login" className=" lg:mt-14 ">
                                  Acheter
                                </a>{" "}
                              </button>
                              <a
                                href="src/assets/documents/Offre de services_à partager.pdf"
                                target="_blank"
                              >
                                <button className="btn-primary h-10 w-full italic  ml-2 bg-Cprimary text-white rounded hover:bg-Csecondary1 transition-all duration-300 hover:-translate-y-4 -mt-2 xs:-mt-0.5">
                                  Telecharger la fiche clinte
                                </button>
                              </a>
                            </div>

                            {/* <button className="btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                              En savoir plus
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ModalTerrain>
              </div>
            </div>
            <div className="md:w-3/5 lg:-mx-32 mx text-center md:text-left divide- divide-x-2 divide-gray-400 lg:mt-52 mt-36 2xl:pl-36 ">
              <h2 className="text-2xl font-semibold mb-4 text-Cprimary  md:w-4/5 -mt-52 uppercase lg:ml-8 ">
                Autres biens
              </h2>
              <div className=" md:w-4/4 text-lg font-poppins mb-1 text-justify  divide-gray-400  text-texteCouleur lg:ml-8">
                <h2 className="pl-2 text-xl font-semibold mb-2 text-Cprimary  md:w-4/5">
                  Commerciaux
                </h2>
                <div className="pl-3 divide-gray-400  text-base font-poppins ">
                  <a className="block p-1 hover:text-Csecondary1" href="#">
                    Bureaux
                  </a>
                  <a className="block p-1 hover:text-Csecondary1" href="#">
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
                  <a
                    className="block p-1 hover:text-Csecondary1"
                    href="/immeuble"
                  >
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

              <div className="pl-3 mb-4 lg:ml-8">
                <img
                  src="/src/assets/exploration/duplex.jpg"
                  className="h-44 w-44"
                  alt=""
                />
              </div>

              {/* <button className="btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ml-10">
                En savoir plus
              </button> */}
            </div>
          </div>
        </div>
        <div className="mt-16 px-5">
          <ReactPaginate
            breakLabel={<span className="mr-4">...</span>}
            nextLabel={
              <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md ">
                <BsChevronBarRight />
              </span>
            }
            // onPageChange={1}
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel={
              <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md mr-2">
                <BsChevronBarLeft />
              </span>
            }
            containerClassName="flex items-center justify-center mt-8 mb-6"
            pageClassName="block border- border-solid border-Cprimary hover:bg-Cprimary w-10 h-10 flex items-center justify-center rounded-md mr-2"
            activeClassName="bg-gray-400 text-white"
          />
        </div>
        {/* <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen lg:py-10 ">
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
                <div className="flex items-center gap-4 group relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    className="w-16 h-16 text-gray-500 group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                  <div className="absolute bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p>Texte au survol</p>
                  </div>
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      2,245,548
                    </h4>
                    <p>Membres</p>
                  </div>
                </div>
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
                <div className="flex items-center gap-4 group relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-gray-500 group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                  <div className="absolute bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p>Texte au survol</p>
                  </div>
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      2,245,548
                    </h4>
                    <p>Membres</p>
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
        </div> */}

        {/* <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 mt-40">
          <div className="text-center md:-end-1/2 mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey">
              De l'efficassité dans l'immobiler
            </h2>
            <p className="text-base font-montserrat text-justify text-neutralDGrey mb-8 md:w-3/4 mx-auto">
              
              Bienvenue chez EFFICACE, votre partenaire de confiance dans le
              domaine de l'immobilier depuis 2023. Nous sommes fiers de mettre à
              votre disposition notre expertise et notre passion pour
              l'immobilier, afin de vous accompagner dans toutes vos
              transactions immobilières. Chez EFFICACE, notre mission est de
              vous offrir un service immobilier de premier ordre, basé sur
              l'intégrité, la transparence et le professionnalisme. Nous
              comprenons que l'achat, la vente ou la location d'une propriété
              est l'une des décisions les plus importantes de votre vie, c'est
              pourquoi nous nous engageons à vous fournir un accompagnement
              personnalisé et des solutions sur mesure.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 sm:grid-cols- grid-cols-1 gap-8 items-center justify-between">
            {blog.map((blog) => (
              <div
                key={blog.id}
                className="mx-auto relative mb-12 cursor-pointer "
              >
                <img
                  src={blog.image}
                  alt=""
                  className="hover:scale-95 transition-all duration-300 z-10"
                />
              
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
        </div> */}
      </Fragment>
    </>
  );
};

export default Terrain;
