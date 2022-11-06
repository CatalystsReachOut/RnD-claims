import React, { useState } from 'react';
import lab from "../../assets/lab-exp-photo.svg";
import SignIn from '../../componenets/SignIn/SignIn';
import SignUp from '../../componenets/SignUp/SignUp';
// import './landingpage.css'

const LandingPage = () => {

  const [toggleSign, SetToggleSign] = useState(false);

  return (
    <div className="flex flex-col  md:flex-row">

      <div className="md:w-[50%] w-[100%] h-[100%]">
        <img src={lab} alt="A lab experiment" className='object-cover object-center w-[100%]' />
      </div>

      <div className="flex md:w-[50%] w-[100%] py-[60px] md:p-0 justify-center items-center">
        {
          !toggleSign
            ?
            <SignIn toggleSign={toggleSign} SetToggleSign={SetToggleSign} />
            :
            <SignUp toggleSign={toggleSign} SetToggleSign={SetToggleSign} />
        }
      </div>
    </div>
  )
}

export default LandingPage