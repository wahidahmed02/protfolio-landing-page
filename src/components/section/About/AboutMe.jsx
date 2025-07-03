import React from 'react'
import { FaRegCircle, FaCircle } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";





function AboutMe() {

    const timelineItems = [
    {
      title: "Stat Coding Jurney",
      date: "2023",
      description: "Initial meeting with stakeholders to define project scope and objectives. When I'm not coding, you'll find me exploring new frameworks. contributing to open source, or mentoring aspiring developers. I love the constant evolution of web technologies and the endless possibilities they bring to create meaningful digital experiences",
      instuate:"Selt-Tought",
      icons:<IoCodeSlashOutline />, 
      color:"bg-blue-500"
    },
    {
      title: "Frist Intership",
      date: "2023",
      description: "Created wireframes and mockups for the application interface.",
      instuate:"Selt-Tought",
      icons:<MdOutlineWorkOutline />, 
      color:"bg-green-500"

    },
    {
      title: "Computer Seience Degree",
      date: "2023",
      description: "Began implementing core features with React and Node.js.",
      instuate:"Selt-Tought",
      icons:<IoCodeSlashOutline />, 
      color:"bg-red-500"
    },
    {
      title: "Beta Testing",
      date: "2023",
      description: "Released first beta version to selected users for feedback.",
      instuate:"Selt-Tought",
      icons:<IoCodeSlashOutline />, 
      color:"bg-blue-500"
    },
    {
      title: "Official Launch",
      date: "2023",
      description: "Public release of the application with all planned features. When I'm not coding, you'll find me exploring new frameworks. contributing to open source, or mentoring aspiring developers. I love the constant evolution of web technologies and the endless possibilities they bring to create meaningful digital experiences",
      instuate:"Selt-Tought",
      icons:<IoCodeSlashOutline />, 
      color:"bg-green-500"
    },
  ];

  const EhatiLoveBuildinf = [
    {
        title:"User Experience",
        discription:"Public release of the application with all planned features. When I'm not coding, you'll find me exploring new frameworks.",
        icons:<FaRegHeart />, 
    },
    {
        title:"Problem Solving",
        discription:"Public release of the application with all planned features. When I'm not coding, you'll find me exploring new frameworks.",
        icons:<FiCoffee />, 
    },{
        title:"Continus Learning",
        discription:"Public release of the application with all planned features. When I'm not coding, you'll find me exploring new frameworks.",
        icons:<LuBookOpen />, 
    },
  ]



  return (
  <div className=' w-[97vw] bg-slate-50 flex items-center justify-center'>
    <div className="w-7xl flex gap-2 flex-col items-center justify-between pb-6 pt-3">
      <h3 className=' text-6xl font-light text-gray-500'>About <span className=' text-blue-500 font-[500]'>Me</span></h3>
      <div className="flex gap-2.5 ">
        <div className="w-[500px] flex flex-col justify-end">
            <div className="w-[480px] h-80 bg-gray-200/50 rounded-xl px-5 py-3 pt-8 border-[2px] border-gray-300">
                <h4 className=' text-xl font-medium text-gray-500'>My Mission</h4>
                <div className="flex flex-col gap-8 py-10">
                  <p className=' text-sm font-light text-gray-500'>I believe technology should be a bridge that connects people and solves real-world problems. My passion lies in crafting digital experiences that are not just functional, but delightful and accessible to everyone.</p>
                  <p className='text-sm font-light text-gray-500'>When I'm not coding, you'll find me exploring new frameworks. contributing to open source, or mentoring aspiring developers. I love the constant evolution of web technologies and the endless possibilities they bring to create meaningful digital experiences</p>
                </div>
            </div>
          <div className="w-full h-full px-5  pt-16  ">
                <h3 className=' text-xl font-semibold text-gray-600'>What I Love Building</h3>
            <div className="flex flex-col gap-5 pt-4">
                {EhatiLoveBuildinf.map((LoveWork)=><div className='flex gap-2 items-center justify-center bg-white  rounded-sm px-2 py-3 border-[2px] border-gray-100 shadow'>
                    <div className="w-11 h-11 bg-white rounded border-[1px] border-gray-200 flex items-center justify-center text-xl text-blue-500">{LoveWork.icons}</div>
                    <div className="w-[85.0%] ">
                        <p className='text-[16px] font-medium text-gray-600'>{LoveWork.title}</p>
                        <p className='text-sm font-light text-'>{LoveWork.discription}</p>
                    </div>
                </div>)}
             </div>
            </div>
        </div>



        <div className="w-[650px] ">
            <p className=' px-2 py-1 text-gray-500'>My Learning Jurney</p>
            <div className="w-full h-full relative ">
                {/* TIME LINE */}
                <div className=" absolute left-4  w-[3px] bg-gray-400 h-full"></div>
                <div className="flex flex-col gap-4">
                    {timelineItems.map((item)=><div className=' relative flex '>
                        <div className="w-12 h-12">
                            <div className={`w-10 h-10 text-blue-500 ${item.color} rounded-full flex items-center justify-center text-xl text-white`}>{item.icons}</div>
                        </div>
                        <div className="ml-2 w-8/12 border-[2px] border-gray-200 rounded-lg ">
                          <div className="p-6 bg-white rounded-lg shadow-md relative">
                                <h3 className="text-md font-semibold pb-2 text-gray-500">{item.title}</h3>
                                <p className='text-[15px] font-medium text-blue-400'>{item.instuate}</p>
                                <p className="text-gray-600 mb-2 absolute top-5 right-2 px-2.5 rounded-2xl border-[1px] border-gray-300  bg-gray-200 m-2 text-[12px]">{item.date}</p>
                                <p className="text-gray-400 text-sm text-light">{item.description}</p>
                          </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
      </div>


      <div className="py-4 pt-16 w-full flex flex-col items-center justify-center gap-4 ">
        <p className=' text-xl font-light  text-gray-500'>Ready to bring yours ideas to life</p>
        <div className="px-10 py-2.5 rounded-3xl border-[1px] border-gray-400 cursor-pointer bg-blue-500 hover:bg-white transition-all duration-500 hover:text-blue-500 text-white">VIEW ALL MY PROJECT</div>
      </div>


    </div>
  </div>
  )
}

export default AboutMe