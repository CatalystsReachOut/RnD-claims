import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import Star from '../../assets/Star.svg'
import WhiteStar from '../../assets/White-Star.svg'


const SideBar = () => {

    const categories = ["dashboard", "tickets", "consulting firms", "users", "settings", "data requests", "reports"];

    const [active, setActive] = useState(0);


    return (
        <div className='w-[20%] h-[100vh] bg-[#EDF8F1] px-[0.75rem] py-[2rem] flex flex-col'>

            <div className='w-full flex items-center p-[1rem]'>
                <img src={Logo} className="mr-[0.5rem]"/>
                <div className='font-sans font-medium leading-[20px] text-[20px] text-[#16252D]'>RnD Claims</div>
            </div>
            <div className='mt-[3rem] flex-1'>

                {
                    categories.map((category, index) => {
                        return (
                            <div className=' mb-[0.5rem]' key={index} >
                                <button className={`w-full flex items-center h-[3rem] p-[0.8rem] rounded ${active == index ? 'buttons-color' : 'text-[#16252D]'}`}
                                    onClick={() => setActive(index)}
                                >
                                    {
                                        active == index ?
                                            <img src={WhiteStar} className=" mr-[1.2rem]" />
                                            :
                                            <img src={Star} className=" mr-[1.2rem]" />

                                    }
                                    <p className='text-s'>{category}</p>
                                </button>

                            </div>)
                    })
                }
            </div>

            <div className='bg-white w-[full] p-[1rem] rounded mx-[0.75rem]' >
                <p className='text-extrasmall w-[9rem] box-border m-[0.25rem] mb-[0.875rem] '>Release you maximal potential software</p>
                <button className='bg-primary text-s p-[0.5rem] w-full text-center rounded text-white '>Upgrade to Pro</button>
            </div>


        </div>
    )
}

export default SideBar