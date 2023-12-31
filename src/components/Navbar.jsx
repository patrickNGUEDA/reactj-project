import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
// import SubMenu from "./DropdownMenu/SubMenu";

import { SubMenu, SubMenuInvestir, SubMenuAide } from "./SousMenu/SubMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuClick = () => {
    // Close the main menu if it's open
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Utilisation du composant ServiceDropdown pour définir les sous-éléments du menu
  const navItems = [
    { link: " Accueil", path: "accueil" },
    { link: " A propos de nous", path: "about" },
    { link: "Terrains", path: "terrain" },
    {
      link: "Bâtiments",
      subMenu: <SubMenu key="maisonDropdown" />,
    },
    {
      link: "Investir",
      subMenu: <SubMenuInvestir key="investir" />,
    },

    // { link: "Terrains", component: <TerrainDropdown key="terrainDropdown" /> },
    // { link: "Maisons", component: <MaisonDropdown key="maisonDropdown" /> },

    { link: "Proposer", path: "proposer" },
    { link: "Contact", path: "contact" },

    {
      link: "Aide",
      subMenu: <SubMenuAide key="aide" />,
    },
  ];

  const location = useLocation();

  return (
    <header className="w-screen bg-white md:bg-transparent fixed top-0 left-0 right-0 shadow-md">
      {/** aligner les elements de la barre de navigation */}
      <nav
        className={`py-2 lg:px-5 px-4 ${
          isSticky
            ? " sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8 md:gap-0 ">
          <a href="" className="flex items-center ">
            <img
              src={logo}
              alt=""
              className="lg:w-full lg:h-10 xs:w-28 xs:h-8 sm:w-44 sm:h-14 md:w-16 md:h-6 inline-block items-center md:-ml-2 2xl:px-10"
            />
          </a>
          <ul className="md:flex gap-x-6 md:gap-x-4 2xl:ml-44 hidden font-lato text-base ml-14 2xl:gap-x-10 xl:gap-x-8 md:-ml-5">
            {navItems.map((navItem) => (
              <li key={navItem.link}>
                {navItem.subMenu ? (
                  <div className="relative group inline-block">
                    <button className="cursor-pointer text-base text-texteCouleur hover:text-Cprimary first:font-medium divide-y md:flex ">
                      {navItem.link} <span className="ml-2">&#9662;</span>{" "}
                      {/* Flèche vers le bas */}
                    </button>
                    <div className="absolute hidden space-y-2 p-2 divide-y divide-gray-300 group-hover:block right-0 z-10 mt-0 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {navItem.subMenu}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={navItem.path}
                    offset={-100}
                    className={`block cursor-pointer text-base text-texteCouleur  hover:text-Cprimary first:font-medium ${
                      location.pathname === `/${navItem.path}` ? "active" : ""
                    }`}
                  >
                    {navItem.link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/** bouton*/}
          <div className="space-x-10 xs:space-x-2  lg:flex items-center flex justify-center -ml-16  px-5 xs:px-1">
            {/* <a href="./Connection" className=" flex  justify-center ml-10 lg:flex items-center text-brandPrimary hover:text-Csecondary1">Login</a> */}
            <Link
              to="/login"
              className="flex justify-center ml-12 lg:flex items-center text-texteCouleur  hover:text-Csecondary1"
            >
              Login
            </Link>
            <button className="bg-Cprimary text-white h-10 w-20  transition-all duration-300 rounded hover:bg-Csecondary1 animate">
              {" "}
              <a href="/login" className=" ">
                Sign up
              </a>{" "}
            </button>
          </div>
          {/** menu pour tout les divices*/}
          <div className="md:hidden cursor-pointer lg:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/** navbar pour mobile */}
        <div
          className={`space-y-3 px-4 mt-20 py-5 bg-gray-300 w-screen ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path, subMenu }) => (
            <div key={path} className="mb-3 group relative">
              {subMenu ? (
                <div>
                  <button
                    onClick={() => {
                      // Toggle the visibility of the submenu
                      setSubMenuVisible((prev) => !prev);

                      // Close the main menu if it's open
                      if (subMenuVisible) {
                        toggleMenu();
                      }
                    }}
                    className="block text-base text-texteCouleur hover:text-brandPrimary first:font-medium"
                  >
                    {link} <span className="ml-2">&#9662;</span>
                  </button>
                  <div
                    className={`ml-20 absolute hidden space-y-2 p-divide-y divide-gray-300 group-hover:block right-24 lg:right-44  z-10 mt-0  md:w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none${
                      subMenuVisible
                        ? "block fixed top-0 right-0 left-0  "
                        : "hidden"
                    }`}
                  >
                    {subMenu}
                  </div>
                </div>
              ) : (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => {
                    // Close the main menu if it's open
                    if (isMenuOpen) {
                      toggleMenu();
                    }
                  }}
                  className="block text-base text-texteCouleur hover:text-brandPrimary first:font-medium"
                >
                  {link}
                </Link>
              )}
            </div>
          ))}

          {/* {navItems.map(({ link, path, subMenu }) => (
            <div key={path} className="mb-3 group relative">
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => {
                  // Toggle the visibility of the submenu
                  setSubMenuVisible((prev) => !prev);
                  
                  // Close the main menu if it's open
                  if (isMenuOpen) {
                    toggleMenu();
                  }
                }}
                className="block text-base text-texteCouleur hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
              <div
                className={
                  "ml-3 absolute hidden space-y-2 p-divide-y divide-gray-300 group-hover:block right-44 lg:right-64 z-10 mt-0 w- md:w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                }

              >
                { subMenu}
              </div>
            </div>
          ))} */}
        </div>

        {/* <div className={`space-y-3 px-4 mt-20 py-5 bg-gray-300 ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
             {
                navItems.map(({link, path,subMenu })=> <Link to = {path} spy = {true} smooth = {true} offset = {-100} key={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link} </Link>)
             }
                
            </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
