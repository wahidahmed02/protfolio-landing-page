import React, { useState } from 'react'
import { FaHome, FaCode, FaBriefcase, FaUserAlt, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';



function Navbar() {
    const [IsDarkMod,setIsDarkMod] = useState(false)
    const Link= [
        {name:'HOME', path:"#" },
        {name:'SKILLS', path:"#" },
        {name:'WORK', path:"#" },
        {name:'ABOUT', path:"#" },
        {name:'CONTACT', path:"#" }
    ]
  return (
    <motion.div
     initial={{opacity:1, y:-60}}
     animate={{opacity:1, y:0}}
     exit={{opacity:1, y:0}}
     transition={{duration:1, ease:"easeOut"}}
     className=' w-screen bg-slate-50 flex items-center justify-center border-b-2 border-gray-300'>
        <div className="w-7xl flex items-center justify-between">
            {/* LOGO OR NAME ARIYA */}
            <a className=' text-xl'>Wahid Programer</a>
            {/* Desktop Manu */}
            <div className="py-5 flex gap-6 items-center ">
                <div className=" flex gap-3 font-light">
                  {Link.map((Link)=><a className=' text-stone-600' href={Link.path}>{Link.name}</a> )}
                </div>
                <div className="bg-stone-200/20 p-1 rounded-full">
                    {IsDarkMod ? <FaSun /> :<FaMoon /> }
                </div>
            </div>
        </div>
    </motion.div >
  )
}

export default Navbar