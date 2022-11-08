import React, { useState, useRef } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Tabs, TabList, Tab, Progress, Textarea, TabPanel, TabPanels } from '@chakra-ui/react'
import Table from '../Table/Table'
import { GrClose } from 'react-icons/gr'
import plus from '../../assets/Plus.svg'
import SelectInput from '../SelectInput/SelectInput'
import CustomSelect from '../CustomSelect/CustomSelect'
import { RiFlag2Fill } from 'react-icons/ri'
import { BsSquareFill } from 'react-icons/bs'
import { TbCloudUpload } from 'react-icons/tb'
import { headCells, rows } from '../../data/data'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Sorter } from '../../helpers/Sorter'




const columns = [
  {
    title: "Incident",
    dataIndex: "incident"
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 3
    }
  },
  {
    title: "Priority",
    dataIndex: "priority",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    }
  },
  {
    title: "Severity",
    dataIndex: "severity"
  },
  {
    title: "Consulting Client",
    dataIndex: "consulting_client"
  },
  {
    title: "Assigned to",
    dataIndex: "assigned_to"
  },
  {
    title: "SLA End time",
    dataIndex: "sla_endtime"
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Attachment",
    dataIndex: "attachment"
  },
];

function createData(incident, description, priority, severity, consulting_client, assigned_to, sla_endtime, status, attachments) {
  return {
      incident,
      description,
      priority,
      severity,
      consulting_client,
      assigned_to,
      sla_endtime,
      status,
      attachments
  };
}


const data = [
  createData('INC221-1', 'Lorem ipsum dolor set amet', 1, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
  createData('INC221-2', 'Lorem ipsum dolor set amet', 2, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
  createData('INC221-3', 'Lorem ipsum dolor set amet', 3, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
  createData('INC221-4', 'Lorem ipsum dolor set amet', 4, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
  createData('INC221-5', 'Lorem ipsum dolor set amet', 5, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
  createData('INC221-6', 'Lorem ipsum dolor set amet', 6, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />)
]

const Tickets = () => {

  const [add, setAdd] = useState(false)
  const openClose = useRef(false);

  const open = () => {
    openClose.current.style.display = "block";
  }

  const close = (e) => {

    if (e.target.matches("#close-button")) {

      openClose.current.style.display = "none";
    }
  }

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
      bgcolor: "var(--highlight-green-color)"
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

  const selectOptions = [
    {
      name: "Priority",
      inputs: [
        {
          label: "Priority",
          value: 'null',
          selected: true
        },
        {
          label: "1",
          value: '1',
          selected: false
        },
        {
          label: "2",
          value: '2',
          selected: false
        },
        {
          label: "3",
          value: '3',
          selected: false
        },
      ]
    },

    {
      name: "Severity", inputs: [
        {
          label: "Severity",
          value: "null",
          selected: true
        },
        {
          label: "Urgent",
          value: "Urgent",
          selected: false
        },
        {
          label: "High",
          value: "High",
          selected: false
        },
        {
          label: "Normal",
          value: "Normal",
          selected: false
        },
        {
          label: "Low",
          value: "Low",
          selected: false
        }]
    },

    {
      name: "Client", inputs: [
        {
          label: "Client",
          value: "null",
          selected: true
        },
        {
          label: "Option1",
          value: "Option1",
          selected: false
        },
        {
          label: "Option2",
          value: "Option2",
          selected: false
        },
        {
          label: "Option3",
          value: "Option3",
          selected: false
        },
        {
          label: "Option4",
          value: "Option4",
          selected: false
        }
      ]
    },

    {
      name: "Assigned to", inputs: [
        {
          label: "Assigned to",
          value: "null",
          selected: true
        },
        {
          label: "Option1",
          value: "Option1",
          selected: false
        },
        {
          label: "Option2",
          value: "Option2",
          selected: false
        },
        {
          label: "Option3",
          value: "Option3",
          selected: false
        },
        {
          label: "Option4",
          value: "Option4",
          selected: false
        }
      ]
    },
    {
      name: "Status", inputs: [
        {
          label: "Status",
          value: "null",
          selected: true
        },
        {
          label: "Option1",
          value: "Option1",
          selected: false
        },
        {
          label: "Option2",
          value: "Option2",
          selected: false
        },
        {
          label: "Option3",
          value: "Option3",
          selected: false
        },
        {
          label: "Option4",
          value: "Option4",
          selected: false
        }
      ]
    },

    {
      name: "Status", inputs: [
        {
          label: "Status",
          value: "null",
          selected: true
        },
        {
          label: 1,
          value: 1,
          selected: false
        },
        {
          label: 2,
          value: 2,
          selected: false
        },
        {
          label: 3,
          value: 3,
          selected: false
        },
        {
          label: 4,
          value: 4,
          selected: false
        }
      ]
    },
  ]




  return (
    <div className='px-[2.5rem] py-[1.375rem]' >
      <div className='flex md:flex-row flex-col'>

        <h1 className='text-[1.75rem] font-semibold leading-[3rem] flex-auto'>Tickets</h1>

        <div className='flex px-[1rem] py-[0.875rem] items-center border-[1px] shadow-md md:w-[14rem] w-[100%] rounded box-border'>

          <input type="text" placeholder="search" className=' w-full bg-transparent border-none outline-none ' />
          <IoMdSearch className='mx-[0.625rem]' />

        </div>
        <button onClick={() => open()} className='flex items-center gap-4 buttons-color text-center text-s py-[0.875rem] px-[2.5rem] md:ml-[1.5rem] mx-[0] mt-[10px] md:mt-0 rounded'>

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8333 6.83329H6.83334V11.8333H5.16667V6.83329H0.166672V5.16663H5.16667V0.166626H6.83334V5.16663H11.8333V6.83329Z" fill="white" />
          </svg>

          <p>Add Ticket</p></button>

        <form style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          width: "500px",
          display: "none",
          padding: "3rem 2.25rem",
          zIndex: "999",
          background: "#fff",
          borderTop: "1px solid #e9e9e9",
          minHeight: "100vh",
          transition: "0.5s"
        }} ref={openClose} id="formContainer" onSubmit={(e) => e.preventDefault()}>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-[1.75rem] mb-[1rem]'>Name of the ticket</h1>
            <GrClose onClick={(e) => close(e)} className="cursor-pointer" id='close-button' />
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
            <CustomSelect options={severityOptions} />

          </div>
          <div className='flex items-center mt-[2rem] mb-[1.5rem]'>
            <div className='text-s text-secondary w-[180px]'>
              Priority
            </div>
            <CustomSelect options={priorityOptions} />
          </div>
          <div className='flex items-center my-[18px]'>
            <div className='text-s text-secondary w-[180px]'>
              Consulting Firm
            </div>

            <div className='flex-1'>
              <CustomSelect options={firmOptions} />
            </div>
          </div>

          <div className='flex items-center my-[18px]'>
            <div className='text-s text-secondary w-[180px]'>
              End Client
            </div>

            <div className='flex-1'>
              <CustomSelect options={endClientOptions} />
            </div>
          </div>

          <div className='flex items-center my-[18px]'>
            <div className='text-s text-secondary w-[180px]'>
              Engagement
            </div>

            <div className='flex-1'>
              <CustomSelect options={engagementOptions} />
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
            <p className='font-Manrope leading-6 font-medium text-[17px] text-primary'>Upload Media here</p>
            <p className='font-Manrope leading-4 text-[0.75em] font-medium text-secondary'>Image can be size of 512 PX by 512 PX Only</p>
          </div>


          <div className="mt-[2rem]">
            <button type="button" className="px-4 py-2 mr-[0.75rem] border-[#EBEAED] border-[1px] border-solid rounded text-s" id="close-button" onClick={(e) => close(e)}>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-primary text-[#fff]  border-solid rounded text-s'>Save Changes</button>
          </div>

        </form>

      </div>

      <Tabs isLazy className='flex-auto'>
        <div className='flex items-center flex-col md:flex-row mt-[2rem] mb-[3rem]'>
          <TabList>
            <Tab _selected={{ borderBottom: "solid 2px #29B475", color: "#84818A" }} className="text-xs text-quarternary p-[0.4rem]" textAlign="center" mr="1rem">Active (20)</Tab>
            <Tab _selected={{ borderBottom: "solid 2px #29B475", color: "#84818A" }} className="text-xs text-quarternary p-[0.4rem]" textAlign="center">Resolved (20)</Tab>
          </TabList>
          <div className='flex max-w-[100%] scrollbar-hide md:items-center gap-x-2 overflow-scroll mt-[10px] md:mt-0 justify-start'>
            <p className='text-s font-medium whitespace-nowrap flex items-center'>Filter by:</p>


            <SelectInput options={selectOptions[0]} />
            <SelectInput options={selectOptions[1]} />
            <SelectInput options={selectOptions[2]} />
            <SelectInput options={selectOptions[3]} />

          </div>




        </div>
        <TabPanels  >
          <TabPanel>
            <Table columns={columns} dataSource={data} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>

      </Tabs>

    </div >
  )
}

export default Tickets