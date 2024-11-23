import React from 'react'


export const Cart_total = () => {
  return (
    <>
      <div className=' w-[30%] border-2  py-6 flex items-center px-6 justify-around flex-col border-gray-900 rounded-md'>
        <div className='text-3xl font-semibold flex items-start mt-4 py-4 w-full '> Cart Total</div>
        <div className='w-full  flex items-center  gap-3 justify-between flex-col'>
             <div className='border-b-2 border-gray-500  w-full flex items-center justify-between   text-2xl py-3 '> <p>Subtotal:</p><span>$1780</span></div>
             <div className='border-b-2 border-gray-500  w-full flex items-center justify-between   text-2xl py-3 '> <p>Shiping:</p><span>$1780</span></div>
             <div className='  w-full flex items-center justify-between   text-2xl py-3 '> <p>Total:</p><span>$1780</span></div>

        </div>
        <button className='bg-red-500 px-20 py-6  text-xl mt-4   rounded-md text-white font-bold p-4'>Procees to checkout</button>

      </div>
    </>
  )
}
