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
    const [search, setSearch] = useState(false)
    const [cart, setCart] = useState(0)
    const [wishlist, setWishlist] = useState(0)

    const userData = useSelector(state => state.user)

    useEffect(() => {
        if (userData?.email) {
            setUser(userData.firstname)
        }
    }, [userData])
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setShow(false)
            setSearch(false)
            setColor(false)
        }
    })

    const handleLogout = async () => {
        const response = await logoutUser()
        if (response?.data?.success) {
            setUser(" ")
            window.localStorage.clear()
            window.location.reload()
        }
    }


    return (
        <section className=" w-full h-14 lg:h-20 bg-sk-600 border-b-2 flex justify-center items-center border-Black ">
            <div className=" relative w-[95%] md:w-[85%] xl:w-[80%] h-10 bg-rd-600 flex justify-between">
                <Link to='/' id="logo" className=" h-full w-fit bg-wite flex items-center">
                    <span><img src="/src/assets/Logo/Logo.svg" alt="Logo" className=" w-8 md:w-6 " /></span>
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
                    <div className=" flex items-center  gap-2">

                        <div id="search" className={` ${search && 'border-2 border-black'}  px-2  py-1 rounded-md flex items-center transition-all duration-75`}>
                            {
                                search &&
                                <input type="text" placeholder="What are you looking for?" className=" md:w-36 lg:w-40 xl:w-48 h-full outline-none text-sm text-gray-500 bg-transparent " />
                            }
                            <CiSearch className=" text-2xl cursor-pointer" onClick={() => setSearch(!search)} />
                        </div>

                        <div className=" relative px-2 py-2 rounded cursor-pointer hover:bg-gray-100 md:hidden  " onClick={() => setShow(!show)}>
                            <RxHamburgerMenu className=" text-xl" />
                            {
                                show &&
                                <div className=" absolute z-20 top-12 right-0 w-44 bg-white border  shadow-lg rounded-lg px-2 py-1">
                                    <ul className="">
                                        {
                                            user ?
                                                <>
                                                    <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><FaRegUserCircle />{user}</Link>
                                                    <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><GiShoppingBag />Orders</Link>
                                                    <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><IoSettingsSharp />Setting</Link>
                                                    <Link className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"
                                                        onClick={handleLogout}><IoLogOut />Logout</Link>
                                                </>
                                                :
                                                <>
                                                    <Link to={'/login'} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><FaRegUserCircle />Login</Link>
                                                    <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><IoSettingsSharp />Setting</Link>
                                                </>

                                        }
                                    </ul>
                                </div>
                            }
                        </div>


                        <div className="hidden lg:block">
                            <div className=" flex items-center gap-2">
                                <Link to='/wishlist' className=" relative size-fit">
                                    {
                                        wishlist > 0 &&
                                        <div className=" absolute bg-Orange w-4 h-4 rounded-full top-0 right-0 text-xs text-white flex items-center justify-center ">{wishlist}</div>
                                    }
                                    <span><CiHeart className=" text-3xl" /></span>
                                </Link>
                                <Link to='/cart' className=" relative size-fit">
                                    {
                                        cart > 0 &&
                                        <div className=" absolute bg-Orange w-4 h-4 rounded-full top-0 right-0 text-xs text-white flex items-center justify-center ">{cart}</div>
                                    }
                                    <span><CiShoppingCart className=" text-3xl" /></span>
                                </Link>
                            </div>
                        </div>

                        {
                            user
                                ?
                                <div className={`md:flex items-center px-3 py-1.5 rounded-lg font-medium gap-1 hidden  cursor-pointer hover:text-white hover:bg-Orange transition-all ${color && 'text-white bg-Orange'}`} onClick={() => {
                                    setShow(!show)
                                    setColor(!color)
                                }}>
                                    <FaRegUserCircle />
                                    {user}
                                </div>
                                :
                                <Link to={'/login'} className=" md:flex hidden items-center pl-3 py-1.5 rounded-lg font-medium"  >
                                    <p>LogIn</p>
                                    <MdOutlineKeyboardArrowDown className=" text-lg" />
                                </Link>
                        }
                        <div></div>
                    </div>
                </div>
                {
                    show &&
                    <div className=" absolute z-20 top-12 right-0 w-44 bg-white border hidden md:block shadow-lg rounded-lg px-2 py-1">
                        <ul className="">
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><FaUser />Profile</Link>
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><GiShoppingBag />Orders</Link>
                            <Link to={''} className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"><IoSettingsSharp />Setting</Link>
                            <Link className=" flex items-center gap-1 px-2 py-1 rounded-md hover:text-white hover:bg-[#e75353] transition-all"
                                onClick={handleLogout}><IoLogOut />Logout</Link>
                        </ul>
                    </div>
                }
            </div>
        </section>
    )
}

export default Header