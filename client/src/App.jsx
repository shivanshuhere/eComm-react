import { Outlet } from "react-router-dom"
import TopHeader from "./components/Header/TopHeader"
import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


const App = () => {

  const [topheaderText, setTopheaderText] = useState('')
  useEffect(() => {
    setTopheaderText("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")
  }, [])
 


  return (

    <div className=" w-full h-full">
      {
        topheaderText &&
        <TopHeader text={topheaderText} link='/register' />
      }
      <Header />
      <Outlet />


      <Footer />

    </div>
  )
}

export default App