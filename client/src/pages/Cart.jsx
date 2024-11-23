import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CartSkeleton from "../components/CartSkeleton";
import { useSelector } from "react-redux";

const Cart = () => {

    const user = useSelector(state => state.user)

    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {

            setIsLoading(false)
        }, 2000);
    }, [])





    return (
        <>
            <div className="min-h-[70vh] flex flex-col items-center justify-center relative">
                <div className=" absolute top-6 left-10 md:left-24 xl:left-40">
                    <p className=" text-gray-400">Home / <span className=" text-gray-800">Cart</span></p>
                </div>
                <div className=" w-[80%] xl:w-[65%] ">
                    {
                        user.email
                            ?
                            isLoading
                                ?
                                <>

                                    <div className=" mt-20 w-full flex flex-col md:flex-row bg-red-4 gap-10 min-h-[40vh] h-fit">
                                        <div className=" w-full md:w-[70%] h-fit shadow-xl py-4">
                                            {
                                                Array(5).fill(0).map((_, index) => (
                                                    <CartSkeleton key={index} />
                                                ))
                                            }

                                        </div>

                                        <div className=" p-3 w-full md:w-[28%] h-fit flex justify-center border shadow-xl">

                                            <div className="flex flex-col bg-slte-300 w-full h-64 animate-pulse rounded-xl p-4 gap-4">
                                                <div className="bg-slate-400/50 w-full h-32 animate-pulse rounded-md" />
                                                <div className="flex flex-col gap-2">
                                                    <div className="bg-slate-400/50 w-full h-4 animate-pulse rounded-md" />
                                                    <div className="bg-slate-400/50 w-4/5 h-4 animate-pulse rounded-md" />
                                                    <div className="bg-slate-400/50 w-full h-4 animate-pulse rounded-md" />
                                                    <div className="bg-slate-400/50 w-2/4 h-4 animate-pulse rounded-md" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                                :

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
                                            <Button text="Shop now" width='w-64' height='h-10' handleonClick={() => navigate('/')} />
                                        </div>
                                    </div>

                            :
                            <div className=" py-10 flex flex-col border-2 border-white shadow-xl items-center justify-center">
                                <img src="../../src/assets/Images/Login_cart.svg" alt="login_cart" className=" w-64" />
                                <h1 className="text-lg font-medium">Login to see the items you added previously </h1>
                                <div className=" w-full mt-2 flex justify-center">
                                    <Button text="Login now" width='w-64' height='h-10' handleonClick={() => navigate('/login')} />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart