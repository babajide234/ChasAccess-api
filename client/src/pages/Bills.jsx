import NavCat from '../components/NavCat'
import MaxWidth from '../components/MaxWidth'
import Card from '../components/Card'
import Ads from '../components/Ads'
import Tabs from '../components/Tabs'
import BuyAirtime from '../components/BuyAirtime'
import BuyData from '../components/BuyData'
import Utitlities from '../components/Utitlities'

const Bills = () => {
  return (
    <>
        <NavCat/>
        <MaxWidth>
            <div className="flex flex-col gap-5 md:flex-row">
                <Card className='flex flex-col gap-10'>
                    <div className="flex flex-col w-full gap-2 ">
                        <h2 className="text-xl font-bold leading-8 ">Pay bills with ease</h2>
                        <p className="text-base font-normal leading-6 text-gray-500 ">Enjoy the convenience of paying bills with ease.</p>
                    </div>
                    <Tabs tabs={[ "Buy airtime","Buy data","Utilities"]}>
                        <BuyAirtime/>
                        <BuyData/>
                        <Utitlities/>
                    </Tabs>
                </Card>
                <div className="flex-col hidden gap-8 md:flex w-fit">
                    <Ads>
                        <span className=' text-xl font-bold text-[#FDC040] leading-8'>Summer Deals</span>
                        <h2 className=" text-[40px] font-bold leading-[48px] text-[#253D4E]">TOP HEALTHY FOOD</h2>
                        <p className=" text-gray-500 text-lg font-normal w-[9rem]">Get 35% OFF on 
                        selected items</p>
                    </Ads>
                    <Ads size={'sm'}>
                        <span className=' text-xl font-bold text-[#FDC040] leading-8'>Summer Deals</span>
                        <h2 className=" text-[40px] font-bold leading-[48px] text-[#253D4E]">TOP HEALTHY FOOD</h2>
                        <p className=" text-gray-500 text-lg font-normal w-[9rem]">Get 35% OFF on 
                        selected items</p>
                    </Ads>
                </div>
            </div>
        </MaxWidth>
    </>
  )
}

export default Bills