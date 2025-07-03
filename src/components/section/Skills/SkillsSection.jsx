import React from 'react'
import { motion } from 'framer-motion';


function SkillsSection() {
    const SKLIS_CATAGORY = [
        {
            title :"Frontend",
            icon:"Hello",
            description:"Crafting beautiful, responsive user interfaces",
            skills:[
                {name:"React", level:95, color:"bg-blue-500"},
                {name:"TypeScript", level:90, color:"bg-blue-600"},
                {name:"Next.js", level:88, color:"bg-gray-500"},
                {name:"Tailwindcss", level:92, color:"bg-cyan-500"},
                {name:"Framer Motion", level:85, color:"bg-pink-500"},
            ]
        },
        {
            title :"Backend",
            icon:"Hello",
            description:"Building robust server-side solutions",
            skills:[
                {name:"React", level:92, color:"bg-green-500"},
                {name:"TypeScript", level:85, color:"bg-black"},
                {name:"Next.js", level:89, color:"bg-amber-600"},
                {name:"Tailwindcss", level:94, color:"bg-green-500"},
                {name:"Framer Motion", level:85, color:"bg-teal-500"},
            ]
        },
        {
            title :"Database",
            icon:"Hello",
            description:"Managing and optimizing data storage",
            skills:[
                {name:"MongoDB", level:89, color:"bg-fuchsia-500"},
                {name:"Redis", level:86, color:"bg-cyan-500"},
                {name:"Prisma", level:91, color:"bg-emerald-500"},
                {name:"Sql", level:96, color:"bg-yellow-500"},
                {name:"Firebase", level:87, color:"bg-rose-500"},
            ]
        },
        {
            title :"DevOps",
            icon:"Hello",
            description:"Deploying and scaling applications",
            skills:[
                {name:"Docker", level:89, color:"bg-amber-500"},
                {name:"AWS", level:86, color:"bg-lime-500"},
                {name:"Vercel", level:91, color:"bg-emerald-600"},
                {name:"Git", level:96, color:"bg-sky-500"},
                {name:"CI/CD", level:87, color:"bg-teal-500"},
            ]
        },

    ]
  return (
    <div className=' w-[97vw] bg-slate-50 flex  items-center justify-center pb-24'>
      <div className="w-7xl flex flex-col items-center justify-between">
        <div className="w-full flex flex-col gap-3.5 items-center justify-center">
            <p className='text-gray-500 font-[500]'>TECHNICAL EXPERTISE</p>
            <h3 className=' text-6xl font-light text-gray-500'>Skills & <span className=' text-blue-500 font-[500]'>Technologies</span></h3>
            <p className='w-[610px] text-center text-gray-500'>A comprehensive toolkit for building modern, scalable web applications from concept to deployment.</p>
        </div>
        <div className=" flex flex-wrap gap-10 w-full items-center  justify-center py-4 pt-15">
            {SKLIS_CATAGORY.map((SkillsCatagory)=>
            <>
            <div className="w-[550px] h-[400px] bg-white rounded-lg border-1 border-gray-300 shadow-lg px-10 py-10">
                <div className=" items-center flex gap-3">
                    <div className="w-13 h-13 rounded bg-gray-400"></div>
                    <div className="">
                        <p className='text-xl text-gray-500 font-medium'>{SkillsCatagory.title}</p>
                        <p className='text-sm text-gray-400'>{SkillsCatagory.description}</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-3.5 pt-7">
                    {SkillsCatagory.skills.map((skill)=>
                    <div className="">
                        <div className=" flex justify-between w-[95%] px-1">
                          <p className=' text-gray-500'>{skill.name}</p>
                          <p className=' text-gray-500'>{skill.level}%</p>
                        </div>
                        <div className="w-[95%] h-[10px] rounded-full bg-gray-300 overflow-hidden">
                           <motion.div initial={{width:0}} animate={{ width: `${skill.level}%`}} transition={{duration:1, ease:"easeIn"}}   style={{ width: `${skill.level}%` }} className={`${skill.color} h-full`}></motion.div >
                        </div>
                    </div>
                    )}
                </div>
            </div>
            </>)}
        </div>
      </div>
    </div>
  )
}

export default SkillsSection