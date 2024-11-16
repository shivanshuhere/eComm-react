import { Link } from "react-router-dom"

const TopHeader = (props) => {
  return (
    <section className=" h-10 w-full border bg-Black flex items-center justify-center ">
      <div className=" text-[8px] md:text-[12px]  lg:text-sm  text-White "> {props.text} <Link className=" ml-3 underline font-semibold " to={props.link}>Shop Now</Link> </div>
    </section>
  )
}

export default TopHeader