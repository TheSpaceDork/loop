import {React, useEffect} from 'react'
import Logo from '../assets/Group 1 (1).png'
import Logo2 from '../assets/Group 1.png'
import { Link } from 'react-router-dom'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import {motion} from "framer-motion"
export const ThemeContext = createContext(null);
const Login = () => {
 const navigate = useNavigate()
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try { 
 await googleSignIn()
    } catch (error) {
   console.log(error)
 }
  }
   useEffect(() => {
     if (user != null) {
      
   navigate('/dashboard')
}
  }, [navigate, user])
   const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <motion.div
          initial={{x:"100%", }}
        animate={{ x: "0%", }}
        transition={{duration:0.05, ease: "easeInOut"}}
     exit={{opacity:1}}
        id={theme}
        className='rightFace w-screen min-h-screen'>
      <div className='container-opaque w-screen min-h-screen bg-white bg-opacity-80 flex justify-center items-center '>

        <div className=' w-full  lg:w-[40rem]  h-[90vh] relative p-4 mt-[80px] lg:p-8 text-center'>
          <div className='mb-8'>
              <Link to="/" className='duration-300 ease-in-out'>
                {theme === "light" ? <img src={Logo} alt="" className='mx-auto mb-8 duration-300 ease-in-out' /> : <img src={Logo2} alt="" className='mx-auto mb-8 duration-300 ease-in-out' />}
              
            </Link>
          
            <h1 className='font-bold text-2xl'>Log In To Your Account</h1> 
          </div>
            <div onClick={toggleTheme} checked={theme === "dark"} className="absolute right-6 top-10">
              <label htmlFor="check" className='overflow-hidden  form-switch  cursor-pointer bg-[#D7D7D7] items-center flex justify-between rounded-full px-3 w-[6rem]'>

             
            <input type="checkbox" name="" className='sr-only peer' id="" />
              <p className='duration-900 ease-in-out'>{theme === "light" ? "Light" : "Dark"}</p>
              <div className='text-gray-800 rounded-full form-switch p-2 flex items-center justify-center'>
               
                {theme === "light" ? <i className="fa-solid fa-lightbulb text-black duration-300 ease-in-out "></i> : <i className="fa-solid fa-moon duration-300 ease-in-out "></i>}
               
              </div>  </label>
          </div>
          <div className=" w-full lg:w-[25rem] form-container bg-[#f4f4f4] rounded-xl text-center mx-auto py-6 space-y-8">
            <h1 className='text-xl font-semibold'>Log In Using </h1>
            {/* <div className='mx-auto bg-black text-white py-2  rounded-full w-[20rem] text-lg flex items-center justify-center cursor-pointer'><i className="fa-brands fa-twitter text-3xl mr-4"></i>  Twitter</div> */}
            <div onClick={handleGoogleSignIn} className='mx-auto bg-black text-white py-2  rounded-full w-[20rem] text-lg flex items-center justify-center cursor-pointer'> <i className="fa-brands fa-google text-3xl mr-4"></i> Google</div>
            <div className='bg-[#dcdcdc] form-switch text-[#333333] rounded-full py-3 px-1 w-[15rem] mx-auto'> <Link to="/Login:emailLogin">Use Your Email Instead</Link> </div>
          </div>
        </div>
      </div>
      </motion.div>
      </ThemeContext.Provider>
  )
}

export default Login