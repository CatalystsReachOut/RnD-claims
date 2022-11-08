import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import Star from '../../assets/Star.svg'
import WhiteStar from '../../assets/White-Star.svg'


const SideBar = () => {

    const categories = ["dashboard", "tickets", "consulting firms", "users", "settings", "data requests", "reports"];

    const [active, setActive] = useState(0);


    return (
        <div className='md:w-[20%] md:h-[100vh] h-auto w-full bg-[#EDF8F1] px-[0.75rem] py-[2rem] justify-between flex flex-col'>

            <div className='w-full flex items-center p-[1rem]'>
                <img src={Logo} className="mr-[0.5rem]" />
                <div className='font-sans font-medium leading-[20px] text-[20px] text-[#16252D]'>RnD Claims</div>
            </div>

            <div className='md:relative'>
             
            <div className='md:mt-[3rem] md:flex-1 flex md:block scrollbar-hide overflow-scroll flex-row md:absolute'>
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
                <p className='text-extrasmall w-[80%] m-auto text-center box-border  mb-[0.875rem] '>Release you maximal potential software</p>
                <button className='bg-primary text-s p-[0.5rem] w-full text-center rounded text-white '>Upgrade to Pro</button>
            </div>


        </div>
    )
}

export default SideBar