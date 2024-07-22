import React from 'react'
import CartNavButton from './CartNavButton'
import { categories } from '../constants'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../lib/utils'
import { Heart } from 'lucide-react'
import { buttonVariants } from './Buttons'

const NavCat = () => {
  return (
    <div className="flex items-center justify-between w-full px-20 py-6 border-b border-solid border-[#EAECF0]">

        {
            categories.map((item,i)=>(
                <NavLink key={i} className={cn(" text-base leading-4 font-bold text-[#1D2939]")}>
                    {item.name}
                </NavLink>
            ))
        }
        <div className="flex items-center gap-4 ">
            <Link  className={buttonVariants({
                variant:"outline",
                size:"icon"
            },"flex")}>
                <Heart/>
            </Link>
            <CartNavButton/>
        </div>
    </div>
  )
}

export default NavCat