import { cn } from "../lib/utils"
import AddImage from '../assets/yogurt.png'

const Ads = ({size,children}) => {
  return (
    <div className={cn(" w-[311px] rounded-[20px] bg-[#EDF1F4] flex flex-col justify-between p-6 z-20 overflow-hidden relative")}>
        <div className=" z-10 mb-[10rem]">
            {children}
        </div>
        <img src={AddImage} alt="" className={cn("object-fit absolute z-0 bottom-0 left-0  h-[191px] w-full",{
            "  h-[171px] ": size === "sm"
        })} />
    </div>
  )
}

export default Ads