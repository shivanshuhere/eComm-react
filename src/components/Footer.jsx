import React from 'react'
import { GrSend } from "react-icons/gr";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
<div className="grid bg-black  h-1/6 p-20   text-sky-50 grid-cols-5">
<div  className='text-white  p-1 flex items-center  font-bold text-xl'  >  Exclusive </div>

<div className='text-white   p-1 flex items-center text-xl'>Support</div>
<div className='text-white   p-1 flex items-center text-xl'>Account</div>
<div className='text-white   p-1 flex items-center text-xl'>Quick Link</div>
<div className='text-white   p-1 flex items-center text-xl'>Social links</div>
<div className=" p-1  flex items-center ">Subscribe</div>
<div className=" p-1 m-1  flex items-center ">111 Bijoy sarani,Dhaka,Bangladesh.</div>
<div className=" p-1  flex items-center "> <a href="">My Account</a> </div>
<div className=" p-1  flex items-center ">Privacy Policy</div>
<div className=" p-1   flex items-center "><a href=""><TiSocialFacebook className='text-2xl mr-3' /></a>
<a href=""><CiTwitter className='text-2xl mr-3' /></a>
<a href=""><FaInstagram className='text-2xl mr-3' /></a>
<a href=""><FaLinkedinIn className='text-2xl mr-3' /></a> 



</div>
<div className=" p-1 m- flex items-center row-start-3">Get 10% off on your first order </div>
<div className=" p-1  flex items-center "><a href="">exclusive@gmail.com</a> </div>
<div className=" p-1  flex items-center "> <a href="">Login / Register</a> </div>
<div className=" p-1  flex items-center ">Term of Use </div>

 <div className='row-start-4 justify-between mt-2 mr-8 p-1  pr-4 border-2 border-white items-center rounded-sm flex'>
 <input type="text" placeholder='Enter your email  ' className='pl-2  h-full placeholder:p-2 outline-none   bg-black  rounded-sm '/><GrSend className=' flex items-center justify-center text-4xl' /></div>

<div className=" p-1  flex items-center col-start-2 row-start-4 "> <a href="">+88015-888888-999999</a> </div>
<div className=" p-1  flex items-center col-start-3 row-start-4 "><a href="">cart</a> </div>
<div className=" p-1 flex items-center col-start-4 row-start-4">FAQ</div>
<div className=" p-1 flex items-center col-start-3   "><a href="">Whislist</a> </div>
<div className=" p-1 flex items-center ">Contact</div>

<div className=" p-1 flex items-center col-start-3 "><a href="">shop</a></div>




</div>
<div className='bg-black flex text-xl pb-4 items-center justify-center'>&copy; Copyright Rimel 2022. All right reserved</div>

    </>
  )
}

export default Footer