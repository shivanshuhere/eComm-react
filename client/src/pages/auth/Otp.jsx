// import {Link} from 'react-router-dom'
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SendRegisterDataToServer } from "../../helpers/SendUserDataToServer"

const Otp = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const data = location?.state
  
  const [otp, setOtp] = useState({
    otp: ""
  })

  const handleonChange = (e)=>{
      const {name, value} = e.target

      setOtp((prev)=>{
        return{
          ...prev,
          [name]: value
        }
      })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    e.stopPropagation()

    if(otp.otp === window.localStorage.getItem('otp')){
      const response = await SendRegisterDataToServer(data)
      console.log(response?.data)
      if(response?.data?.success){
        window.localStorage.clear();
        navigate('/login')
      }
    }


  }

  return (
    <section className=" w-full">
      <div className=" w-full h-fit py-8 md:py-20">
        <div className=" w-full h-full flex flex-col-reverse md:flex-row">
          <div className=" flex-1 "><img  src="/src/assets/Images/RegisterPagePng.png" alt="" /></div>
          <div className="flex-1 px-10 md:py-5 xl:py-14 2xl:py-20 bg-sky100">
              <div className=" w-[90%] sm:w-[70%] xl:w-[50%] sm:mx-auto lg:mt-10 h-96 overflow-hidden ">
                <h1 className=" text-2xl font-medium xl:text-3xl ">Otp Verification</h1>
                <p className=" text-sm text-gray-500 xl:text-base">Enter Otp below</p>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-5 xl:mt-10 xl:gap-8">
                  <input type="text" name="otp" value={otp.otp} onChange={handleonChange} className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " maxLength={6} placeholder="Otp" />
                  <button type="submit" className=" text-white text-xl font-medium py-1 rounded-md mt-4 bg-[#DB4444]">Verify</button>
                </form>
                {/* <p className=' mt-3 text-gray-600'>New User? <Link to='/register' className=' underline hover:text-black'>Create Account</Link></p> */}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Otp