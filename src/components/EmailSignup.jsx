import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Logo from '../assets/Group 1 (1).png'
import Logo2 from '../assets/Group 1.png'
import { createContext, useState } from "react";
import { UserAuth } from '../context/AuthContext'
import { updateProfile } from "firebase/auth";
export const ThemeContext = createContext(null);

const EmailSignup = () => {
  // emails and password creation
  const navigate = useNavigate
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [displayName, setDisplayName] = useState("")
  const { createUser } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      //  await updateProfile(createUser({ displayName }))
     
      navigate('/dashboard')
    }catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  // dark and light mode switcher logic
     const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <div id={theme} className='rightFace w-screen min-h-screen'>
      <div className='w-screen min-h-screen container-opaque bg-white bg-opacity-80 flex justify-center items-center '>

        <div className= ' w-full lg:w-[40rem]  h-[120vh] relative p-8 text-center'>
          <div className='mb-8'>
            <Link to="/landingpage" className='duration-300 ease-in-out'>
                {theme === "light" ? <img src={Logo} alt="" className='mx-auto mb-8 duration-300 ease-in-out' /> : <img src={Logo2} alt="" className='mx-auto mb-8 duration-300 ease-in-out' />}
              
            </Link>
            <h1 className='font-bold text-2xl'>Create Your Account</h1> 
          </div>
          <div onClick={toggleTheme} checked={theme === "dark"} className="">
              <label htmlFor="check" className='overflow-hidden absolute form-switch right-6 top-10 cursor-pointer bg-[#D7D7D7] items-center flex justify-between rounded-full px-3 w-[6rem]'>

             
            <input type="checkbox" name="" className='sr-only peer' id="" />
              <p className='duration-900 ease-in-out'>{theme === "light" ? "Light" : "Dark"}</p>
              <div className='text-gray-800 rounded-full form-switch p-2 flex items-center justify-center'>
               
                {theme === "light" ? <i className="fa-solid fa-lightbulb text-black duration-300 ease-in-out "></i> : <i className="fa-solid fa-moon duration-300 ease-in-out "></i>}
               
              </div>  </label>
          </div>
          
          <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-8 w-full lg:w-[25rem] mx-auto'>
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='Email Address' className='bg-[#F4F4F4] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]'/>
            <input onChange={(e) => setDisplayName(e.target.value)} value={displayName} type="text" placeholder='Username'  className='bg-[#F4F4F4] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'   className='bg-[#F4F4F4] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]'/>
            <input type="password" placeholder='Confirm Password' className='bg-[#F4F4F4] form-switch rounded-full px-6 py-5 placeholder:text-lg placeholder:text-[#585858]' />
            <div>
              <p className='text-xs font-bold flex items-center'><i className="fa-regular fa-circle-check text-lg"></i> &nbsp; password must have upper and lowercase letters</p>
              <p className='text-xs font-bold flex items-center'><i className="fa-regular fa-circle-check text-lg"></i> &nbsp; password must beat least 8 characters long</p>
              <p className='text-xs font-bold flex items-center'><i className="fa-regular fa-circle-check text-lg"></i> &nbsp; password must have special characters</p>
           
            </div>
            <button type="submit" className='bg-black form-button text-white text-xl font-bold rounded-full py-4'>
              Create Account
            </button>
                  </form>
              </div>
              </div>
      </div>
      </ThemeContext.Provider>
  )
}

export default EmailSignup