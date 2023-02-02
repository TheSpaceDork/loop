import React from 'react'
import { UserAuth } from '../context/AuthContext'

const DashNav = (props) => {
    const { user, } = UserAuth();
     let defaultURL ="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png"
  return (
      <nav className='fixed top-0 nav-light left-0 right-0 px-8 lg:px-32 py-4 bg-opacity-75 backdrop-blur-xl z-10'>
          <div className='flex justify-between items-center'>
              <div>
                  <h1 className='text-2xl font-bold ' >Loop</h1>
              </div>
              <div className='flex items-center space-x-6 '>
                  <div className='hidden  bg-white rounded-full search px-4 py-1 lg:flex items-center'>
                      <i className="fa-solid fa-magnifying-glass text-[#646464]"></i> &nbsp;
                      <input type="search" className=' outline-none border-none   text-[#646464]' placeholder="Search..."  />
                  </div>
                  <div className='hidden lg:block'> <i className="fa-solid fa-bell text-[#646464] text-3xl cursor-pointer"></i></div>
                  <div onClick={props.settingsMobile} className='bg-white profile-switch text-black overflow-x-hidden rounded-full w-[145px] justify-between px-2 py-1 cursor-pointer flex items-center'>
                      <img src={user?.photoURL || defaultURL} alt="profile" className='w-6 h-6 rounded-full' />
                      <h1 className='whitespace-nowrap text-sm font-semibold'>
                          {user?.displayName || user?.uid}
                      </h1>
                  </div>
              </div>
          </div>
    </nav>
  )
}

export default DashNav