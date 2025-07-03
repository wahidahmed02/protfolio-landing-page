import React from 'react'
import {img} from '../../../assets/assert'


const BlogPostBlog = [
    {
        title:"E-comerce Platform",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React', 'Tailwindcss','Framer Motion'],
        img:img.Project1Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
    {
        title:"Blog App With Ai Post Genarator",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React',"Ai", 'Tailwindcss','Framer Motion'],
        img:img.Project2Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
    {
        title:"Task Management App",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React','Task', 'Tailwindcss','Framer Motion'],
        img:img.Project1Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
    {
        title:"Ai Power Interview App",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React',"Ai", 'Tailwindcss','Framer Motion'],
        img:img.Project2Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
    {
        title:"Resume Builder App",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React','Task', 'Tailwindcss','Framer Motion'],
        img:img.Project1Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
    {
        title:"Expescee Traker App",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, corporis mollitia earum facere explicabo dolorum ipsam totam omnis temporibus.",
        Technology:['React', 'Tailwindcss','Framer Motion'],
        img:img.Project2Img,
        LiveUrl:"#",
        GitHubUrl:"#"
    },
]

function BlogPost() {
  return (
  <div className=' w-[97vw] bg-slate-50 flex items-center justify-center'>
    <div className="w-7xl flex gap-2 flex-col items-center justify-between pb-6 pt-3">
      <p className=' text-gray-500 font-[500]'>FEATURED WORK</p>
      <h3 className=' text-6xl font-light text-gray-500'>Recent <span className=' text-blue-500 font-[500]'>Project</span></h3>
      <p className='w-[710px] text-center text-gray-500'>A comprehensive toolkit for building modern, scalable web applications from concept to deployment.</p>
      <div className=" flex gap-3.5 flex-wrap px-8 items-center justify-center pt-10">
        {BlogPostBlog.map(PostBlog=><div className=' w-[350px] h-[400px] bg-white border-[1px] border-gray-300 rounded-xl overflow-hidden shadow-xl group'>
            <div className="relative">
              <div className=" absolute w-full h-[220px] bg-black opacity-0 hover:opacity-85 transition-all duration-600 flex gap-1.5 items-center justify-center">
                <a href={PostBlog.LiveUrl} className=' px-2 py-1.5 bg-stone-100 rounded'>Live View</a>
                <a href={PostBlog.GitHubUrl} className=' px-2 py-1.5 bg-stone-100 rounded'>Github</a>
              </div>
              <div className=" w-full h-[220px] overflow-hidden">
                <img className=' w-full h-[220px] object-cover group-hover:scale-110 transition-all duration-800' src={PostBlog.img} alt="" />
              </div>
            </div>
            <div className="px-6 py-4">
                <h2 className=' text-xl font-medium group-hover:text-blue-600 transition-all duration-300 cursor-pointer'>{PostBlog.title}</h2>
                <p className=' text-sm py-1'>{PostBlog.discription.slice(0,130)}</p>
                <div className=" flex gap-1.5 flex-wrap py-3">
                    {PostBlog.Technology.map((Technologies)=><div className='py-1 px-1.5 text-[13px] bg-stone-100 border-[1px] border-gray-300 rounded-xl'>{Technologies}</div>)}
                </div>
            </div>
        </div>)}
      </div>
      <div className="py-4 pt-16 w-full flex flex-col items-center justify-center gap-4 ">
        <p className=' text-xl font-light  text-gray-500'>Want to see more of my work ?</p>
        <div className="px-10 py-2.5 rounded-3xl border-[1px] border-gray-400 cursor-pointer hover:bg-blue-500 transition-all duration-500 hover:text-white">VIEW ALL MY PROJECT</div>
      </div>
    </div>
  </div>
  )
}

export default BlogPost