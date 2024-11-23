import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
  return (
    <div className=' p-2 text-2xl text-white bg-Black rounded-full fixed right-10 bottom-10 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BiArrowToTop  /></div>
  )
}

export default BackToTop