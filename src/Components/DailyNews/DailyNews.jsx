import React, { useEffect, useState } from 'react'
import DailyNew from './DailyNew'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
const DailyNews = () => {
  let api_key = String(import.meta.env.VITE_API_KEY);
  let [category,setCategory] = useState("general");
  let [newsData,setnewsData] = useState([]);
  let [error,setError] = useState([]);
  let [load,setLoad] = useState(false);
  useEffect(()=>{
    let fetchData= async ()=>{
      setLoad(true);
      try {
        let response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${api_key}`);
        let data = await response.data.articles;
        setnewsData(data);
        
      } catch (error) {
        setError(error.response.data.errors);
      }
      setLoad(false);
    }

    fetchData();
  },[])
  let submitHandler= async (e)=>{
      e.preventDefault();
      setLoad(true);
      try {
        let response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${api_key}`);
        let data = await response.data.articles;
        setnewsData(data);
        
      } catch (error) {
        setError(error.response.data.errors);
      }
      setLoad(false);
  }
  
  return (
    <>
    <Navbar/>

    <div className='bg-secondary p-3 m-5 rounded-md  '>
      <div className='lg:flex block' >
        <h1 className='text-2xl font-bold flex-1 lg:text-start text-center'>Top Headlines</h1>
      <form onSubmit={submitHandler}>
        <div className='block space-x-2 text-center'>
        <select onChange={(e)=>setCategory(e.target.value)} className='px-4 py-2 rounded-md' name="news-category" id="new-category" defaultValue={"general"}>
          <option value="general" >General</option>
          <option value="world">World</option>
          <option value="nation">Nation</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>
        <button className='py-1 px-2 rounded-md bg-tertiary text-white' type='submit'>Search</button>
        
        </div>

      </form>
      </div>
     
      </div>
      <div className='bg-secondary p-3 m-5 rounded-md overflow-y-scroll lg:h-[480px] h-[700px]'>

        {load ? 
          <div className="loader"></div>
        : 

        <>
         {error.length!==0 ? 
          <>
            {error.map((err)=>{
              return <h1 className='font-bold text-2xl text-center'>{err}</h1>
            })}
          </>
        :
        <>
        {newsData.map((news,i)=>{
            return <DailyNew key={i} newsimage={news.image} newslink={news.url} newstitle={news.title} newsdescription={news.description} newsdate={news.publishedAt} newssourcename={news.source.name} newssourcelink={news.source.url}  />
        })}
        </>
        
        }
        
        </>
        
        }
       
        
       
        
      </div>
     
    
    
    </>
  )
}

export default DailyNews