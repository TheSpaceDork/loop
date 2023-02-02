import React from 'react'
import Logo from '../assets/Group 1.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("showNav")
  }
  return (
      <nav className='px-8 lg:px-36 py-2 w-full'>
          <div className='flex items-center justify-between ' >
              <div className=''>
                
                  <img src={Logo} alt="" /> 
              </div>
             
              <ul className='lg:flex items-center font-semibold space-x-16 hidden'>
                  <li><a href="#bre">Features</a> </li>
                  <li><a href="#bre">Company</a></li>
                  <li><a href="#bre">Faq</a></li>
                  <li><a href="#bre">Help</a></li>
              </ul>
              <div className='space-x-4 lg:block hidden'>
                <button className='rounded-full py-[3px] px-4 bg-transparent outline outline-white outline-[2px] hover:outline-none duration-700 hover:text-black hover:bg-white hover:py-1 ease-in-out'  > <Link to="/login">Log In</Link></button>
               <button className='bg-white text-black rounded-full py-1 px-4 hover:outline outline-white hover:outline-[2px] duration-700 hover:bg-transparent hover:text-white ease-in-out'><Link to="/signup">Sign Up </Link> </button>  
        </div>
        <div onClick={showNavBar} className='lg:hidden block outline outline-[1px] outline-white px-2 cursor-pointer'>
              <i className="fa-solid fa-bars text-lg text-[white]"></i>
          </div>
              {/* mobile nav menu */}
       <div
          ref={navRef}
              className=" lg:hidden flex flex-col space-y-12 items-center pt-20 pb-16 fixed -right-[200vw] top-0 bg-white bg-opacity-80 backdrop-blur-xl h-[560px] w-[350px] z-[40] duration-700 ease-in-out" >
              <div onClick={showNavBar} className='lg:hidden block outline outline-[1px] outline-black px-2 absolute top-6 right-9'>
                  <i className="fa-solid fa-xmark text-lg text-black cursor-pointer"></i>
              </div>
           <div className='flex w-[80%] justify-evenly flex-col  space-y-16 items-center  text-black font-semibold '>
              <a href="" className='hover:opacity-50 duration-300'>Features</a>
              <a href="" className='hover:opacity-50  duration-300'>Company</a>
              <a href="" className='hover:opacity-50  duration-300'>FAQ</a>
              <a href="" className='hover:opacity-50  duration-300'>Help</a>
              </div>
               <div className=' flex  space-x-6 items-center'>
               <button className='rounded-full py-[3px] px-4 bg-transparent outline text-black outline-black outline-[2px] hover:outline-none duration-700 hover:text-black hover:bg-white hover:py-1 ease-in-out'  > <Link to="/login">Log In</Link></button>
               <button className='bg-black text-white rounded-full py-1 px-4 hover:outline outline-white hover:outline-[2px] duration-700 hover:bg-transparent hover:text-black ease-in-out'><Link to="/signup">Sign Up </Link> </button>  
          </div>
         </div>
          </div>

    </nav>
  )
}

export default Navbar