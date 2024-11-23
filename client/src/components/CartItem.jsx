import { useState } from "react"
import { FaTruckMoving } from "react-icons/fa6"
import { PiCurrencyInr } from "react-icons/pi"
import { Link } from "react-router-dom"


const CartItem = () => {
    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if(counter === 1) return
        setCounter(counter - 1)
    }

  return (
    <div className=" w-full flex flex-col gap-4 justify-between p-3">
                                <div className="w-full flex gap-2 "> 
                                    <img src="" alt="" className=" w-20 h-20 border md:w-28 md:h-28 rounded-md" />
                                    <div className=" max-w-[64%] flex flex-col gap-4 ">
                                        <div className=" w-full overflow-hidden text-gray-600  ">
                                        <p className=" w-full overflow-hidden h-6">sjdsd s sjbfshbdf sshdf sdsmfsfskdfsdf kk  fskdjfdsjd sdhfsd fssdfs d</p>
                                        <p className=" text-xs text-gray-400">Quantity</p>
                                        </div>
                                        <div className=" w-full flex items-center gap-1">
                                        <p className=" text-sm text-gray-400">Price</p>
                                        <p className=" text-xl text-gray-800 flex font-semibold items-center"><PiCurrencyInr/><span>500</span></p>
                                        </div>

                                    </div>
                                    <div className="h-fit flex flex-col gap-1">
                                        <div className=" flex items-center gap-1 ml-2 text-gray-700">
                                        <FaTruckMoving />
                                        <p className=" flex items-center"><PiCurrencyInr /> <span>50</span></p>
                                        <p className=" line-through text-green-600">Free</p>
                                        </div>
                                        <p className=" text-xs text-gray-400 text-center">Delivery</p>
                                    </div>
                                </div>
                                <div className=" w-full flex items-center gap-5">
                                    <div className=" w-fit h-full gap-3 flex items-center">
                                        <div className=" w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer text-sm " onClick={handleDecrement}><FaMinus /></div>
                                        <div className=" w-10 h-6 rounded-md border-2 flex items-center justify-center font-medium text-sm">{counter}</div>
                                        <div className=" w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer text-sm" onClick={handleIncrement}><FaPlus /></div>
                                    </div>
                                    <Link className=" text-lg font-semibold hover:text-Orange">Remove</Link>
                                </div>
                            </div>
  )
}

export default CartItem