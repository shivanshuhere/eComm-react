import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
import CartSkeleton from "../components/CartSkeleton";
import { useSelector } from "react-redux";

const Wishlist = () => {

    const user = useSelector(state => state.user)

    const [wishlist, setWishlist] = useState([])
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
                    <p className=" text-gray-400">Home / <span className=" text-gray-800">Wishlist</span></p>
                </div>
                <div className=" w-[80%] xl:w-[65%] ">
                    {
                        user.email
                            ?
                            isLoading
                                ?
                                <>

                                    <div className=" mt-20 w-full flex flex-col md:flex-row bg-red-4 gap-10 min-h-[40vh] h-fit">
                                        <div className=" w-full h-fit shadow-xl py-4">
                                            {
                                                Array(5).fill(0).map((_, index) => (
                                                    <CartSkeleton key={index} />
                                                ))
                                            }

                                        </div>
                                    </div>
                                </>
                                :

                                wishlist.length > 0 ?
                                    <div className=" mt-20 w-full flex flex-col md:flex-row bg-red-4 gap-10 min-h-[40vh] h-fit">
                                        <div className=" w-full md:w-[70%] h-fit shadow-xl py-4">
                                            {/* Item */}

                                        </div>
                                    </div>
                                    :
                                    <div className=" py-10 flex flex-col border-2 border-white shadow-xl items-center justify-center">
                                        <img src="../../src/assets/Images/wishlist_cart.svg" alt="cart" className=" w-64" />
                                        <h1 className="text-2xl font-medium">Empty Wishlist </h1>
                                        <div className=" w-full mt-2 flex justify-center">
                                            <p className=" text-sm text-gray-500">You have no items in your wishlist. Start adding!</p>
                                        </div>    
                                    </div>

                            :
                            <Navigate to={'/login'} />                    }
                </div>
            </div>
        </>
    )
}

export default Wishlist