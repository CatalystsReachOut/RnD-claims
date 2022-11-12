import React,{useRef} from 'react';
import SideBar from '../../componenets/SideBar/SideBar'

import Tickets from '../../componenets/Tickets/Tickets';
import Navbar from '../../componenets/Navbar/Navbar';


const Dashboard = () => {

  const sideRef = useRef(false);

  const showSideBar = (e) => {
    e.preventDefault();
    sideRef.current.classList.remove("hidden");
    sideRef.current.classList.remove("static");
    sideRef.current.classList.add ("flex");
    sideRef.current.classList.add("fixed");
    sideRef.current.classList.add("z-[999]");

  }

  const hideSideBar = (e) => {
    e.preventDefault();
    sideRef.current.classList.add("static");
    sideRef.current.classList.add("hidden");
  }

  return (
    <div className='sm:flex flex-col sm:flex-row min-h-[100vh] h-full'>

      <SideBar ref={sideRef} hideSideBar={hideSideBar}/>
      <div className='sm:w-[80%] w-[100%] '>

        <div className="relative w-full">
          <Navbar showSideBar={showSideBar}/>
        </div>

        <div className='pt-[60px] h-full max-w-[100%] overflow-y-auto overflow-x-hidden'>
          <Tickets />
        </div>

      </div>
    </div>
  )
}

export default Dashboard