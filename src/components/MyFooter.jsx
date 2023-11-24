
import React, {useRef, useState}from "react";
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../assets/logo/logo_fb.png';
import Instagram from '../assets/reseauxsociaux/instagram.svg'

const MyFooter = () => {

  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange1 = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.includes('@')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
    return (

      <footer className="flex flex-col items-center bg-Cprimary text-center text-">

      <div className="container px-4 pt-6">
      <div className='space-y-4 mb-5'>
        <a href="" className="text-2x1 font-semibold flex items-center space-x-3 ">
          <img src={Logo} alt="" className="w-12px h-24 inline-block items-center -ml-7 -mt-7"/>         
        </a>
       </div>
        {/* Social media icons container */}
        <div className="mb-4 flex justify-center -mt-10 ">
          {/* <!-- Facebook --> */}
          <a
            href="https://m.facebook.com/story.php?story_fbid=pfbid02D5ohLizzZe8Px1u3vfX6W7qEnK97fqrdDwpcHsUQfe5DtaA97TY5tnN7kWavMSRzl&id=61550761930278&mibextid=Nif5oz"
            type="button"
            className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-whit transition duration-150 ease-in-out hover:bg-Csecondary1 focus:outline-none focus:ring-0 bg-white "
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          {/* <!-- Twitter --> */}
          <a
            href="#!"
            type="button"
            className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-whit transition duration-150 ease-in-out hover:bg-Csecondary1 focus:outline-none focus:ring-0 text-white bg-texteCouleur"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg xmlns="http://www.w3.org/2000/svg"   
              className="mx-auto h-full w-4"
              fill="currentColor" 
              viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </a>


          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7110625257526304772"
            type="button"
            className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-whit transition duration-150 ease-in-out hover:bg-Csecondary1 focus:outline-none focus:ring-0 text-white bg-Cprimary"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {/* <!-- Linkedin --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4 "
              fill="currentColor"
              viewBox="0 0 24 24"
              >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          <a
            href="mailto:efficaceinnovation@gmail.com?subject=Objet"
            type="button"
            className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-whit transition duration-150 ease-in-out hover:bg-Csecondary1 focus:outline-none focus:ring-0 text-white bg-white"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {/* <!-- Gmail --> */}
            <svg 
            className="mx-auto h-full w-4"
            viewBox="0 0 134 100" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z" fill="#4285F4"/>
            <path d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848" fill="#34A853"/>
            <path d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727" fill="#FBBC04"/>
            <path d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576" fill="#EA4335"/>
            <path d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364" fill="#C5221F"/>
            </svg>
          </a>

          <a
            href="https://instagram.com/eff.icace?igshid=MzRlODBiNWFlZA=="
            type="button"
            className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-whit transition duration-150 ease-in-out hover:bg-Csecondary1 focus:outline-none focus:ring-0 text-white bg-white"
            data-te-ripple-init
            data-te-ripple-color="light"
            
          >
            {/* <!--Instagram --> */}
            <img src={Instagram} alt="Instagram" className="mx-auto h-full w-7 "/>
          
          </a>
        </div>

        {/* Newsletter sign-up form */}
        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p className="text-base font-poppins text-Csecondary1">
                  <strong>S'inscrire à notre newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6" data-te-input-wrapper-init>
              <label htmlFor='email'>
                  {/* Email */}
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  className={ `peer block min-h-[auto] w-full rounded border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100   motion-reduce:transition-none dark:text-neutral-500 focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black  ${isValid ? '' : 'border-red-500'}`}
                  placeholder='contact@efficace.com'
                  value={email}
                  onChange={handleChange1}
                />
                {isValid ? null : (
                  <p className="text-red-500 text-sm mt-2">L'adresse e-mail doit contenir "@"</p>
                )}
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded px-3 pb-2.5 pt-3 text-base font-serif uppercase leading-normal text-white transition duration-150   hover:border-2 bg-Csecondary1 "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  
                >
                  <a href="/login">Souscrire</a> 
                  
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Copyright information */}
        <div className="mb-6 font-poppins  text-texteCouleur">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.
          </p>
        </div>
          
        {/* Links section */}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 text-Csecondary1">
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase ">A Propos</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-white">A propos de nous</a>
          </li>
          <li>
            <a href="#!" class="text-white">Contactez nous</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 4</a>
          </li>
        </ul>
      </div>
         
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Plus d'informations</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-white">Toute les proprietés</a>
          </li>
          <li>
            <a href="#!" class="text-white">Maisons à vendre</a>
          </li>
          <li>
            <a href="#!" class="text-white">Conception de maison</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 4</a>
          </li>
        </ul>
      </div>
        
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Nouvelles</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-white">Dernieres actualités</a>
          </li>
          <li>
            <a href="#!" class="text-white">Architecture de maison</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Companies</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-white">Blog</a>
          </li>
          <li>
            <a href="#!" class="text-white">Partenaires</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-white">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

      {/* Copyright section */}
      <div
        className="w-full text-center text-base font-poppins"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Copyright © 2023 Efficace 
        <a className="text-texteCouleur text-base font-poppins " href="https://tw-elements.com/">
        <p>Tout droits réservés</p>
        </a>
      </div>
    </footer>





      //   <Footer container>
      // <div className="w-full lg:mt-10 mt-10">
      //   <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      //     <div className='space-y-4 mb-8'>
      //     <a href="" className="text-2x1 font-semibold flex items-center space-x-3">
      //               <img src={logo} alt="" className="w-10px h-12 inline-block items-center "/> 
      //               <span className="text-[#263238]">EFFICACE</span> 
      //     </a>
      //     <div>
      //       <p className='mb-1'>Copyright © 2023 Efficace ltd.</p>
      //       <p>Tout droits réservés</p>
      //     </div>
      //     </div>
      //     <div className="grid grid-cols-2 gap-10 sm:mt-4 sm:grid-cols-3 sm:gap-8">
      //       <div>
      //         <Footer.Title title="A propos" />
      //         <Footer.LinkGroup col>
      //           <Footer.Link href="/">
      //             A propos de nous
      //           </Footer.Link>
      //           <Footer.Link href="#">
      //             Contactez nous
      //           </Footer.Link>
      //         </Footer.LinkGroup>
      //       </div>
      //       <div>
      //         <Footer.Title title="Follow us" />
      //         <Footer.LinkGroup col>
      //           <Footer.Link href="#">
      //             Github
      //           </Footer.Link>
      //           <Footer.Link href="#">
      //             Discord
      //           </Footer.Link>
      //         </Footer.LinkGroup>
      //       </div>
      //       <div>
      //         <Footer.Title title="Legal" />
      //         <Footer.LinkGroup col>
      //           <Footer.Link href="#">
      //             Privacy Policy
      //           </Footer.Link>
      //           <Footer.Link href="#">
      //             Terms & Conditions
      //           </Footer.Link>
      //         </Footer.LinkGroup>
      //       </div>
      //     </div>
      //   </div>
      //   <Footer.Divider />
      //   <div className="w-full sm:flex sm:items-center sm:justify-between">
      //     <Footer.Copyright
      //       by="Efficace™"
      //       href="#"
      //       year={2023}
      //     />
      //     <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
      //       <Footer.Icon
      //         href="#"
      //         icon={BsFacebook}
      //       />
      //       <Footer.Icon
      //         href="#"
      //         icon={BsInstagram}
      //       />
      //       <Footer.Icon
      //         href="#"
      //         icon={BsTwitter}
      //       />
      //       <Footer.Icon
      //         href="#"
      //         icon={BsGithub}
      //       />
            
      //     </div>
      //   </div>
      // </div>
      //   </Footer>
    );
};

export default MyFooter;