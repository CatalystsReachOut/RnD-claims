import React from 'react'
import { GrClose } from 'react-icons/gr'
import CustomSelect from '../CustomSelect/CustomSelect'
import { RiFlag2Fill } from 'react-icons/ri'
import { BsSquareFill } from 'react-icons/bs'
import { TbCloudUpload } from 'react-icons/tb'
import plus from '../../assets/Plus.svg'



const DrawerMenu = ({close}, ref) => {
    return (
        <div 
        className='w-[100vw] hidden' ref={ref} >
            <div className="overlay w-[100%] h-full top-0 left-0 z-[200] absolute bg-[#000] opacity-50"></div>
            <form className='max-h-[100vh]'

            style={{
                position: "absolute",
                overflowY:"scroll",
                right: "0px",
                top: "0px",
                width: "500px",
                padding: "3rem 2.25rem",
                zIndex: "999",
                background: "#fff",
                borderTop: "1px solid #e9e9e9",
                transition: "0.5s"
            }}  id="formContainer" onSubmit={(e) => e.preventDefault()}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl text-[1.75rem] mb-[1rem]'>Name of the ticket</h1>
                    <GrClose onClick={(e) => close(e)} className="cursor-pointer text-[1.5rem] mb-[1rem]" id='close-button' />
                </div>

                <div className='w-[180px]'>
                    <CustomSelect options={statusOptions} />
                </div>

                <div className="assign flex mt-[2.5rem] items-center">
                    <div className='text-s text-secondary w-[180px]'>Assigned to</div>
                    <div class="flex -space-x-1 overflow-hidden">

                        <div className="mr-[1rem]">

                            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                        </div>

                        <button type='button' className="border-2 p-1 inline-block rounded-full"><img src={plus} /></button>

                    </div>

                </div>

                <div className='flex items-center my-[2rem]'>
                    <div className='text-s text-secondary w-[180px]'>
                        Severity
                    </div>
                    <div className='w-[120px]'>
                        <CustomSelect options={severityOptions} />
                    </div>

                </div>
                <div className='flex items-center mt-[2rem] mb-[1.5rem]'>
                    <div className='text-s text-secondary w-[180px]'>
                        Priority
                    </div>
                    <div className="w-[80px]">
                        <CustomSelect options={priorityOptions} />
                    </div>
                </div>
                <div className='flex items-center my-[18px]'>
                    <div className='text-s text-secondary w-[180px]'>
                        Consulting Firm
                    </div>

                    <div className='flex-1'>
                        <div className="w-[248px]">
                            <CustomSelect options={firmOptions} />
                        </div>
                    </div>
                </div>

                <div className='flex items-center my-[18px]'>
                    <div className='text-s text-secondary w-[180px]'>
                        End Client
                    </div>

                    <div className='flex-1'>
                        <div className="w-[248px]">
                            <CustomSelect options={endClientOptions} />
                        </div>
                    </div>
                </div>

                <div className='flex items-center my-[18px]'>
                    <div className='text-s text-secondary w-[180px]'>
                        Engagement
                    </div>

                    <div className='flex-1'>
                        <div className="w-[248px]">
                            <CustomSelect options={engagementOptions} />
                        </div>
                    </div>
                </div>

                <div className='flex items-center my-[2rem]'>
                    <div className='text-s text-secondary w-[180px]'>
                        Detailed Description
                    </div>

                    <textarea className='flex-1 text-s resize-none border-2 rounded outline-none' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit'></textarea>
                </div>

                <div className='flex flex-col items-center border-secondary border-dashed border-2 p-4 rounded'>
                    <TbCloudUpload className='text-[3.75rem] text-secondary' />
                    <div className='relative'>
                        <input type="file" className='w-[188px] absolute opacity-0 cursor-pointer' />
                        <p className='font-Manrope leading-6 font-medium text-[17px] text-primary'>Upload Media here</p>
                    </div>
                    <p className='font-Manrope leading-4 text-[0.75em] font-medium text-secondary'>Image can be size of 512 PX by 512 PX Only</p>
                </div>


                <div className="mt-[2rem]">
                    <button type="button" className="px-4 py-2 mr-[0.75rem] border-[#EBEAED] border-[1px] border-solid rounded text-s" id="close-button" onClick={(e) => close(e)}>Cancel</button>
                    <button type='submit' className='px-4 py-2 bg-primary text-[#fff]  border-solid rounded text-s'>Save Changes</button>
                </div>

            </form>
        </div>

    )
}

const Drawer = React.forwardRef(DrawerMenu);

export default Drawer


const status = [
    { value: "Open", label: "Open" },
    { value: "In Progress", label: "Progress" },
    { value: "In Review", label: "In Review" },
    { value: "blocked", label: "Blocked" },
    { value: "closed", label: "closed" },
]

const statusOptions = [
    {
        label: <div className='flex items-center gap-2'><BsSquareFill className='text-gray-500 capitalize' />open</div>,
        value: "open"
    },
    {
        label: <div className='flex items-center gap-2'><BsSquareFill className='text-orange-500 capitalize' /> In Progress</div>,
        value: "in progress",
    },
    {
        label: <div className='flex items-center gap-2'><BsSquareFill className='text-yellow-600 capitalize' /> In review</div>,
        value: "in review"
    },
    {
        label: <div className='flex items-center gap-2'><BsSquareFill className='text-red-600 capitalize' /> Blocked</div>,
        value: "blocked"
    },
    {
        label: <div className='flex items-center gap-2'><BsSquareFill className='text-green-700 capitalize' /> Closed</div>,
        value: "closed"
    },
]

const severityOptions = [
    {
        label: <div className='flex items-center gap-2 '> <RiFlag2Fill className='text-[red]' /> Urgent </div>,
        value: 'Urgent'
    },
    {
        label: <div className='flex items-center gap-2 '> <RiFlag2Fill className='text-[orange]' /> High </div>,
        value: 'High'
    },
    {
        label: <div className='flex items-center gap-2 '> <RiFlag2Fill className='text-[blue]' /> Normal </div>,
        value: 'Normal'
    },
    {
        label: <div className='flex items-center gap-2 '> <RiFlag2Fill className='text-[grey]' /> Low </div>,
        value: 'Low'
    },
]

const priorityOptions = [
    {
        label: <div> 1 </div>,
        value: '1'
    },
    {
        label: <div> 2 </div>,
        value: '2'
    },
    {
        label: <div>3</div>,
        value: '3'
    },
    {
        label: <div>4</div>,
        value: '4'
    },

]

const firmOptions = [
    {
        label: <div>Option 1</div>,
        value: 'Option 1'
    },
    {
        label: <div> Apex India </div>,
        value: 'Apex India'
    },
    {
        label: <div>Option 3</div>,
        value: 'Option 3'
    },
    {
        label: <div>Option 4</div>,
        value: 'Option 4'
    },
]

const endClientOptions = [
    {
        label: <div>Option 1</div>,
        value: 'Option 1'
    },
    {
        label: <div> Tata Group </div>,
        value: 'Tata Group'
    },
    {
        label: <div>Option 3</div>,
        value: 'Option 3'
    },
    {
        label: <div>Option 4</div>,
        value: 'Option 4'
    },
]
const engagementOptions = [
    {
        label: <div>Option 1</div>,
        value: 'Option 1'
    },
    {
        label: <div> Tata Safari </div>,
        value: 'Tata Safari'
    },
    {
        label: <div>Option 3</div>,
        value: 'Option 3'
    },
    {
        label: <div>Option 4</div>,
        value: 'Option 4'
    },
]
