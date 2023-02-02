import React from 'react'
import { Link } from 'react-router-dom'
import Phone from '../assets/iPhone 14 Pro Space Black Mockup.png'
import savings from '../assets/Group 665.png'
import subs from '../assets/Group 667.png'
import laptop from '../assets/MacBook Pro 16 inch Right View Mockup.png'
import shield from '../assets/shield.png'
import bank from '../assets/bank.png'
import ndic from '../assets/Group 675.png'
import '../index.css'

const Main = () => {
  return (
      <main className='lg:px-44 px-10 py-2 pb-[150px]'>
        
             
              <h1 className='text-center mx-auto text-5xl font-bold my-16 w-full lg:w-[50%] leading-relaxed'>The Banking App For Africans</h1>
         
      
          <div className='mt-24 flex flex-col space-y-16 lg:space-y-0 lg:flex-row justify-between items-center rightFace'>
              {/* Left side first segment */}
              <div className='w-full lg:w-[40%] flex-col flex text-center space-y-5'>
                  <h1 className='font-bold text-4xl '>Your One Stop For All Your Banking Needs</h1>
                  <p className='w-[80%] lg:w-[50%] mx-auto'>Save, spend, receive and send money, all in one place. </p>
                  <div className='space-x-3 flex items-center lg:space-x-6 justify-center'>
                     
                      <button className='bg-white text-black rounded-full py-2 px-4 hover:outline outline-white hover:outline-[2px] duration-700 hover:bg-transparent hover:text-white ease-in-out whitespace-nowrap text-sm lg:text-base'>Download App &nbsp; <i className="fa-solid fa-download"></i></button>
                       <button className='rounded-full py-[8px] px-12 bg-transparent outline outline-white outline-[2px] hover:outline-none duration-700 hover:text-black hover:bg-white ease-in-out whitespace-nowrap text-sm lg:text-base' > <Link to="/signup">Sign Up</Link> </button>
                  </div>
              </div>
              {/* Right side first segment */}
              <div className='w-[50%] lg:w-[25%]'>
                  <img src={Phone} alt="" className='w-full' />
              </div>
          </div>
          {/* Second segment */}
          <div className='pt-24 flex flex-col-reverse  lg:flex-row justify-between items-center leftFace'>
              {/* Left side second segment */}
              <div className='mt-16 lg:mt-0'>
                  <img src={savings} alt="" />
              </div>
              {/* right side second segment */}
              <div className='w-full lg:w-[30%] space-y-5 text-center'>
                  <h1 className='font-bold text-4xl '>Finally cultivate that habit of saving</h1>
                  <p className='w-[70%] mx-auto'>Save up for occasions like a birthday, or just have some spare cash for emergencies</p>
              </div>
          </div>
          {/* third segment */}
          <div className='pt-24 flex flex-col space-y-16 lg:space-y-0 lg:flex-row justify-between items-center rightFace'>
              {/*left side third segment  */}
               <div className='w-full lg:w-[30%] space-y-5 text-center'>
                  <h1 className='font-bold text-4xl '>Effortlessly pay bills</h1>
                  <p className= 'w-full lg:w-[80%] mx-auto'>Easily pay for stuff, from subscription renewals to online shopping and everything in-between.</p>
              </div>
              {/* right side ts */}
              <div>
                  <img src={subs} alt="" />
              </div>
          </div>
          {/* fourth segment */}
          <div  className='mt-24 flex flex-col-reverse lg:flex-row justify-between items-center'>
              {/* left side fs */}
              <div className='mt-16 lg:mt-0'>
                  <img src={laptop} alt="" />
              </div>
              {/* right side fs */}
               <div className='w-full lg:w-[30%] space-y-5 text-center'>
                  <h1 className='font-bold text-4xl '>Companion app</h1>
                  <p className=' w-full lg:w-[80%] mx-auto'>Loop comes with a desktop version companion app for whenever your on the go or if you just like looking at your balance on larger screens.</p>
              </div>
          </div>
          {/* section before footer */}
          <div className='mt-[280px] '>
              <div className='flex flex-col lg:flex-row items-center space-x-0 space-y-16 lg:space-y-0 lg:space-x-24 mx-auto justify-center'>
                  <div className='rounded-[30px]  h-[170px] w-[250px] relative from-gray-900 via-[#4a4a4a] to-gray-900 bg-gradient-to-r overflow-hidden'>
                  <div className='flex justify-center h-full py-2 bg-white bg-opacity-10 backdrop-blur-xl rounded-t-[30px]'>
                      <img src={shield} alt="" className='h-[100px]'/>
                  </div>
                  <div className='bg-white text-black w-full px-4 py-3 rounded-b-[30px] absolute bottom-0 font-bold text-center text-lg'>Military-Grade Security</div>
              </div>
              <div className='rounded-[30px]  h-[170px] w-[250px] relative from-gray-900 via-[#4a4a4a] to-gray-900 bg-gradient-to-r overflow-hidden'>
                  <div className='flex justify-center h-full py-6 bg-white bg-opacity-10 backdrop-blur-xl rounded-t-[30px]'>
                      <img src={ndic} alt="" className='h-[60px] w-[160px]'/>
                  </div>
                  <div className='bg-white text-black w-full px-4 py-3 rounded-b-[30px] absolute bottom-0 font-bold text-center text-lg'>NDIC Insured</div>
              </div>
              <div className='rounded-[30px]  h-[170px] w-[250px] relative from-gray-900 via-[#4a4a4a] to-gray-900 bg-gradient-to-r overflow-hidden'>
                  <div className='flex justify-center h-full py-2 bg-white bg-opacity-10 backdrop-blur-xl rounded-t-[30px]'>
                      <img src={bank} alt="" className='h-[100px]'/>
                  </div>
                  <div className='bg-white text-black w-full px-4 py-3 rounded-b-[30px] absolute bottom-0 font-bold text-center text-lg'>Licensed By The CBN</div>
              </div>
              </div>
              <div className='w-full flex justify-center mt-32'>
                  <button className='bg-white text-black rounded-full py-2 px-6 font-semibold hover:outline hover:outline-white hover:outline-[2px] duration-700 hover:bg-transparent hover:text-white ease-in-out' > <Link to="/signup">Sign Up</Link> </button>
              </div>
              
          </div>
      </main>
  )
}

export default Main