import React from 'react';
import SubMenu from './SubMenu';

const MaisonDropdown = () => {
    return (
        <div>
            <div className="relative group inline-block text-left">
                <button className=" cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium  divide-y md:flex  hidden ">
                Maisons
                </button>
                <div className="absolute hidden space-y-2 p- divide-y divide-gray-300 group-hover:block   right-0 z-10 mt-0 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <SubMenu />
                </div>
            </div>
        </div>
    );
};

export default MaisonDropdown;