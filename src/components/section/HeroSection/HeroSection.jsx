import React from 'react'
import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '../../input/Button'
import {img} from '../../../assets/assert'


// ICON IMPORT 
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";




function HeroSection() {
    const SkilNameList = ['react', 'nodejs', 'typescript', 'mongodb']
    const SocialAccountLink = [
        {name:"github", path:"#", icon:<VscGithubAlt />},
        {name:"linkdin", path:"#", icon:<SlSocialLinkedin />},
        {name:"Mail", path:"#", icon:<IoMailOutline />}

    ]
  return (
    <div className=' w-[97vw] bg-slate-50 flex items-center justify-center'>
        <div className="w-7xl flex items-center justify-between">

            <motion.div 
             initial={{opacity: 0, x: -70}}
             animate={{opacity:100, x:0}}
             exit={{ opacity: 0, x: -70 }}  
             transition={{ duration: 1, ease: "easeOut" }}
             className="w-4xl h-[90vh] flex flex-col justify-around py-5 pt-20 ">
                <p className=' text-gray-500 font-[500]'>FULL STACK DEVELOPER</p>
                <h4 className=' text-7xl'>Building Digital <br /><span className=' text-blue-500'>experiences </span> <br /> that matter</h4>
                <p className=' font-light text-gray-500 '>I carft beautiful, functional web appliaction with modern <br />tecnologies and thougtgul user experince</p>
                <div className=" flex gap-2">
                    <PrimaryButton >VIEW WORK</PrimaryButton> 
                    <SecondaryButton >GET IN TOUCH</SecondaryButton>
                </div>
                <div className="">
                    <div className=" flex gap-4 text-xl text-gray-500">
                        {SocialAccountLink.map((Link)=><a href={Link.path}>{Link.icon}</a>)}
                    </div>
                </div>
            </motion.div>

            <motion.div 
              initial={{opacity:0, x:70}}
              animate={{opacity:1, x:-10}}
              exit={{opacity:0, x:70}}
              transition={{duration:1, ease:"easeOut"}}
              className="w-3xl flex items-end flex-col pt-30">
                <div className=" flex gap-20 text-gray-500 ">
                  {SkilNameList.map((skill)=> <p className='-mt-20'>{skill.toUpperCase()}</p>)}
                </div>
                <div className=" relative">
                    <div className=" w-[300px] h-[350px] object-cover rounded-lg border-4 border-gray-400 overflow-hidden ">
                        <img className='relative  w-full h-full' src={img.ProfileImg} alt="" />
                    </div>
                    <motion.div
                     className=" opacity-60 absolute top-0 rotate-90  w-[300px] h-[350px] object-cover rounded-lg border-2 border-gray-400 overflow-hidden "
                     initial={{rotate:0}}
                     animate={{rotate:360}}
                     transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 15,
                        ease: 'linear',
                     }}
                     />

                    <motion.div
                     className="absolute top-0 opacity-50  w-[300px] h-[350px] object-cover rounded-lg border-2 border-blue-400 overflow-hidden "
                     initial={{rotate:0}}
                     animate={{rotate:-360}}
                     transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 9,
                        ease: 'linear',
                     }}
                     />

                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroSection