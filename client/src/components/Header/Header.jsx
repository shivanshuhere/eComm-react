import { useState } from "react"
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";



const Header = () => {

    const [user, setUser] = useState("")

    return (
        <section className=" w-full h-14 lg:h-20 bg-sk-600 border-b-2 flex justify-center items-center border-Black">
            <div className=" w-[95%] md:w-[85%] xl:w-[80%] h-10 bg-rd-600 flex justify-between">
                <Link to='/' id="logo" className=" h-full w-fit bg-wite flex items-center">
                    <span><img src="/src/assets/Logo/Logo.svg" alt="Logo"   className=" w-8 md:w-6 " /></span>
                    <h1 className="text-2xl hidden md:block font-bold">QuickCart</h1>
                </Link>


                
                <div className=" h-full w-fit hidden md:block py-2">
                    <div className="flex justify-center items-center">
                        <ul className=" flex  md:gap-14 lg:gap-16 xl:gap-20">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                 {/* For medium screen */}

                {/* larger than md screen */}
                <div className=" h-full w-fit">
                    <div className=" flex items-center gap-2">
                    <div className=" px-2 py-2 rounded cursor-pointer hover:bg-gray-100 lg:hidden  ">
                    <RxHamburgerMenu className=" text-xl" />
                    </div>    
                    <div className="hidden lg:block">
                        <div className=" flex items-center gap-2">
                        <div id="search" className=" border-2 px-2  py-1 rounded-md flex items-center">
                            <input type="text" className=" md:w-36 lg:w-40 xl:w-48 h-full outline-none text-sm text-gray-500 " />
                            <CiSearch className=" text-2xl cursor-pointer" />
                        </div>
                        <div>
                            <Link><CiHeart className=" text-3xl" /></Link>
                        </div>
                        <div>
                            
                            <Link><CiShoppingCart className=" text-3xl" /></Link>
                        </div>
                        </div>
                    </div>
                    
                    {
                        user 
                        ? 
                        <div>User</div>
                        :
                        <div className=" flex items-center pl-3 py-1.5 rounded-lg font-medium">
                            <Link to='/register'>LogIn</Link>
                            <MdOutlineKeyboardArrowDown className=" " />
                        </div>
                    }
                    <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header