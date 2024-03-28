import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom' 
import DailyNews from './Components/DailyNews/DailyNews'
import News from './Components/News/News'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DailyNews/>} />
        <Route path='/search-news' element={<News/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App