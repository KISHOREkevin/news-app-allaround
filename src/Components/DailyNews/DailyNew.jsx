import React from 'react'
import {RWebShare} from "react-web-share"
const DailyNew = ({newsimage,newslink,newstitle,newsdescription,newsdate,newssourcename,newssourcelink}) => {
  return (
    <div className='bg-tertiary p-3 m-2 rounded-md shadow-lg lg:flex block space-x-4'>
      <div>
        <figure>
          <img className='rounded-md ' src={newsimage} alt={newstitle} width={500}  />
        </figure>
      </div>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold py-2'>{newstitle}</h1> 
        <p className='py-2'>{newsdescription}</p>
        <p>{`Published at : ${newsdate.slice(0,10)} - ${newsdate.slice(11,19)}`}</p>
        <p className='pb-2'><a href={newssourcelink} target='_blank'>{`Source : ${newssourcename}`}</a></p>
        <div className='flex space-x-2'>
        <a href={newslink} target='_blank' className='bg-final text-white p-2 rounded-md hover:bg-white hover:text-black'><button>Read More</button></a>
        <RWebShare data={{text:`${newsdescription}`,url:`${newslink}`,title:`${newstitle}`}} ><button className='bg-final text-white p-2 rounded-md hover:bg-white hover:text-black'>Share</button></RWebShare>
        </div>
       
      </div>
    </div>
  )
}

export default DailyNew