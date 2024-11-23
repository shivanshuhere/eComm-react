import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import validator from 'validator'
import { SendLoginDataToServer } from '../../helpers/SendUserDataToServer'
import { useDispatch } from 'react-redux'
import { addUserData } from '../../redux/userSlice'
import Loader from '../../components/Loder'
/* This `Login` component is a functional component in a React application. It handles the login
functionality of a user. Here's a breakdown of what it does: */
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

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

const handleSubmit = async (e)=>{
  e.preventDefault()
  e.stopPropagation()
  setLoading(true)

  const validEmail = handleEmail(data.email)

  if (validEmail) {
    const response = await SendLoginDataToServer(data)

    setLoading(false)

    if (response?.data?.success) {
      dispatch(addUserData(response.data.data.user))
      window.localStorage.setItem('token', response.data.data.RefreshToken)
      navigate('/')
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
                <h1 className=" text-2xl font-medium xl:text-3xl ">LogIn to ClickCharm</h1>
                <p className=" text-sm text-gray-500 xl:text-base">Enter your details below</p>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-5 xl:mt-10 xl:gap-8">
                <div className='w-full flex flex-col'>
                {
                      message ? <p className="text-sm text-red-500">{message}</p> : ''
                  }
                  <input type="email" name='email' value={data.email} onChange={handleonChange} className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Email" /></div>
                  <input type="password" name='password' value={data.password} onChange={handleonChange} className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Password" />
                  <button type="submit" className=" text-white text-xl flex items-center justify-center font-medium py-1 rounded-md mt-4 bg-[#DB4444]">{loading ?<div className='flex gap-1'> <Loader /> Loading</div> : 'Login'}</button>
                </form>
                <p className=' mt-3 text-gray-600'>New User? <Link to='/register' className=' underline hover:text-black'>Create Account</Link></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login