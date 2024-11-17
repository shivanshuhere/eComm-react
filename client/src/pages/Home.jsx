import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'



const Home = () => {
  const user = useSelector(state => state.user)

  console.log(user)


  return (
    <div >
        <Link to="register"> Akhil</Link>
        <div className=" w-40f border ">
          
        </div>
    </div>
  )
}

export default Home