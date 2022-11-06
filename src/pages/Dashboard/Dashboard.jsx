import React from 'react';
import SideBar from '../../componenets/SideBar/SideBar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { IoIosNotifications } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import Tickets from '../../componenets/Tickets/Tickets';


const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <SideBar />
      <div className='w-full'>

        <div className='flex flex-auto justify-center items-center px-[2.5rem] py-[1.5rem] bg-[#FBFAFC] h-[4.375rem] drop-shadow-md w-full'>
          <Breadcrumb className='font-medium flex-auto'>


            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Tickets</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className='flex items-center border-[1px] p-[0.0.625rem] border-solid border-[#E5E6EB] ml-[20px] md:m-0 rounded-lg  box-border'>

            <FiSearch className='mr-[0.625rem]' />
            <input type="text" placeholder="search" className='w-full  h-[2.5rem] bg-transparent border-none outline-none' />
          </div>

          <IoIosNotifications className='md:ml-[1rem] m-0  text-[1.5rem]' />


        </div>

        <div className='mt-[30px]'>
          <Tickets />
        </div>

      </div>
    </div>
  )
}

export default Dashboard