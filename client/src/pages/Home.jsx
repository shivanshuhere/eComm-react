
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataFromServer } from "../helpers/SendUserDataToServer"
import { useEffect } from "react"
import { addUserData } from "../redux/userSlice"
import BackToTop from "../components/BackToTop"



const Home = () => {

  const dispatch = useDispatch()

  const fetchUser = async () => {
    const response = await getUserDataFromServer()
    dispatch(addUserData(response?.data.user))
  }

  useEffect(() => {
    fetchUser()
  }, [ ])

  const user = useSelector(state => state.user)

  console.log(user)


  return (
    <div className=" w-full h-[100vh]" >
        <Link to="register"> Akhil</Link>
        <div className=" w-40  border ">
          
        </div>
        <BackToTop />
    </div>
  )
}

export default Home