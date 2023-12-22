import React from 'react';


const SubMenu = () => {
    return (
        <div className="dropdown-menu md:text-left">
            <div className="divide-y divide-gray-400  text-texteCouleur font-lato">
                <a className="block p-2 hover:text-Csecondary1 " href="/villa">Villas</a>
                <a className="block p-2 hover:text-Csecondary1 " href="/duplex">Duplex</a>
                <a className="block p-2 hover:text-Csecondary1" href="/immeuble">Immeubles</a>
                <a className="block p-2 hover:text-Csecondary1" href="#">Espaces commerciaux</a>
            </div>
        </div>
    );
};


const SubMenuInvestir =()=>{
    return (
        <div className="dropdown-menu md:text-left ">
            <div className="divide-y divide-gray-400  text-texteCouleur font-lato overflow-x-auto h-96">
                <a className="block p-2 hover:text-Csecondary1 " href="/service1">Commerces</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service2">Logements</a>
                <a className="block p-2 hover:text-Csecondary1 " href="/service3">Appartements meublés</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service4">Immeubles locatifs</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service5">Educations</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service6">Lotissements</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service7">Loisiers</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service8">Centres médicals</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service9">Hotels</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service9">Industriels</a>
                

            </div>
        </div>
    );
}


const SubMenuAide =()=>{
    return (
        
        <div className="dropdown-menu md:text-left">
            <div className="divide-y divide-gray-400  text-texteCouleur font-lato">
                <a className="block p-2 hover:text-Csecondary1" href="/services">Copropriétés</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service2">Crash funding</a>
                <a className="block p-2 hover:text-Csecondary1" href="/service3">Achats</a>
                <a className="block p-2 hover:text-Csecondary1" href="/pagination">Pagination</a>
            </div>
        </div>
    );
}


export { SubMenu, SubMenuInvestir,SubMenuAide };

