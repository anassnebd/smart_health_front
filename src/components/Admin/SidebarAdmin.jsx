import React from 'react'
import PersonImg from '../../assets/images/person.png'
import './admin.css'
import { Home, User, Search } from 'react-feather';

function SidebarAdmin() {
  return (
    <div className='w-2/12 bg-gray-100 h-screen'>
        <div className="flex center w-9/12 pt-10">
            <img src={PersonImg} className='w-12 rounded-full' alt="Person" srcset="" />
            <div className='block pl-3'>
                <h1>Anass Nebdaoui</h1>
                <p className='font-sans text-sm -mt-1'>Administrateur</p>
            </div>
        </div>
        <Search />
    </div>
  )
}

export default SidebarAdmin