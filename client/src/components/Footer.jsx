import { DribbbleIcon, FacebookIcon, Mail, YoutubeIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className=" w-full h-[300px] flex justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center w-full md:w-[751px] gap-10 px-3 md:px-0 ">
        <div className="flex flex-col gap-3 ">
          <h3 className=" text-2xl font-black leading-8 text-[#101828]">Newsletter</h3>
          <p className=" text-sm text-[#475467] font-normal">Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
        </div>
        <div className=" w-full border border-solid border-[#98A2B3] rounded-full flex items-center justify-between py-2 pl-8 pr-2 ">
          <Mail className="text-gray-500 "/>
          <input type="text" className="flex-grow w-full px-3 py-3 border-none outline-none" placeholder="Enter your email" />
          <button className=" px-9 h-full bg-[#DFD5FB] text-sm font-semibold leading-6 text-center text-primary rounded-full flex justify-center items-center py-3 capitalize">submit</button>
        </div>
      </div>
    </div>
      <footer className="flex flex-col w-full min-h-[40vh] gap-10 text-[#EFEAFD] bg-primary px-3 md:px-20 py-10 justify-between">
        <div className="flex flex-col items-center w-full md:justify-between md:items-start md:flex-row ">
          <div className=" w-full md:w-[390px]">
            <p className="text-sm text-center md:text-base md:text-left">
            Lorem ipsum dolor sit amet consectetur. Gravida bibendum interdum vel vivamus dignissim consectetur enim in. Ultricies accumsan egestas ultrices mi adipiscing ultrices ornare. Mauris elementum accumsan elementum rhoncus risus sed.
            </p>
          </div>
          <div className="flex flex-wrap items-center w-full gap-10 md:flex-grow md:items-start ">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-base font-black leading-6">Company</h2>
              <ul className="flex flex-col gap-3 ">
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">About us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="text-base font-black leading-6">Explore</h2>
              <ul className="flex flex-col gap-3 ">
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">Marketplace</Link>
                </li>
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">Sample storefront</Link>
                </li>
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">Bills payment</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="text-base font-black leading-6">Legal</h2>
              <ul className="flex flex-col gap-3 ">
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">Privacy note</Link>
                </li>
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">Terms and condition </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="text-base font-black leading-6">Contact us</h2>
              <div className="flex w-full gap-4 ">
                <Link to="" className="text-2xl "> <FacebookIcon/></Link>
                <Link to="" className="text-2xl "> <YoutubeIcon/></Link>
                <Link to="" className="text-2xl "> <DribbbleIcon/></Link>
              </div>
              <ul className="flex flex-col gap-3 ">
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">This address</Link>
                </li>
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">info@xyz.com</Link>
                </li>
                <li className="">
                  <Link className="text-sm font-normal leading-5 ">000 0000 0000</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
            <p className="text-sm font-medium ">© 2000-2021, All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer