import React from 'react';
import aboutImage from '../assets/about1.jpg';

const About = () => {
    return (
        <div>
            {/* Le texte d'appropos */}
             <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='a propos'>
                
                 <div className='md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                 <div>
                     <img src={aboutImage} alt="" className="w-22 h-22" />
                </div>
                    <div className='md:w-3/5 mx-auto text-center md:text-left'>
                        <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey  md:w-4/5'>À Propos d'EFFICACE</h2>
                         <p className='md:w-3/4 text-base text-neutralDGrey mb-8 text-justify' >
                              {/* ... Votre texte ... */}   
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
            
        </div>
        {/* company */}
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-2/3'>Faites vos differentes <br /> <span className='text-brandPrimary'>contirbutions</span></h2>
                <p className='md:w-3/4 text-base text-neutralDGrey mb-8 text-justify' >Faites confiance à EFFICACE pour réaliser vos aspirations immobilières. </p>
                </div>
                {/* stats */}
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

        </div>
         </div>
    );
};

export default About;