import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Tables from '../Tables/Tables'

const Tickets = () => {
    return (
        <div className='px-[2.5rem] py-[1.375rem]'>
            <div className='flex'>

                <h1 className='text-[1.75rem] font-semibold leading-[3rem] flex-auto'>Tickets</h1>

                <div className='flex px-[1rem] py-[0.875rem] items-center border-[1px] shadow-md w-[14rem] rounded box-border'>

                    <input type="text" placeholder="search" className='bg-transparent border-none outline-none ' />
                    <IoMdSearch className='w-full mx-[0.625rem]' />

                </div>
                <button className='buttons-color text-center text-s py-[0.875rem] px-[2.5rem] ml-[1.5rem] rounded'>
                    <span className='text-[1rem] mr-[8px]'>
                        +
                    </span> Add Ticket</button>

            </div>

            <div className='flex items-center mt-[2rem] mb-[3rem]'>
                <Tabs isLazy className='flex-auto'>
                    <TabList>
                        <Tab _selected={{borderBottom:"solid 2px #29B475",color:"#84818A"}} className="text-xs text-quarternary p-[0.4rem]" textAlign="center" mr="1rem">Active</Tab>
                        <Tab _selected={{borderBottom:"solid 2px #29B475",color:"#84818A"}} className="text-xs text-quarternary p-[0.4rem]" textAlign="center">Resolved</Tab>
                    </TabList>
                </Tabs>
                <div className='flex items-center gap-x-2'>
                    <p className='text-s font-medium'>Filter by:</p>
                    <select placeholder='Priority' name='Priority' className='select-buttons'>
                      <option value='option'>Priority</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    <select placeholder='select option' name="Severity" className='select-buttons'>
                    <option value='option'>Severity</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    <select placeholder='select option' name='Client' className='select-buttons'>
                    <option value='option'>Client</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    <select placeholder='select option' name='Assigned to' className='select-buttons'>
                    <option value='option'>Assigned to</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    <select placeholder='select option' name='Status' className='select-buttons'>
                    <option value='option'>Status</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                </div>

            </div>
                <Tables/>
        </div>
    )
}

export default Tickets