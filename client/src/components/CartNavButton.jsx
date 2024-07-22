import { buttonVariants } from './Buttons'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

const CartNavButton = () => {
  const items = useCartStore((state) => state.items);

  return (
    <Link to="/checkout" className={buttonVariants({
        variant:"default",
        size:"default"
    })}>
        <ShoppingCart/>
        <span className="">My Cart</span>
        <div className=" w-5 h-5 rounded-full bg-white text-[10px] text-primary text-center font-black">{items.length || 0}</div>
    </Link>
  )
}

export default CartNavButton