import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataFromServer } from "../helpers/SendUserDataToServer"
import { useEffect } from "react"
import { addUserData } from "../redux/userSlice"



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


  return (
    <div >
        <Link to="register"> Akhil</Link>
        <div className=" w-40 border ">
          
        </div>
    </div>
  )
}

export default Home