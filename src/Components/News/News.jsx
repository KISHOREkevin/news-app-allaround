import React, { useEffect, useState } from 'react'
import New from './New'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
const News = () => {
  let api_key = import.meta.env.VITE_API_KEY;
  let [newsData,setnewsData] = useState([]);
  let [query,setQuery] = useState("general");
  let [load,setLoad] = useState(false);
  let [error,setError] = useState([]);
  useEffect(()=>{
    let fetchData = async()=>{
      setLoad(true);
      try {
        let response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=${api_key}`);
        let data = await response.data.articles;
        setnewsData(data);
      } catch (error) {
        setError(error.response.data.errors);
      }
      setLoad(false);
    }

    fetchData();
  },[])
  let submitHandler=async(e)=>{
    e.preventDefault();
    setLoad(true);
    try {
      let response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=${api_key}`);
      let data = await response.data.articles;
      setnewsData(data);
    } catch (error) {
      setError(error.response.data.errors);
    }
    setLoad(false);
  }
  return (
    <>  
       <>
    <Navbar/>

    <div className='bg-secondary p-3 m-5 rounded-md'>
      <div className='lg:flex block' >
        <h1 className='text-2xl font-bold flex-1 lg:text-start text-center'>Search News</h1>
      <form onSubmit={submitHandler}>
        <div className='lg:block flex space-x-2 text-center'>
          <input className='lg:text-xl rounded-sm px-2'  onChange={(e)=>setQuery(e.target.value) }name="news-category" id="new-category" required />
          <button className='py-1 px-2 rounded-md bg-tertiary ' type='submit'>Search</button>
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
            return <New key={i} newsimage={news.image} newslink={news.url} newstitle={news.title} newsdescription={news.description} newsdate={news.publishedAt} newssourcename={news.source.name} newssourcelink={news.source.url}  />
        })}
        </>
        }
          </>
        }

       
        
        
       
      </div>
     
    
    
    </>
    </>
  )
}

export default News