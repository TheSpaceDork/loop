import React, { useState,useEffect } from 'react'
import DashNav from '../components/DashNav';
// import Sidebar from '../components/Sidebar';
import { useRef } from 'react'
import { UserAuth } from '../context/AuthContext'
import { ThemeContext } from './Login';
import MainDash from '../components/MainDash';
import {motion as m} from "framer-motion"
import { useLocation} from 'react-router-dom'
const Dashboard = () => {
  const { user, logOut } = UserAuth();

  const setRef = useRef()
  const mobileRef = useRef()
  const airtimeRef = useRef()
  const sendRef = useRef();
  const receiveRef = useRef();
  const sideRef = useRef()
  const location = useLocation()
  const settings = () => {
 setRef.current.classList.toggle("setOpen")
    }
  const settingsMobile = () => {
    mobileRef.current.classList.toggle("setOpen2")
   
  }
const funkPopup = () => {

  sendRef.current.classList.toggle("funkUp");

};
const funkPopup2 = () => {

  receiveRef.current.classList.toggle("funkUp2");

  };
  const buyAirtime = () => {
   airtimeRef.current.classList.toggle("funkUp");
   }



  const sideAnimation = () => {
     sideRef.current.classList.toggle("sideAnim")
   }
     const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
console.log(error)
    }
  }
  

  useEffect(() => {
    
    console.log('rerender in dashboard')
  },[location.pathname])
  const [isclicked, setIsclicked] = useState(false);
  // const [sideNav, setSideNav] = useState(false);
    const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const showHistory = () => {
    setIsclicked(!isclicked)
   
  }
  let defaultURL ="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png"

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

   
      <div
    initial={{x:"100%", }}
        animate={{ x: "0%", }}
        transition={{duration:0.05, ease: "easeInOut"}}
     exit={{opacity:1}}
        id={theme}
        className="bg-black overflow-x-hidden text-white w-screen min-h-screen px-6 pt-32 pb-16 lg:px-32 lg:pt-32 relative">
        <DashNav settingsMobile={settingsMobile} />
        {/* <Sidebar /> */}
        <div className='fixed left-0 hidden profile-switch bg-white text-black top-[30%] lg:flex flex-col items-center rounded-full space-y-8 py-8 min-h-[1rem] w-[60px]'>
     <div onClick={sideAnimation} ref={sideRef} className='w-10 h-10 cursor-pointer flex items-center justify-center text-xl rounded-xl'><i className="fa-solid fa-house"></i></div>
     <div  className='w-10 h-10 cursor-pointer flex items-center justify-center text-xl rounded-xl duration-700 ease-in-out'><i className="fa-solid fa-paper-plane"></i></div>
     <div  onClick={showHistory} className='w-10 h-10 cursor-pointer flex items-center justify-center text-xl rounded-xl'><i className="fa-solid fa-clock"></i></div>
     <div  onClick={settings} className='w-10 h-10 cursor-pointer flex items-center justify-center text-xl rounded-xl'><i className="fa-solid fa-gear"></i></div>
    
        </div> 
        {/* settings pop up */}
            <m.div   style={{ position: 'fixed' }} animate={{x: 100, scale: 1}} initial={{scale:0}} ref={setRef} className="fixed  bg-white settings hidden text-black  left-[-100vh] opacity-10 top-[30px] right-2 bottom-20px duration-[800ms] px-[60px] ease-in-out rounded-xl space-y-3 lg:flex w-[10px] h-[10px] flex-col items-center py-6">
               <div className='absolute left-10 top-6 cursor-pointer' onClick={settings}><i className="fa-solid fa-xmark text-2xl"></i></div>
                <img src={user?.photoURL || defaultURL} alt="" className='w-[80px] h-[80px] rounded-full' />
                <h1 className='font-semibold text-2xl '> {user?.displayName}</h1>
                <h1 className='font-semibold text-xl'>{user?.email} </h1>
                <p className=''>User Id :<span className='text-xs text-[#646464]'> {user?.uid}</span> </p>
                <div className='absolute bottom-10 w-[80%] flex justify-between items-center'>
                    {user?.email ? <button onClick={handleSignOut} className="set-switch bg-black px-4 py-2 rounded-xl text-white">Sign Out</button> : <button>Sign In</button>}
                      <div onClick={toggleTheme} checked={theme === "dark"} className="">
              <label htmlFor="check" className='overflow-hidden  set-switch  cursor-pointer bg-white items-center flex justify-between rounded-xl px-3 py-2 w-[6rem]'>

             
            <input type="checkbox" name="" className='sr-only peer' id="" />
              <p className='duration-900 ease-in-out'>{theme === "light" ? "Light" : "Dark"}</p>
              <div className='text-gray-800 rounded-full form-switch px-2 py-1 flex items-center justify-center'>
               
                {theme === "light" ? <i className="fa-solid fa-lightbulb text-black duration-300 ease-in-out "></i> : <i className="fa-solid fa-moon duration-300 ease-in-out "></i>}
               
              </div>  </label>
          </div>
                </div>
        </m.div>
        {/* mobile pop up */}
        <m.div   style={{ position: 'fixed' }} animate={{x: 100, scale: 1}} initial={{scale:0}} ref={mobileRef} className="fixed  bg-white settings text-black  top-[-100vh] opacity-10  right-0 left-0  duration-[800ms] px-[60px] ease-in-out rounded-xl space-y-3 flex w-[10px] h-[10px] flex-col items-center py-6">
               <div className='absolute left-10 top-6 cursor-pointer' onClick={settingsMobile}><i className="fa-solid fa-xmark text-2xl"></i></div>
                <img src={user?.photoURL || defaultURL} alt="" className='w-[80px] h-[80px] rounded-full' />
                <h1 className='font-semibold text-2xl '> {user?.displayName}</h1>
                <h1 className='font-semibold text-xl'>{user?.email} </h1>
                <p className='whitespace-nowrap'>User Id :<span className='text-xs text-[#646464]'> {user?.uid}</span> </p>
                <div className='absolute bottom-10 w-[80%] flex justify-between items-center'>
                    {user?.email ? <button onClick={handleSignOut} className="set-switch bg-black px-4 py-2 rounded-xl mx-auto text-white">Sign Out</button> : <button>Sign In</button>}
                      {/* <div onClick={toggleTheme} checked={theme === "dark"} className="">
              <label htmlFor="check" className='overflow-hidden  set-switch  cursor-pointer bg-white items-center flex justify-between rounded-xl px-3 py-2 w-[6rem]'>

             
            <input type="checkbox" name="" className='sr-only peer' id="" />
              <p className='duration-900 ease-in-out'>{theme === "light" ? "Light" : "Dark"}</p>
              <div className='text-gray-800 rounded-full form-switch px-2 py-1 flex items-center justify-center'>
               
                {theme === "light" ? <i className="fa-solid fa-lightbulb text-black duration-300 ease-in-out "></i> : <i className="fa-solid fa-moon duration-300 ease-in-out "></i>}
               
              </div>  </label>
          </div> */}
                </div>
             </m.div>
        <MainDash isclicked={isclicked} funkPopup={funkPopup} funkPopup2={funkPopup2} buyAirtime={buyAirtime} sendRef={sendRef} airtimeRef={airtimeRef} receiveRef={receiveRef} user={user} />
      </div>
    
       </ThemeContext.Provider>
  )
}

export default Dashboard