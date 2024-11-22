import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { logoutUser } from "../../helpers/SendUserDataToServer";




const Header = () => {

    const [user, setUser] = useState("")
    const [show, setShow] = useState(false)
    const [color, setColor] = useState(false)

    const userData = useSelector(state => state.user)

    useEffect(() => {
       if(userData?.email){
        setUser(userData.firstname)
       }
    }, [userData])
    
    const handleLogout = async () => {
        const response = await logoutUser()
        if(response?.data?.success){
            setUser(" ")
            window.localStorage.clear()
            window.location.reload()
        }
    }


    return (
        <section className=" w-full h-14 lg:h-20 bg-sk-600 border-b-2 flex justify-center items-center border-Black ">
            <div className=" relative w-[95%] md:w-[85%] xl:w-[80%] h-10 bg-rd-600 flex justify-between">
                <Link to='/' id="logo" className=" h-full w-fit bg-wite flex items-center">
                    <span><img src="/src/assets/Logo/Logo.svg" alt="Logo"   className=" w-8 md:w-6 " /></span>
                    <h1 className="text-2xl hidden md:block font-bold">QuickCart</h1>
                </Link>


                
                <div className=" h-full w-fit hidden md:block py-2">
                    <div className="flex justify-center items-center">
                        <ul className=" flex  md:gap-14 lg:gap-16 xl:gap-20">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
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
                            <input type="text" className=" md:w-36 lg:w-40 xl:w-48 h-full outline-none text-sm text-gray-500 bg-transparent " />
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
                        <div className={`flex items-center px-3 py-1.5 rounded-lg font-medium gap-1 cursor-pointer hover:text-white hover:bg-Orange transition-all ${color && 'text-white bg-Orange'}`} onClick={()=>{
                            setShow(!show)
                            setColor(!color)
                            }}>
                            <FaRegUserCircle />
                            {user}
                        </div>
                        :
                        <Link to={'/login'} className=" flex items-center pl-3 py-1.5 rounded-lg font-medium"  >
                            <p>LogIn</p>
                            <MdOutlineKeyboardArrowDown className=" text-lg" />
                        </Link>
                    }
                    <div></div>
                    </div>
                </div>
                {
                    show &&
                    <div className=" absolute z-20 top-12 right-0 w-44 bg-white border shadow-lg shadow-gray-700 rounded-lg px-2 py-1">
                        <ul className="">
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><FaUser />Profile</Link>
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><GiShoppingBag />Orders</Link>
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><IoSettingsSharp />Setting</Link>
                            <Link  className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"
                            onClick={handleLogout}><IoLogOut />Logout</Link>
                        </ul>
                    </div>
                }
            </div>
        </section>
    )
}

export default Header