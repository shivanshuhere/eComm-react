import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiHeadphonesThin } from "react-icons/pi";
import { VscGame } from "react-icons/vsc";


const PanelCategory = (props) => {
  return (
    <div className='w-full h-96 bg-orange-500 py-1 px-10'>
        <div className= 'title-box flex items-center gap-3'>
            <div className='box h-10 w-5 bg-red-600 rounded-md'>

            </div>
            <p className='text-red-500 font-semibold'>Categories</p>
        </div>
        <div className='navCategorie w-full  flex items-center justify-between px-8 h-14 mt-5 '>
           <div className='nav-text text-3xl font-semibold text-white  '>Browse By Category</div>
           <div className='btns flex  items-center gap-2 justify-center '><IoIosArrowRoundBack className='text-3xl text-black bg-white rounded-full  ' />
           <IoIosArrowRoundForward className='text-3xl text-black  bg-white rounded-full' />
           </div>
        </div>
        <div className='mainIcon h-48 flex  items-center justify-around mt-4 w-full bg-white'>

            <div className='h-32 w-44 border-2 border-gray-400 rounded-md  flex items-center justify-center gap-3 text-black flex-col'><SlScreenSmartphone          className='text-6xl  text-black  ' /> Phones</div>
            <div className='h-32 w-44 border-2 border-gray-400 rounded-md  flex items-center justify-center gap-3 text-black flex-col'><HiOutlineComputerDesktop    className='text-6xl  text-black  ' /> Computers</div>
            <div className='h-32 w-44 border-2 border-gray-400 rounded-md  flex items-center justify-center gap-3 text-black flex-col'><BsSmartwatch                className='text-6xl  text-black  ' /> SmartWatch</div>
            <div className={`h-32 w-44 border-2 border-gray-400 rounded-md ${props.textcolor} ${props.selected}  flex items-center justify-center gap-3 text-black flex-col`}><CiCamera                    className={`text-6xl  ${props.textcolor} `} /> Camera</div>
            <div className='h-32 w-44 border-2 border-gray-400 rounded-md  flex items-center justify-center gap-3 text-black flex-col'><PiHeadphonesThin            className='text-6xl  text-black  ' /> HeadPhones</div>
            <div className='h-32 w-44 border-2 border-gray-400 rounded-md  flex items-center justify-center gap-3 text-black flex-col'><VscGame                     className='text-6xl  text-black  ' /> Gaming</div>

       
        
       
      
        


        </div>
    </div>
  )
}

export default PanelCategory