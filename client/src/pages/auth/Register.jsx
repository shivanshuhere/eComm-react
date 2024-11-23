import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import validator from 'validator'
import { SendOtpDataToServer } from '../../helpers/SendUserDataToServer'
import Loader from '../../components/Loder'
const Register = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })

  const handleonChange = (e)=>{
      const {name, value} = e.target

      setData((prev)=>{
        return{
          ...prev,
        [name] : value
        }
        
      })
  }

  const handleEmail = (email) => {
    if (validator.isEmail(email)) {
      setMessage('')
      return true
    }
    else {
      setMessage('Enter Valid Email')
    }
  }

  const generateOtp = ()=>{
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    return generatedOtp
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    e.stopPropagation()
    setLoading(true)

    const res = handleEmail(data.email)
    const otp = generateOtp()

    if(res){
      window.localStorage.setItem('otp', otp )
      const response = await SendOtpDataToServer({
        email: data.email,
        otp: otp
      })
      
      if(response?.data?.success){
        setLoading(false)
        navigate('/verify-otp', {state: data})    
       }
       setData(false)
    }
  }

  return (
    <section className=" w-full">
      <div className=" w-full h-fit py-8 md:py-20">
        <div className=" w-full h-full flex flex-col-reverse md:flex-row">
          <div className=" flex-1 "><img  src="/src/assets/Images/RegisterPagePng.png" alt="" /></div>
          <div className="flex-1 px-10 md:py-5 xl:py-14 2xl:py-20 bg-sky100">
              <div className=" w-[90%] sm:w-[70%] xl:w-[50%] sm:mx-auto lg:mt-10 h-96 overflow-hidden ">
                <h1 className=" text-2xl font-medium xl:text-3xl ">Create an account</h1>
                <p className=" text-sm text-gray-500 xl:text-base">Enter your details below</p>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-5 xl:mt-10 xl:gap-8">
                  <div className=" w-full flex gap-2 ">
                    <input type="text" name='firstname' className=" w-40 xl:w-60 sm:w-48 bg-transparent text-gray-500 placeholder:text-sm border-b-2 outline-none " placeholder="First Name" value={data.firstname} onChange={handleonChange} required />
                    <input type="text" name='lastname' className="  bg-transparent text-gray-500 placeholder:text-sm border-b-2 outline-none " placeholder="Last Name" value={data.lastname} onChange={handleonChange} />
                  </div>
                  <div className='w-full flex flex-col'>
                  {
                    message ? <p className="text-sm text-red-500">{message}</p> : ''
                  }
                  <input type="email" name='email' className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Email" value={data.email} onChange={handleonChange} required /> </div>
                  <input type="password" name='password' className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Password" value={data.password} onChange={handleonChange} required />
                  <button type="submit" className=" text-white text-xl font-medium h-12 flex items-center justify-center rounded-md mt-4 bg-[#DB4444]">{loading ?<div className='flex gap-1'> <Loader /> Loading</div> : 'Create Account'}</button>
                </form>
                <p className=' mt-3 text-gray-600'>Already have account? <Link to='/login' className=' underline hover:text-black'>login</Link></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register