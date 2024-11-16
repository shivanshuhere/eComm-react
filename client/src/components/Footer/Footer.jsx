import { useState } from "react"
import { GrSend } from "react-icons/gr";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";




const Footer = () => {

    const [data, setData] = useState({
        email: ''
    })

    const handleonChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // const handleEmail = (email) => {
    //     if (validator.isEmail(email)) {
    //         setMessage('')
    //         return true
    //     }
    //     else {
    //         setMessage('Enter Valid Email')
    //     }
    // }

    const handleonClick = ()=>{
        console.log(data)
    }

    return (
        <section className=" relative hidden md:block">
            <div className=" w-full h-96 bg-Black flex items-center justify-center">
            <div className=" md:w-[95%] lg:w-[85%] h-fit lg:h-56 flex flex-col gap-4 md:flex-row justify-between ">
                {/* Exclusive Section */}
                <div className=" h-full w-60 text-white flex flex-col gap-4">
                    <h1 className=" text-2xl font-bold">Exclusive</h1>
                    <p className=" text-xl font-medium">Subscribe</p>
                    <div className=" space-y-2">
                        <p className=" text-sm ">Get 10% off on your first order.</p>
                        <div className=" px-2 py-1 border border-slate-300  rounded-md flex gap-2 ">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleonChange}
                                className=" bg-transparent w-[80%] outline-none text-sm"
                                placeholder="Enter your email"
                            />
                            <div><GrSend className=" text-3xl cursor-pointer" onClick={handleonClick} /></div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className=" h-full w-60 text-white flex flex-col gap-4">
                <h1 className=" text-2xl font-bold">Support</h1>
                <p className=" text-sm">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <Link className=" text-sm">email@gmail.com</Link>
                <Link className=" text-sm">+91 70180-85058</Link>
                </div>

                {/* Account Section */}
                <div className=" h-full w-60 text-White flex flex-col gap-5">
                <h1 className=" text-2xl font-bold">Account</h1>
                <div className=" flex flex-col gap-3 text-sm">
                    <Link>My Account</Link>
                    <Link>Login / Register</Link>
                    <Link>Cart</Link>
                    <Link>Whishlist</Link>
                    <Link>Shop</Link>
                </div>
                </div>
                {/* Quicklink Section */}
                <div className=" h-full w-60 text-White flex flex-col gap-5">
                <h1 className=" text-2xl font-bold">Quick Links</h1>
                <div className=" flex flex-col gap-3 text-sm">
                    <Link>Privacy Policy</Link>
                    <Link>Term of Use</Link>
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                </div>
                </div>
                {/* Sociallink Section */}
                <div className=" h-full w-60 text-White flex flex-col gap-5">
                <h1 className=" text-2xl font-bold">Social Links</h1>
                <div className=" flex gap-4 text-2xl">
                    <Link><FaFacebookF /></Link>
                    <Link><FaTwitter /></Link>
                    <Link><AiFillInstagram /></Link>
                    <Link><FaLinkedin /></Link>
                </div>
                </div>
            </div>
            <div className=" absolute border-t-[.5px] flex items-center gap-1 justify-center border-[#313131] w-full h-10 bottom-0 text-[#5c5c5c]"><AiOutlineCopyright />
            <p>Copyright Rimel 2024. All right reserved</p></div>
            </div>
        </section>
    )
}

export default Footer