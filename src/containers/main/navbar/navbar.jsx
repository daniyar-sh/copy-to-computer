import React from 'react'
import { Link } from 'react-router-dom'





function Navbar ({onSearch}) {

  return (
    <div className='navWrapper'>
       <div className='nav'>
       <div className='navList'>
          <Link to='/search'><p  className='navP'>ПОИСК РЕСТОРАНА</p></Link> 
        </div>
        <div className='navList'>
         <Link to='/stock'><p className='navP'>АФИША И АКЦИИ</p></Link>   
        </div>
        <div className='navList'>
            <p className='navP'>СООБЩЕСТВО</p>
        </div>
        <div className='navList'>
            <p className='navP'>РЕЙТИНГИ</p>
        </div>
        <div className='navList'>
            <p className='navP'>ОБЗОРЫ</p>
        </div>
        <div  className='navList'>
            <input className='navInput' placeholder='поиск' onChange={(e) => onSearch(e) }/>
        </div>
        
       </div>
    </div>
  )
}

export default Navbar