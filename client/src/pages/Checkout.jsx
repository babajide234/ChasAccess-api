import { useEffect, useState } from 'react'
import MaxWidth from '../components/MaxWidth'
import Card from '../components/Card'
import Input from '../components/Input'
import PayStack from '../assets/Payment.png'
import { Button } from '../components/Buttons'
import { DollarSign, Edit, Monitor, Phone, PhoneCall, ShoppingCart, Trash, Zap } from 'lucide-react'
import useCartStore from '../store/useCartStore'
import { useMutation, useQuery } from '@tanstack/react-query'

const Checkout = () => {
    const deleteCartItem = useCartStore((state) => state.removeItem);
    const editItem = useCartStore((state) => state.editItem);
    const fetchCartItems = useCartStore((state) => state.loadcart);
    const [ total , setTotal] = useState(0);

    const { data: cartitems , isLoading, isError } = useQuery({
        queryKey: ['cartItems'],
        queryFn: fetchCartItems,
    });
    
   

    const deleteMutation = useMutation({
        mutationFn: (id) => deleteCartItem(id),
        onSuccess: () => {
            // Invalidate and refetch the cart items
        },
        onError: (error) => {
            console.error('Error deleting item:', error);
        }
    });

    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };


    useEffect(() => {
        const newTotal = cartitems.reduce((sum, item) => {
            const itemAmount = item.type === 'airtime' ? parseInt(item.amount, 10) : parseInt(item.plan.amount, 10)
            return sum + itemAmount;
        }, 0);
        setTotal(newTotal);
      }, [cartitems]);

    const handlePaymentOption = () => {
      // kkkkk
    };
  return (
    <MaxWidth>
        <div className="flex flex-col gap-5 md:flex-row">
            <div className=" w-full md:w-[620px] flex flex-col gap-4 ">
                <div className="flex flex-col w-full gap-2 ">
                    <h2 className="text-xl font-bold leading-8 ">Checkout</h2>
                    <p className="text-base font-normal leading-6 text-gray-500 ">Kindly review to confirm details.</p>
                </div>
                <Card className='w-full'>
                    <div className="flex flex-col w-full gap-5 ">
                        <div className="">
                            <h3 className="text-xl font-black text-gray-900 ">Your cart</h3>
                        </div>
                        <div className="flex flex-col w-full gap-5">
                        {cartitems.length === 0 && isLoading ? (
                            <div className="flex items-center justify-center w-full  min-h-[40vh]">
                                <div className="flex flex-col items-center gap-5">

                                <ShoppingCart  className='text-5xl text-gray-300'/>
                                <p className="text-base font-normal text-gray-500">Your cart is empty</p>
                                </div>
                            </div>
                        ) : (
                             cartitems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between gap-4 p-2 border border-gray-100 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className='flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg text-primary'>
                                            { item.type === 'airtime' && <PhoneCall/> }
                                            { item.type === 'data' && 
                                            // eslint-disable-next-line react/no-unknown-property
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                                            }
                                            { item.type === 'electricity' && <Zap />}
                                            { item.type === 'electricity' && <Monitor /> }
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-sm font-semibold capitalize ">{item.provider} {item.type}</h3>
                                            <div className="flex items-center gap-5 text-xs text-gray-500">
                                                <span className="flex items-center gap-3">
                                                <span className="p-1.5 border border-gray-200 flex justify-center items-center rounded-full">
                                                    <Phone size={12}/>
                                                    </span>
                                                    {item.phone}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span className="p-1.5 border border-gray-200 flex justify-center items-center rounded-full">
                                                        <DollarSign size={12} />
                                                    </span>
                                                    ₦ { item.type === 'airtime' ? item.amount : item.plan.amount }
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 ">
                                        <button className="flex items-center justify-center rounded-full p-2.5 hover:bg-primary/25 hover:text-primary"
                                        onClick={() => handleDelete(item.id)}
                                        >
                                            <Trash size={16}/>
                                        </button>
                                        <button className="flex items-center justify-center rounded-full p-2.5 hover:bg-primary/25 hover:text-primary"
                                         onClick={() => editItem(item.id)}
                                        >
                                            <Edit size={16}/>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                        }
                        </div>
                    </div>
                </Card>
            </div>
            <Card className="">
                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col w-full gap-2 ">
                        <h2 className="text-xl font-bold leading-8 ">Contact information</h2>
                        <p className="text-base font-normal leading-6 text-gray-500 ">Please provide your best email</p>
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
                    <label htmlFor="paystack" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                            <div className="flex items-center gap-4">
                                <img src={PayStack} alt="" className="" />
                                <h2 className="text-lg font-normal ">Pay With Paystack</h2>
                            </div>
                            <input type="radio" id="paystack" name="paymentOption" value="paystack" onChange={handlePaymentOption} className="" />

                        </label>
                        <label htmlFor="buyNowPayLater" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                        <div className="flex flex-col items-start">
                            <h2 className="text-sm font-semibold text-gray-700">Buy Now Pay Later</h2>
                            <p className="text-sm text-gray-500">Enjoy 6-Month Installments with Zero Interest</p>
                        </div>
                        <input type="radio" id="buyNowPayLater" name="paymentOption" value="buyNowPayLater" onChange={handlePaymentOption} className="" />
                        </label>
                        <label htmlFor="generatePaymentLink" className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg group ">
                        <div className="flex flex-col items-start">
                            <h2 className="text-sm font-semibold text-gray-700">Generate Payment Link</h2>
                            <p className="text-sm text-gray-500">Simply send them a link, and let the generosity flow!</p>
                        </div>
                        <input type="radio" id="generatePaymentLink" name="paymentOption" value="generatePaymentLink" onChange={handlePaymentOption} className="" />
                        </label>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-gray-500 ">
                        <div className="flex items-center justify-between ">
                            <span className="">Sub total</span>
                            <span className="text-gray-700 ">₦ {total}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="">Gateway fee</span>
                            <span className="text-gray-700 ">₦1,700</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="">Total</span>
                            <span className="text-gray-700 ">₦ {total}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
                        <Button
                            size="full"
                            variant="outline"
                        >
                            Cancel
                        </Button>
                        <Button size="full" variant="default">
                        Pay ₦{total}
                        </Button>
                    </div>

                
                </div>
            </Card>
        </div>
    </MaxWidth>
  )
}

export default Checkout