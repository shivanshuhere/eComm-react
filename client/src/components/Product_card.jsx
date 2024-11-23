import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FiEye } from "react-icons/fi";


import { GoHeart } from "react-icons/go";
import BTN from './BTN';


const Product_card = (props) => {
  const [discount,setDiscount]=useState(true)
  const [newItem,setNewItem]=useState(false)


    return (
        <>
            <div className='h-fit relative p-2 border-2 mb-4   w-72 bg-red-800 '>
                <div className='aspect-square relative bg-orange-400 rounded-md flex items-start justify-end  '>
                     {
                      newItem &&  <BTN text="New" color="bg-[#00FF66]"  /> || discount && <BTN text="-35%" color="bg-[#DB4444]"  /> 
                     }
                    <div className='h-24 w-10  mr-4 mt-2 flex justify-between  flex-col '  >
                        <p className="bg-white h-10 rounded-full  flex items-center justify-center"  >
                        <GoHeart className='text-3xl text-black font-bold' />

                        </p>
                        <p className="bg-white h-10 rounded-full flex items-center justify-center" ><FiEye  className='text-3xl text-black font-bold'  />


                        </p>
                    </div>
                </div>
                <div className='h-1/3 bg-white w-full pt-5 pl-1 '>
                    <h2 className='text-black text-xl font-semibold' >Gucci duffle bag </h2>
                    <div className='flex items-center gap-10 justify-start'>
                        <h3 className='text-red-500 font-semibold'>$960</h3>
                        <h3 className='text-gray-400  stroke-black line-through'>$1160</h3>
                    </div>
                    <div className='flex items-center mt-1'>
                        <CiStar className='text-xl' />
                        <CiStar className='text-xl' />
                        <CiStar className='text-xl' />
                        <CiStar className='text-xl' />
                        <CiStar className='text-xl' />
                        (65)</div>
                </div>
            </div>
        </>
    )
}

export default Product_card