import React,{useRef} from 'react';
import SideBar from '../../componenets/SideBar/SideBar'

import Tickets from '../../componenets/Tickets/Tickets';
import Navbar from '../../componenets/Navbar/Navbar';


const Dashboard = () => {

  const sideRef = useRef(false);

  const showSideBar = (e) => {
    e.preventDefault();
    sideRef.current.style.display = "flex",
    sideRef.current.style.position ="absolute",
    sideRef.current.style.zIndex ="999"
  }
  const hideSideBar = (e) => {
    e.preventDefault();
    sideRef.current.style.display = "none",
    sideRef.current.style.position ="absolute",
    sideRef.current.style.zIndex ="999"
  }

  return (
    <div className='sm:flex flex-col sm:flex-row'>

      <div className='w-[20%]  overflow-y-scroll scrollbar-hide'>

      <SideBar ref={sideRef}/>
      </div>
      <div className='md:w-[80%] w-[100%] '>

        <div className="relative w-full">
          <Navbar showSideBar={showSideBar} hideSideBar={hideSideBar} />
        </div>

        <div className='pt-[60px]  max-w-[100%] overflow-y-scroll overflow-x-hidden'>
          <Tickets />
        </div>

      </div>
    </div>
  )
}

export default Dashboard