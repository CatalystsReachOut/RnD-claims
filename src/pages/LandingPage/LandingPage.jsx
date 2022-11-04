import React, { useState} from 'react';
import lab from "../../assets/lab-exp-photo.svg";
import SignIn from '../../componenets/SignIn/SignIn';
import SignUp from '../../componenets/SignUp/SignUp';
// import './landingpage.css'

const LandingPage = () => {

  const [toggleSign,SetToggleSign] = useState(false);

  return (
    <div className="flex flex-row">
      
        <div className="w-[50%]">
            <img src={lab} alt="A lab experiment" className='w-[100%]' />
        </div>

        <div className="flex w-[50%] justify-center items-center">
          {
            !toggleSign
            ?
            <SignIn toggleSign = {toggleSign} SetToggleSign = {SetToggleSign}/> 
            : 
            <SignUp toggleSign = {toggleSign} SetToggleSign = {SetToggleSign}/>
          }
        </div>
    </div>
  )
}

export default LandingPage