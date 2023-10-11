import React from 'react';


const SubMenu = () => {
    return (
        <div className="dropdown-menu text-left  ">
            <div className="divide-y divide-gray-300 ">
                <a className="block p-2 hover:text-brandPrimary " href="/service1">Locations</a>
                <a className="block p-2 hover:text-brandPrimary  " href="/service2">Ventes</a>
                <a className="block p-2 hover:text-brandPrimary" href="/service3">Achats</a>
            </div>
        </div>
    );
};

export default SubMenu;


