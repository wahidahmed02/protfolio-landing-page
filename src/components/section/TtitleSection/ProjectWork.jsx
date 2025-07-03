import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { BsLightning } from "react-icons/bs";





function ProjectWork() {
  const WorkIngName= ['JavaScript', 'HTML5', 'CSS3','SASS','WEBPACK', 'VITE','JEST','CYPRESS', 'FIGMA', 'ADOBE XD','NOTION' , 'SLACK']
    const workDetails = [
        {name:"Project Complite", value :"50+", icon:<IoCodeSlashOutline />},
        {name:"Years Experience", value :"3+", icon:<FaUserGroup />},
        {name:"Technologies", value :"20+", icon:<TbWorld />},
        {name:"Client Satisfaction", value :"100%", icon:<BsLightning />},
    ]
  return (
    <div className=' w-[97vw] bg-slate-50 flex items-center justify-center'>
        <div className="w-7xl flex flex-col items-center justify-between">
           <div className=" flex gap-2.5 items-center justify-around w-full py-7 px-5 ">
               {workDetails.map((WorkDetail)=><div className='flex flex-col items-center justify-center gap-1'>
                  <div className="w-12 h-12 bg-white border-[1px] border-gray-300 rounded-xl flex items-center justify-center text-2xl font-bold text-gray-600">
                    {WorkDetail.icon}
                  </div>
                  <p className='text-center text-2xl font-light text-blue-500'>{WorkDetail.value}</p>
                  <p className='text-center font-medium text-sm'>{WorkDetail.name}</p>
               </div>)}
           </div>
        </div>
    </div>
  )
}

export default ProjectWork