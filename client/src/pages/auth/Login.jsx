import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <section className=" w-full">
      <div className=" w-full h-fit py-8 md:py-20">
        <div className=" w-full h-full flex flex-col-reverse md:flex-row">
          <div className=" flex-1 "><img  src="/src/assets/Images/RegisterPagePng.png" alt="" /></div>
          <div className="flex-1 px-10 md:py-5 xl:py-14 2xl:py-20 bg-sky100">
              <div className=" w-[90%] sm:w-[70%] xl:w-[50%] sm:mx-auto lg:mt-10 h-96 overflow-hidden ">
                <h1 className=" text-2xl font-medium xl:text-3xl ">LogIn to ClickCharm</h1>
                <p className=" text-sm text-gray-500 xl:text-base">Enter your details below</p>
                <form action="" className=" flex flex-col gap-4 mt-5 xl:mt-10 xl:gap-8">
                  {/* <div className=" w-full flex gap-2 ">
                    <input type="text" className=" w-40 xl:w-60 sm:w-48 bg-transparent text-gray-500 placeholder:text-sm border-b-2 outline-none " placeholder="First Name" />
                    <input type="text" className="  bg-transparent text-gray-500 placeholder:text-sm border-b-2 outline-none " placeholder="Last Name" />
                  </div> */}
                  <input type="email" className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Email" />
                  <input type="password" className=" text-gray-500 bg-transparent placeholder:text-sm border-b-2 outline-none " placeholder="Password" />
                  <button type="submit" className=" text-white text-xl font-medium py-1 rounded-md mt-4 bg-[#DB4444]">Login</button>
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