import React from 'react';
import ImageLogin from "../assets/login.jpg"


const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-xl text-white font-bold my-4'>Transformez votre idia en réalité</h1>
          <p className='text-xl text-white font-normal'>Commencez recevez ET gratuitement des offres attrayantes de la part de la communauté</p>

        </div> 
        <img src={ImageLogin} alt="image de connexion" className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 h-full bg-Csecondary1 flex flex-col p-20 justify-between items-center'>
        <h1 className='text-xl text-black font-semibold'>INTEEEEEEEE</h1>

        <div className='w-full lex flex-col max-w-[450px]'>
          <div className='w-full flex flex-col mb-2'>
          <h3 className='text-3xl font-semibold mb-2'>Login</h3>
          <p className='text-base mb-2'>Welcom, please entrer vous information de connexion</p>

          </div>
          <div className='w-full flex flex-col'>
            <input  
            type="email" 
            placeholder='Email'
            className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

              <input  
            type="password" 
            placeholder='password'
            className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center' >
              <input type="chechbox" className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember me!</p>

            </div>
            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot password ?</p>
          </div>
          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 font-semibold bg-Cprimary rounded-md p-4 text-center justify-center'>
              Login
            </button>
            <button className='w-full text-Cprimary my-2 font-semibold bg-Csecondary2 border-blue-400 rounded-md p-4 text-center justify-center'>
              Register
            </button>

          </div>
          <div className='w-full flex items-center justify-center py-2'>
            <div className='w-full h-[1px] bg-Cprimary'></div>
            <p className=' text-lg absolute  text-white '> or</p>

          </div>

          <div className='w-full text-Cprimary my-2 font-semibold bg-Csecondary2 border-blue-400 rounded-md p-4 text-center justify-center'>
              Google
            </div>
       
        </div>

        <div className='w-full flex items-center justify-center'> 
        <p className='text-sm font-normal text-black'>vous n'avez pas de compte? <span className='font-semibold underline-offset-2 cursor-pointer'>Sign up</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;






//import React from 'react';
// import SubMenu from './SubMenu';

// const MaisonDropdown = () => {
//     return (
//         <div>
//             <div className="relative group inline-block text-left ">
//                 <button className=" cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium  divide-y md:flex  hidden ">
//                 Batiments
//                 </button>
//                 <div className="absolute hidden space-y-2 p-divide-y divide-gray-300 group-hover:block right-0 z-10 mt-0 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//                 <SubMenu />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MaisonDropdown;