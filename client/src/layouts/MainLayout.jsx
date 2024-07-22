
import MainNavbar from '../components/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <MainNavbar/>
      <Outlet/>
      <Footer/>       
    </div>
  )
}

export default MainLayout