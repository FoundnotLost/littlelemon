import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faHouse, faBowlFood, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <header className=' sticky top-0 p-10 flex-items-start max-w-7xl mx-auto xl:items-center bg-[#495e57]'>
      
            <div className=' flex flex-row items-center'>
                <a href="/home" role="button" className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faHouse }
                    style={{fontSize: '60', color: '#f4ce14'}} />
                </a>

                <a href="/menu" role="button"className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faBowlFood }
                    style={{ fontSize: '60', color: '#f4ce14'}}  />
                </a>

                <a href="/book" role="button" className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faCalendarCheck }
                    style={{fontSize: '60', color: '#f4ce14'}} />
                </a>

                <a href="/about" role="button"className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faBookOpen } 
                    style={{fontSize: '60', color: '#f4ce14'}} />
                </a>
            </div>
            <div>
            
            </div>
        
    </header>
  ) 
}

export default Header