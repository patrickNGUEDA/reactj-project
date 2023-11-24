
import React, {useRef, useState}from "react";
import Checkbox from '@mui/material/Checkbox';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const resetForm = () => {
    formRef.current.reset();
  };
  const formRef = useRef(null);

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

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }; 
  return (
    
    <section className="h-full bg-neutralSilver py-0 mt-20 rounded-md">
      <div className="bg-Cprimary h-16 text-white font-poppins font-semibold text-4xl text-center py-4 "> Login</div>
      <div className="container h-full px-6 py-14">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
            <form  ref={formRef} >
              {/* Email input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  className={`peer block min-h-[auto] w-96 rounded border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black ${isValid ? '' : 'border-red-500'}`}
                  placeholder='contact@efficace.com'
                  value={email}
                  onChange={handleChange1}
                />
                {isValid ? null : (
                  <p className="text-red-500 text-sm mt-2">L'adresse e-mail doit contenir "@"</p>
                )}
              </div>

              {/* Password input */}
              <div className="relative mb-4" data-te-input-wrapper-init>
              <label htmlFor="password">Password</label>
                <div className="relative w-60">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  autoComplete="off"
                  className="peer block min-h-[auto] w-96 rounded border-2 bg-Csecondary px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 -right-32 pr-0 flex  items-center cursor-pointer "
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              </div>
  

              {/* Remember me checkbox */}
               <div className="mb-2 flex items-center justify-between mx-auto lg:mr-32 ">  {/* sm:flex-row flex-col sm:items-center gap-1 */}
                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] -ml-2">
                <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                className="relative"
                />
                  <label
                    className=" pl-0 hover:cursor-pointer"
                    for="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a
                   href="/login"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 underline "
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-96 rounded bg-Cprimary px-7 pb-2.5 pt-3 text-base font-serif uppercase leading-normal text-white  transition duration-150 ]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                Ou connectez-vous avec :
                </p>
              </div>

              {/* Social login buttons */}

              <div className="items-center justify-center ">
              <button
                    type="button"
                    className="mx-1 ml-24 h-9 w-9 rounded-full bg-Cprimary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full bg-Cprimary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Twitter --> */}
                    <svg xmlns="http://www.w3.org/2000/svg"   className="mx-auto h-3.5 w-3.5"
                      fill="currentColor" viewBox="0 0 512 512">
                     

                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    
                  </button>
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full bg-Cprimary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full bg-Cprimary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Google --> */}
                    <svg xmlns="http://www.w3.org/2000/svg"  
                     className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                  </button>
              </div>
              <div className="text-center lg:text-center ml-1 mt-5">
               {/* <!-- Register link --> */}
               <p className="mb-0 mt-2 pt-1 text-sm font-semibold ">
                 Don't have an account?{" "}
                 <a
                   href="/login"
                   className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 underline underline-none"
                 >
                   Register
                 </a>
               </p>
             </div>
              
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
