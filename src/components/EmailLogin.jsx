import React from 'react'
import Logo from '../assets/Group 1 (1).png'
import Logo2 from '../assets/Group 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
const EmailLogin = () => {
  const { signIn } = UserAuth();
    const navigate = useNavigate
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
e.preventDefault();
    setError('')
    try {
      await signIn(email,password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  // theme switcher
   const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div id={theme} className='rightFace w-full min-h-screen' >
      <div className='w-full min-h-screen container-opaque bg-white bg-opacity-80 flex justify-center items-center '>

        <div className='w-full lg:w-[40rem]  h-[120vh] relative p-8 text-center'>
          <div className='mb-8'>
            <Link to="/landingpage" className='duration-300 ease-in-out'>
                {theme === "light" ? <img src={Logo} alt="" className='mx-auto mb-8 duration-300 ease-in-out' /> : <img src={Logo2} alt="" className='mx-auto mb-8 duration-300 ease-in-out' />}
              
            </Link>
            <h1 className='font-bold text-2xl'>Log In To Your Account</h1> 
          </div>
          <div onClick={toggleTheme} checked={theme === "dark"} className="">
              <label htmlFor="check" className='overflow-hidden absolute form-switch right-6 top-10 cursor-pointer bg-[#D7D7D7] items-center flex justify-between rounded-full px-3 w-[6rem]'>

             
            <input type="checkbox" name="" className='sr-only peer' id="" />
              <p className='duration-900 ease-in-out'>{theme === "light" ? "Light" : "Dark"}</p>
              <div className='text-gray-800 rounded-full form-switch p-2 flex items-center justify-center'>
               
                {theme === "light" ? <i className="fa-solid fa-lightbulb text-black duration-300 ease-in-out "></i> : <i className="fa-solid fa-moon duration-300 ease-in-out "></i>}
               
              </div>  </label>
          </div>
          <form onSubmit={handleSubmit} action="" className=" w-full lg:w-[35rem] bg-[#f4f4f4] form-container rounded-xl text-center mx-auto py-16 space-y-8 flex flex-col items-center ">
            
             <input  onChange={(e)=> setEmail(e.target.value)} type="email"  placeholder='Email Address' className='bg-[#dadada] w-[90%] lg:w-[30rem] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]'/>
            <input  onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Password' className='bg-[#dadada] w-[90%] lg:w-[30rem] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]' />
            <button type="submit" className='bg-black text-white text-xl font-bold rounded-full py-4 w-[70%] lg:w-[20rem]'>Log In</button>
          </form>
          <p className='text-lg mt-6'>Don't have an account? <Link to="/signup" className='text-[#00489c]'>Create one.</Link></p>
        </div>
      </div>
      </div>
      </ThemeContext.Provider>
  )
}

export default EmailLogin