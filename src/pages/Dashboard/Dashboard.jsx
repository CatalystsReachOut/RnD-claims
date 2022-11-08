import React from 'react';
import SideBar from '../../componenets/SideBar/SideBar'

import Tickets from '../../componenets/Tickets/Tickets';
import Navbar from '../../componenets/Navbar/Navbar';


const Dashboard = () => {
  return (
    <div className='flex flex-col max-h-[100vh] relative md:flex-row'>

      <div className='w-[25%] flex max-h-100vh overflow-y-scroll scrollbar-hide'>
        <SideBar />
      </div>
      <div className='w-full'>
        <div className='pb-[45px] relative'>
          <Navbar />
        </div>

        <div className='mt-[30px] max-h-[85vh] overflow-y-scroll'>
          <Tickets />
        </div>

      </div>
    </div>
  )
}

export default Dashboard