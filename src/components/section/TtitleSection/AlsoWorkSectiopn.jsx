import React from 'react'

function AlsoWorkSectiopn() {
    const WorkIngName= ['JavaScript', 'HTML5', 'CSS3','SASS','WEBPACK', 'VITE','JEST','CYPRESS', 'FIGMA', 'ADOBE XD','NOTION' , 'SLACK']
    const workDetails = [
        {name:"Project Complite", value :"50+"},
        {name:"Years Experience", value :"3+"},
        {name:"Technologies", value :"20+"},
        {name:"Client Satisfaction", value :"100%"},
    ]
  return (
    <div className=' w-[97vw] bg-slate-50 flex items-center justify-center'>
        <div className="w-7xl flex flex-col items-center justify-between">
            <p className=' text-gray-500 font-[500]'>Also Working With</p>
            <div className=" flex gap-2.5 items-center justify-between w-full py-7 px-10">
                {WorkIngName.map((NameList)=><div className='text-sm font-light text-gray-500 py-[5px] px-3.5 rounded-xl bg-white border-[1px] border-gray-400'>{NameList}</div>)}
            </div>
            <div className=" flex gap-2.5 items-center justify-around w-full py-7 px-5 ">
                {workDetails.map((WorkDetail)=><div>
                    <p className='text-center text-4xl font-light text-blue-500'>{WorkDetail.value}</p>
                    <p className='text-center  font-medium'>{WorkDetail.name}</p>
                </div>)}
            </div>

        </div>
    </div>
  )
}

export default AlsoWorkSectiopn