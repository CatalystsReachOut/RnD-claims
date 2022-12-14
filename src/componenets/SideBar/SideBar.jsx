import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import Star from '../../assets/Star.svg'
import WhiteStar from '../../assets/White-Star.svg'
import { GrClose } from 'react-icons/gr'



const SideMenu = (props, ref) => {

    const categories = ["Dashboard", "Tickets", "Consulting Firms", "Users", "Settings", "Data Requests", "Reports"];

    const [active, setActive] = useState(0);




    return (
        <div className='sm:w-[20%] w-[100%] bg-[#EDF8F1] px-[0.75rem] py-[2rem] justify-between sm:flex sm:static flex-col  md:z-0 min-h-[100vh] hidden' ref={ref}>

            <div className='w-full flex justify-between items-center p-[0.5rem]'>
                <div className='flex items-center'>
                    <img src={Logo} className="mr-[0.5rem]" />
                    <div className='font-sans font-medium leading-[20px] text-[20px] md:whitespace-nowrap text-[#16252D]'>RnD Claims</div>
                </div>
                <GrClose className='sm:hidden' onClick={props.hideSideBar} />
            </div>

            <div className=''>

                <div className='md:mt-[3rem] md:flex-1 flex md:block scrollbar-hide overflow-scroll flex-row '>
                </div>

                {
                    categories.map((category, index) => {
                        return (
                            <div className=' mb-[0.5rem]' key={index} >
                                <button className={`w-full flex items-center h-[3rem] p-[0.8rem] rounded ${active == index ? 'buttons-color' : 'text-[#16252D]'}`}
                                    onClick={() => setActive(index)}
                                >
                                    <div className='md:block hidden'>

                                        {
                                            active == index ?
                                                <img src={WhiteStar} className=" mr-[1.2rem]" />
                                                :
                                                <img src={Star} className=" mr-[1.2rem]" />

                                        }
                                    </div>
                                    <p className='text-s whitespace-nowrap'>{category}</p>
                                </button>

                            </div>)
                    })
                }
            </div>

            <div className='bg-white w-[full] p-[1rem] rounded md:mx-[0.75rem] m-0' >
                <p className='text-extrasmall w-[80%] m-auto text-center box-border  mb-[0.875rem]'>Release you maximal potential software</p>
                <button className='bg-primary text-s p-[0.5rem] w-full text-center rounded text-white'>Upgrade to Pro</button>
            </div>


        </div>
    )
}

const SideBar = React.forwardRef(SideMenu)

export default SideBar