import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faHouse, faBowlFood, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Logo from "./Logo.jpg"
function Header() {
  return (
    <header className=' sticky top-0 p-10 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20 bg-white'>
      
            <div className=' flex flex-row items-center cursor-pointer'>
                <a href="/home" role="button" className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faHouse }
                    style={{fontSize: '40', color: '#f4ce14'}} />
                </a>

                <a href="/menu" role="button"className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faBowlFood }
                    style={{ fontSize: '40', color: '#f4ce14'}}  />
                </a>

                <a href="/book" role="button" className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faCalendarCheck }
                    style={{fontSize: '40', color: '#f4ce14'}} />
                </a>

                <a href="/about" role="button"className='p-5'>
                    <FontAwesomeIcon 
                    icon={ faBookOpen } 
                    style={{fontSize: '40', color: '#f4ce14'}} />
                </a>
            </div>
            <div>
            <Image src={Logo} width="250" height="250" alt='Logo'/>
            </div>
        
    </header>
  ) 
}

export default Header