import React, { useRef ,useState} from 'react'
import Input from '../Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai'

const SignIn = ({ toggleSign, SetToggleSign }) => {

 const [isVisible,setIsVisible] = useState(false);

  const navigateTo = useNavigate();

  const showMe = useRef(null);


  const showHidePassword = () => {
    if(!isVisible){
      showMe.current.type = "text";
      setIsVisible(isVisible => !isVisible);
  }
  else{
    showMe.current.type = "password";
    setIsVisible(isVisible => !isVisible);
    
  }
}
  return (
    <div className="md:w-[70%] w-[80%] px-[36px] py-[32px]">
      <p className='text-2xl'>Sign in</p>
      <p className='text-s mt-[12px] mb-[36px]'>
        <span className='font-medium mr-1'>New user?</span>
        <Link to="" className="hover:underline text-primary" onClick={() => SetToggleSign(!toggleSign)}>Contact support</Link> </p>


      <form action="">

        <div className="input-animation">
          <Input type="email" title="Email address" name="email" id="email" />
        </div>

        <div className="input-animation my-[24px]">
          <Input type="password" title="Password" name="password" id="password" ref={showMe}  />
          <div className="absolute right-0 top-[12px] text-[1.4rem] hover:cursor-pointer " onClick={showHidePassword}>{isVisible ?<AiFillEyeInvisible/> : <AiFillEye />} </div>
        </div>
        <div className='flex flex-row justify-between items-center text-s'>
          <Link to="" className='text-primary hover:underline'>Forgot password?</Link>
          <button type='submit' className='buttons-color font-medium rounded-full  w-40 py-4' onClick={() => navigateTo("/tickets")}>Sign In</button>
        </div>
        <p className='text-extrasmall mt-[4rem] text-[var(--highlight-grey-color)]'>Protected by reCAPTCHA and subject to the Google <Link to="" className='text-primary hover:underline'>Privacy Policy</Link> and <Link to="" className='text-primary hover:underline'>Terms of Service</Link>.</p>
      </form>
    </div>
  )
}


export default SignIn