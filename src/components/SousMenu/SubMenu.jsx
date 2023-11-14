import React from 'react';


const SubMenu = () => {
    return (
        <div className="dropdown-menu md:text-left">
            <div className="divide-y divide-gray-400  text-texteCouleur font-montserrat">
                <a className="block p-2 hover:text-Csecondary1 " href="#">Villas</a>
                <a className="block p-2 hover:text-Csecondary1  " href="/service2">Duplexes</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service3">Immeubles</a>
            </div>
        </div>
    );
};


const SubMenuInvestir =()=>{
    return (
        <div className="dropdown-menu md:text-left">
            <div className="divide-y divide-gray-400  text-texteCouleur font-montserrat">
                <a className="block p-2 hover:text-Csecondary1 " href="/service1">Copropriétés</a>
                <a className="block p-2 hover:text-Csecondary1  " href="/service2">Crash funding</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service3">Achats</a>
            </div>
        </div>
    );
}


const SubMenuAide =()=>{
    return (
        
        <div className="dropdown-menu md:text-left">
            <div className="divide-y divide-gray-400  text-texteCouleur font-montserrat">
                <a className="block p-2 hover:text-Csecondary1 " href="/service1">Copropriétés</a>
                <a className="block p-2 hover:text-Csecondary1  " href="/service2">Crash funding</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service3">Achats</a>
            </div>
        </div>
    );
}


export { SubMenu, SubMenuInvestir,SubMenuAide };

