import { Link, NavLink } from "react-router-dom";
import { Button } from "./Buttons";
import { mobilenavItems, navItems } from "../constants";
import { ChevronDown, Menu, ShoppingCartIcon, X } from "lucide-react";
import { useState } from "react";

const MainNavbar = () => {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className=" flex justify-between items-center w-full px-3 md:px-20 py-5 border-b border-solid border-[#F2F4F7] bg-white relative ">
      <Link to="/" className="hidden text-3xl font-black leading-9 text-black md:block ">Logo</Link>
      <NavMenu/>
      <div className="items-center hidden gap-3 md:flex ">
        <Button variant="outline" >sign in</Button>
        <Button variant="default" >create account</Button>
      </div>

      {/* mobile menu */}
      <div className="flex items-center justify-between w-full md:hidden ">
        <button onClick={toggleMenu}  className="p-2 rounded-lg ">
          <Menu/>
        </button>
        <Link to="/checkout" className="p-2.5 text-gray-500 border border-gray-200 flex items-center justify-center rounded-full relative">
          <ShoppingCartIcon size={16}/>
          <div className=" w-4 h-4 rounded-full bg-primary text-[12px] flex justify-center items-center text-white text-center font-bold absolute top-0 right-0 ">0</div>
        </Link>
      </div>
      {/* mobile nav */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 w-full h-screen bg-black/15">
          <div className="absolute inset-0 z-50 h-screen bg-white w-[280px] py-10 flex flex-col justify-between gap-10 ">
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 mb-12">
                <Link to="/" className="text-2xl font-black leading-9 text-black ">Logo</Link>
                <button onClick={toggleMenu}  className=" border-gray-300 border-[3px] p-2 flex justify-center items-center text-gray-300 rounded-full ">
                  <X/>
                </button>
              </div>
              <div className="">
                <MobileNav/>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-3 px-6">
              <Button variant="outline" size="full" >sign in</Button>
              <Button variant="default" size="full" >create account</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


const NavMenu = () =>{
  return (
    <div className="hidden gap-12 md:flex">
      {
        navItems.map((item,i)=>(
          <NavLink key={i} to={item.path} className="text-base font-normal leading-6 text-[#2A3342] capitalize" >{item.name}</NavLink>
        ))
      }
    </div>
  )
}


const MobileNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


  return (
    <div className="flex flex-col gap-4">
      {mobilenavItems.map((item, i) => (
        <div key={i} className="w-full">
          <NavLink 
            to={item.path} 
            className="flex items-center justify-between px-6 text-base font-normal leading-6 text-gray-500 capitalize" 
            onClick={() => item.children && toggleDropdown(i)}
          >
            {item.name}

            { item.children && <ChevronDown /> }
          </NavLink>

          {item.children && openDropdown === i && (
            <div className="flex flex-col gap-4 mt-4 transform ">
              {item.children.map((child, j) => (
                <NavLink 
                  key={j} 
                  to={child.path} 
                  className="block px-6 text-sm font-normal leading-6 text-gray-400 capitalize"
                >
                  {child.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainNavbar