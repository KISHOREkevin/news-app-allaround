import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  let [menu, setMenu] = useState(false);
  let menuHandler = () => {
    setMenu(!menu);
  }
  return (
    <div className='bg-secondary p-3 shadow-lg'>
      <nav className='lg:flex block'>
        <div className='lg:flex-1 inline-block' >
          <h1 className='text-3xl font-bold '>All around</h1>
        </div>

        <>
          {menu ?
            <>
              <button className='lg:hidden block p-2 float-end rounded-md bg-tertiary text-white' onClick={menuHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </button>
              <ul className=' lg:space-x-2 space-x-0 p-2 lg:flex block'>

                <li className='p-2  bg-tertiary rounded-md text-white hover:bg-white hover:text-black lg:mb-0 mb-2 text-center '><Link to="/" className=''>Top News</Link></li>
                <li className='p-2 bg-tertiary rounded-md text-white hover:bg-white hover:text-black text-center'><Link to="/search-news" className=''>Search News</Link></li>

              </ul>
            </>

            :
            <>
              <button className='lg:hidden block p-2 float-end' onClick={menuHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </button>
              <ul className=' lg:space-x-2 space-x-0 p-2 lg:flex hidden'>

                <li className='p-2  bg-tertiary rounded-md text-white hover:bg-white hover:text-black lg:mb-0 mb-2 text-center '><Link to="/" className=''>Top News</Link></li>
                <li className='p-2 bg-tertiary rounded-md text-white hover:bg-white hover:text-black text-center'><Link to="/search-news" className=''>Search News</Link></li>

              </ul>
            </>


          }
        </>

      </nav>
    </div>
  )
}

export default Navbar