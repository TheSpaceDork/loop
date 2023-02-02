import React from 'react'
import Logo from '../assets/Group 1 (1).png'

const Footer = () => {
  return (
      <footer className='w-full bg-white    text-black px-10 lg:px-32 py-8 lg:py-16 min-h-[430px] flex flex-col lg:flex-row items-start space-x-0 space-y-16 lg:space-y-0 justify-between '>
          <div className='justify-between flex w-[40%] space-x-16 '>
                <div className='space-y-8'>
              <img src={Logo} alt="" />
              <select name="languages" id="" className='bg-black px-4 py-2 rounded-lg text-white cursor-pointer duration-700'>
                  <option value="English" className='bg-black text-white'>English</option>
                  <option value="French" className='bg-black text-white'>French</option>
                  <option value="Dutch" className='bg-black text-white'>Dutch</option>
                  <option value="Espanol" className='bg-black text-white'>Espanol</option>
                  <option value="Japanese" className='bg-black text-white'>Japanese</option>
              </select>
              <p className='text-lg'>Download app</p>
              <div className='space-x-4 flex '>
                  <div className='cursor-pointer  flex justify-center items-center w-[35px] h-[35px] rounded-full bg-black text-white'><i className="fa-brands fa-apple"></i></div>
                  <div className='cursor-pointer  flex justify-center items-center w-[35px] h-[35px] rounded-full bg-black text-white'><i className="fa-brands fa-google-play"></i></div>
                  
              </div>
      </div>
          <div className='space-y-8'>
              <h2 className='text-xl font-bold'>Company</h2>
              <ul className='space-y-2  font-semibold text-lg'>
                  <li className='cursor-pointer'>About Us</li>
                  <li className='cursor-pointer'>Media</li>
                  <li className='cursor-pointer'>Careers</li>
                  <li className='cursor-pointer'>Blog</li>
                  <li className='cursor-pointer'>Customers</li>
              </ul>
          </div>
          </div>
        
          <div className='justify-between  w-[40%] flex space-x-16 '>
              <div className='space-y-8'>
                  <h2 className='text-xl font-bold'>Features</h2>
           <ul className='space-y-2  font-semibold text-lg'>
                  <li className='cursor-pointer'>Loop Account</li>
                  <li className='cursor-pointer'>Payments</li>
                  <li className='cursor-pointer'>Investments</li>
                  <li className='cursor-pointer'>Credit Reports</li>
                  
              </ul>
          </div>
              <div className='space-y-8'>
                  <h2 className='text-xl font-bold'>Help</h2>
              <ul className='space-y-2  font-semibold text-lg'>
                  <li className='cursor-pointer'>FAQ</li>
                  <li className='cursor-pointer'>Knowledge Base</li>
                  <li className='cursor-pointer'>Contact</li>
                  <li className='cursor-pointer'>Community</li>
          </ul>
          </div>
          </div>
          
      </footer>
  )
}

export default Footer