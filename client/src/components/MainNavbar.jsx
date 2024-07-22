import { Link, NavLink } from "react-router-dom";
import { Button } from "./Buttons";
import { navItems } from "../constants";

const MainNavbar = () => {
  return (
    <div className=" flex justify-between items-center w-full px-20 py-5 border-b border-solid border-[#F2F4F7] bg-white ">
      <Link to="/" className="text-3xl font-black leading-9 text-black ">Logo</Link>
      <NavMenu/>
      <div className="flex items-center gap-3 ">
        <Button variant="outline" >sign in</Button>
        <Button variant="default" >create account</Button>
      </div>
    </div>
  )
}


const NavMenu = () =>{
  return (
    <div className="flex gap-12 ">
      {
        navItems.map((item,i)=>(
          <NavLink key={i} to={item.path} className="text-base font-normal leading-6 text-[#2A3342] capitalize" >{item.name}</NavLink>
        ))
      }
    </div>
  )
}
export default MainNavbar