import React from 'react'
import MaxWidth from '../components/MaxWidth'
import Card from '../components/Card'
import Input from '../components/Input'
import PayStack from '../assets/Payment.png'
import { Button } from '../components/Buttons'
import { Delete, DollarSign, Edit, Phone, Trash } from 'lucide-react'
import useCartStore from '../store/useCartStore'

const Checkout = () => {
    const cart = useCartStore((state) => state.cart);
    const removeItem = useCartStore((state) => state.removeItem);
    const editItem = useCartStore((state) => state.editItem);
  return (
    <MaxWidth>
        <div className="flex gap-5">
            <div className=" w-[620px] flex flex-col gap-4 ">
                <div className="flex flex-col w-full gap-2 ">
                    <h2 className="text-xl font-bold leading-8 ">Checkout</h2>
                    <p className="text-base font-normal leading-6 text-gray-500 ">Kindly review to confirm details.</p>
                </div>
                <Card className='w-full'>
                    <div className="flex flex-col w-full gap-5 ">
                        <div className="">
                            <h3 className="text-xl font-black text-gray-900 ">Your cart</h3>
                        </div>
                        <div className="">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center justify-between gap-4 p-2 border border-gray-100 rounded-lg">

                                <div className="flex items-center gap-4">
                                    <div className='w-12 h-12 bg-gray-200 rounded-lg'></div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-sm font-semibold ">{item.provider} Airtime</h3>
                                        <div className="flex items-center gap-5 text-xs text-gray-500">
                                            <span className="flex items-center gap-3">
                                                <Phone size={12}/>
                                                {item.phone}
                                            </span>
                                            <span className="flex items-center gap-3">
                                                <DollarSign size={12} />
                                                ₦ {item.plan}
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 ">
                                    <button className="flex items-center justify-center rounded-full w-7 h-7 hover:bg-primary/25 hover:text-primary"
                                    onClick={() => removeItem(index)}
                                    >
                                        <Trash size={16}/>
                                    </button>
                                    <button className="flex items-center justify-center rounded-full w-7 h-7 hover:bg-primary/25 hover:text-primary"
                                     onClick={() => editItem(index, { ...item, plan: 'New Plan' })}
                                    >
                                        <Edit size={16}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </Card>
            </div>
            <Card className="">
                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col w-full gap-2 ">
                        <h2 className="text-xl font-bold leading-8 ">Checkout</h2>
                        <p className="text-base font-normal leading-6 text-gray-500 ">Kindly review to confirm details.</p>
                    </div>

                    <div className="">
                    <div className="flex flex-col gap-5 ">
                        <Input
                            type="text"
                            label="Full name"
                            name="fullname"
                        
                            placeholder=" "
                        />
                        <Input
                            type="text"
                            label="Email"
                            name="email"
                        
                            placeholder=" "
                        />
                    </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 ">
                        <h2 className="text-xl font-bold leading-8 ">Select payment option</h2>
                        <p className="text-base font-normal leading-6 text-gray-500 ">Choose your preferred payment method</p>
                    </div>
                    <div className="flex flex-col gap-5 ">
                        <label htmlFor="" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                            <div className="flex items-center gap-4">
                                <img src={PayStack} alt="" className="" />
                                <h2 className="text-lg font-normal ">Pay With Paystack</h2>
                            </div>
                            <input type="radio" className="" />
                        </label>
                        <label htmlFor="" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                            <div className="flex flex-col items-start">
                                <h2 className="text-sm font-semibold text-gray-700">Buy Now Pay Later</h2>
                                <p className="text-gray-500 ">Enjoy 6-Month Installments with Zero Interest</p>
                            </div>
                            <input type="radio" className="" />
                        </label>
                        <label htmlFor="" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                            <div className="flex flex-col items-start">
                                <h2 className="text-sm font-semibold text-gray-700">Generate Payment Link</h2>
                                <p className="text-gray-500 ">Simply send them a link, and let the generosity flow!</p>
                            </div>
                            <input type="radio" className="" />
                        </label>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-gray-500 ">
                        <div className="flex items-center justify-between ">
                            <span className="">Sub total</span>
                            <span className="text-gray-700 ">₦1,700</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="">Gateway fee</span>
                            <span className="text-gray-700 ">₦1,700</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="">Total</span>
                            <span className="text-gray-700 ">₦1,700</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5">
              <Button
                size="full"
                variant="outline"
              >
                Cancel
              </Button>
              <Button size="full" variant="default">
              Pay ₦1000
              </Button>
            </div>

                
                </div>
            </Card>
        </div>
    </MaxWidth>
  )
}

export default Checkout