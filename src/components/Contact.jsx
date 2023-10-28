import React from 'react';

const Contact = () => {
    return (
        // <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver my-8 py-16'>
       
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16 mt-20'>
                <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                    <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl font-semibold text-neutral-800 mb-6 lg:leading-snug'> Les membres de l'équipe sont purement jeunes et dynamiques.</h2>
                    <div className='flex items-center justify-center gap-8'>
                      <button className='btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Avoir une demo   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='inline-block ml-2'>
                        <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004" stroke="white"/>
                        </svg></button>  
                    </div>
                    <a href="mailto:efficaceinnovation@gmail.com?subject=Objet">efficaceinnovation@gmail.com</a>
					<a class="icons" href="tel:+237 678 23 38 15">
						<span class="lnr lnr-phone-handset"></span>
                        <span className="text-[#263238]"> <a class="btns" href="tel:+237 678 23 38 15">+237 678 23 38 15</a></span> 
				    </a>
                    </div>
                    
                </div>
            </div>
        
        
    );
};

export default Contact;