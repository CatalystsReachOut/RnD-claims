import React from 'react'
import { Link } from 'react-router-dom'
import {
    PinInput,
    PinInputField,
  } from "@chakra-ui/pin-input"

const SignUp = ({toggleSign,SetToggleSign}) => {
  return (
    <div className="md:w-[70%] w-[80%]  px-[36px] py-[32px]">
        <p className='text-2xl text-ternary mb-[12px]'>Verify</p>
        <p className='text-ternary text-s font-medium'>Please enter the authentication code</p>
            <div className="grid grid-cols-4 gap-x-[1.5rem]">
                <PinInput >
                      <PinInputField className='pin-field'/>
                      <PinInputField className='pin-field' />
                      <PinInputField className='pin-field'/>
                      <PinInputField className='pin-field'/>
                    </PinInput>
            </div>

            <div className='flex flex-row justify-between items-center mb-[2.5rem]'>
                <Link to="/" className='text-secondary hover:underline text-s' onClick={() => SetToggleSign(!toggleSign)}>Back</Link>
                <p className='text-primary font-semibold text-s'>Resend Code</p>
             </div>

             <button type='submit' className='w-full buttons-color rounded-full p-4'>Verify</button>
             
    </div>
  )
}

export default SignUp