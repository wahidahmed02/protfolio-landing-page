import React from 'react'
import { PrimaryButton } from '../../input/Button'
import { FiSend } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
// ICON IMPORT 
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";




const ContactInfo = [
    {
        title:"Location",
        discription:"Noakhali, Bangladesh",
        icons:<IoLocation />, 
    },
    {
        title:"Email",
        discription:"wahidahmed220020@gmail.com",
        icons:<IoMdMail />, 
    },{
        title:"Phone",
        discription:"+8801645636284",
        icons:<FaPhoneAlt />, 
    },
  ]

const SocialAccount =[
    {
        title:"github",
        path:"#",
        icon:<VscGithubAlt />
    },
    {
        title:"Linkdin",
        path:"#",
        icon:<SlSocialLinkedin />
    },
    {
        title:"Twitter",
        path:"#",
        icon:<CiTwitter />
    },
    {
        title:"Email",
        path:"#",
        icon:<IoMailOutline />
    },
]



function ContactSection() {
  return (
 <div className=' w-[97vw] bg-slate-50 flex items-center justify-center pt-3'>
    <div className="w-7xl flex gap-2 flex-col items-center justify-between pb-6 pt-3">
      <p className=' text-gray-500 font-[500]'>LET'S CONNECT</p>
      <h3 className=' text-6xl font-light text-gray-500'>Get in<span className=' text-blue-500 font-[500]'>Touch</span></h3>
      <p className='w-[710px] text-center text-gray-500'>Ready to start your next project? Let's discuss how we can bring your ideas to life.</p>

      <div className="w-full flex py-16  ">
        <div className="w-[50%] h-120 flex justify-end ">
         <div className=" px-10 ">

            <div className="flex flex-col gap-3 w-full px-8 py-10 rounded border-[2px] border-gray-300 bg-slate-200">
                <p className=' text-lg py-2'>Send a Message</p>
                <div className=" flex gap-2 ">
                    <input type="text" placeholder='Your Name' className=' outline-none p-2 bg-white rounded' />
                    <input type="text" placeholder='Email Addreaa' className=' outline-none p-2 bg-white rounded' />
                </div>
                <textarea name="" placeholder='Your Massase' className=' outline-none p-2 bg-white rounded h-30' ></textarea>
                <PrimaryButton><FiSend />Send Massage</PrimaryButton>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
            <div className="w-full ">
                <h3 className=' text-xl font-semibold text-gray-600'>Contact Information</h3>
            <div className="flex flex-col gap-5 pt-4">
                {ContactInfo.map((LoveWork)=><div className='flex gap-2 items-center justify-center bg-white  rounded-sm px-2 py-3 '>
                    <div className="w-11 h-11 bg-white rounded border-[1px] border-gray-200 flex items-center justify-center text-xl text-blue-500">{LoveWork.icons}</div>
                    <div className="w-[85.0%] ">
                        <p className='text-[16px] font-medium text-gray-600'>{LoveWork.title}</p>
                        <p className='text-sm font-light text-'>{LoveWork.discription}</p>
                    </div>
                </div>)}
             </div>
            </div>

            <h3 className=' text-xl font-semibold text-gray-600'>Follow Me</h3>
            <div className="grid grid-cols-2 gap-1">
                {SocialAccount.map((AccountLink)=><div className=' border-[2px] border-gray-300 rounded flex items-center gap-2.5 px-3 py-3 hover:bg-blue-200 transition-all duration-500 '>
                    <span className=' text-blue-500'>{AccountLink.icon}</span> <span>{AccountLink.title}</span>
                </div>)}
             </div>

             <div className="py-6 pr-5">
                <div className=" bg-green-200/40 px-3 py-4 rounded border-[2px] border-green-500 ">
                    <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        <p className=' text-green-600 text-[16px]'>Available for work</p>
                    </div>
                    <p className=' text-sm text-green-500'>I'm currently available for freelance projects and full-time opportunities</p>
                </div>
             </div>
        </div>
      </div>

    </div>
 </div>
  )
}

export default ContactSection