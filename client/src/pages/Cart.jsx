import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [cart, setCart] = useState([])
    const navigate = useNavigate()

    



    return (
        <>
            <div className="min-h-[70vh] flex flex-col items-center justify-center relative">
                <div className=" absolute top-6 left-10 md:left-24 xl:left-40">
                    <p className=" text-gray-400">Home / <span className=" text-gray-800">Cart</span></p>
                </div>
                <div className=" w-[80%] xl:w-[65%] ">   
                {
                    cart.length > 0 ?  
                    <div className=" mt-20 w-full flex flex-col md:flex-row bg-red-4 gap-10 min-h-[40vh] h-fit">
                        <div className=" w-full md:w-[70%] h-fit shadow-xl py-4">
                            {/* Item */}

                        </div>

                        <div className=" w-full md:w-[28%] flex justify-center border shadow-xl">
                            
                        </div>
                    </div>
                    : 
                    <div className=" py-10 flex flex-col border-2 border-white shadow-xl items-center justify-center">
                        <img src="../../src/assets/Images/cart.svg" alt="cart" className=" w-64" />
                        <h1 className="text-2xl font-medium">No Item </h1>
                        <div className=" w-full mt-2 flex justify-center">
                            <Button text="Shop now" width='w-64' height='h-10' handleonClick={ () =>  navigate('/')  } />
                        </div>
                    </div>
                }
                </div>
            </div>
        </>
    )
}

export default Cart