import React, { useState, useRef } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Tabs, TabList, Tab, Progress, Textarea, TabPanel, TabPanels } from '@chakra-ui/react'
import Table from '../Table/Table'
import plus from '../../assets/Plus.svg'
import SelectInput from '../SelectInput/SelectInput'
import { RiFlag2Fill } from 'react-icons/ri'
import { BsSquareFill } from 'react-icons/bs'
import { TbCloudUpload } from 'react-icons/tb'
import { headCells, rows } from '../../data/data'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Sorter } from '../../helpers/Sorter'
import { Tag } from 'antd';
import Drawer from '../Drawer/Drawer'



const columns = [
  {
    title: "Incident",
    dataIndex: "incident",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 3
    }
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
    dataIndex: "severity",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 3
    }
  },
  {
    title: "Consulting Client",
    dataIndex: "consulting_client",
  },
  {
    title: "Assigned to",
    dataIndex: "assigned_to",


  },
  {
    title: "SLA End Time",
    dataIndex: "sla_endtime",


  },
  {
    title: "Status",
    dataIndex: "status",

    render: (_, { status }) => (
      <>
        {status.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag.toLowerCase() === 'pending') {
            color = 'yellow';
          }
          if (tag.toLowerCase() === 'resolved') {
            color = 'gray';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Attachment",
    dataIndex: "attachment",

    render: (_, { status }) => (<BiDotsVerticalRounded />),
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
  createData('INC221-1', 'Lorem ipsum dolor set amet', 1, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Open"], <BiDotsVerticalRounded />),
  createData('INC221-2', 'Lorem ipsum dolor set amet', 2, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Pending"], <BiDotsVerticalRounded />),
  createData('INC221-3', 'Lorem ipsum dolor set amet', 3, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["In Progress"], <BiDotsVerticalRounded />),
  createData('INC221-4', 'Lorem ipsum dolor set amet', 4, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Open"], <BiDotsVerticalRounded />),
  createData('INC221-5', 'Lorem ipsum dolor set amet', 5, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-6', 'Lorem ipsum dolor set amet', 6, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["In Progress"], <BiDotsVerticalRounded />)
]

const data1 = [
  createData('INC221-1', 'Lorem ipsum dolor set amet', 1, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-2', 'Lorem ipsum dolor set amet', 2, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-3', 'Lorem ipsum dolor set amet', 3, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-4', 'Lorem ipsum dolor set amet', 4, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-5', 'Lorem ipsum dolor set amet', 5, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />),
  createData('INC221-6', 'Lorem ipsum dolor set amet', 6, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', ["Resolved"], <BiDotsVerticalRounded />)
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
    <>
      <Drawer open={open} close={close} openClose={openClose} />
      <div className='px-[2.5rem] py-[1.375rem]' >


        <div className='flex md:flex-row flex-col'>

          <h1 className='text-[1.75rem] font-semibold leading-[3rem] flex-auto'>Tickets</h1>

          <div className='flex px-[0.75rem] py-[0.5rem] items-center border-[1px] shadow-md md:w-[14rem] w-[100%] rounded box-border'>

            <input type="text" placeholder="search" className=' w-full bg-transparent border-none outline-none ' />
            <IoMdSearch className=' h-[25px] w-[25px] mr-auto' />

          </div>
          <button onClick={() => open()} className='flex items-center gap-4 buttons-color text-center text-s py-[0.875rem] px-[2.5rem] md:ml-[1.5rem] mx-[0] mt-[10px] md:mt-0 rounded'>

            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8333 6.83329H6.83334V11.8333H5.16667V6.83329H0.166672V5.16663H5.16667V0.166626H6.83334V5.16663H11.8333V6.83329Z" fill="white" />
            </svg>

            <p>Add Ticket</p></button>


        </div>

        <Tabs isLazy className='flex-auto'>
          <div className='flex items-center flex-col md:flex-row mt-[2rem] mb-[3rem]'>
            <TabList>
              <Tab _selected={{ borderBottom: "solid 2px #29B475", color: "#2E2C34" }} className="text-xs text-[#84818A] font-[600] text-quarternary p-[0.4rem]" textAlign="center" mr="1rem">Active (20)</Tab>
              <Tab _selected={{ borderBottom: "solid 2px #29B475", color: "#2E2C34" }} className="text-xs text-[#84818A] font-[600] text-quarternary p-[0.4rem]" textAlign="center">Resolved (20)</Tab>
            </TabList>
            <div className='flex max-w-[100%] scrollbar-hide ml-auto md:items-center gap-x-2 overflow-scroll mt-[10px] md:mt-0 justify-start'>
              <p className='text-s font-medium whitespace-nowrap flex items-center font-[500]'>Filter by:</p>

              <SelectInput options={selectOptions[0]} />
              <SelectInput options={selectOptions[1]} />
              <SelectInput options={selectOptions[2]} />
              <SelectInput options={selectOptions[3]} />

            </div>




          </div>

          <div >
            <TabPanels >
              <TabPanel>

                <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} className="whitespace-none overflow-x-auto" />

              </TabPanel>
              <TabPanel>
                <Table columns={columns} dataSource={data1} pagination={{ pageSize: 50 }} scroll={{ y: '200px' }} className="whitespace-none" />
              </TabPanel>
            </TabPanels>
          </div>

        </Tabs>

      </div >
    </>
  )
}

export default Tickets