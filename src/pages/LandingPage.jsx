import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { createContext, useState } from "react";
import { motion } from "framer-motion"

export const ThemeContext = createContext(null);
const LandingPage = () => {
    const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <motion.div id={theme} className='bg-[#000000] text-white min-h-[200vh] overflow-x-hidden'
  initial={{x:"100%", }}
        animate={{ x: "0%", }}
        transition={{duration:0.05, ease: "easeInOut"}}
     exit={{opacity:1}}
    >
      <Navbar />
      <Main />
      <Footer/>
    </motion.div>
     </ThemeContext.Provider>
  )
}

export default LandingPage