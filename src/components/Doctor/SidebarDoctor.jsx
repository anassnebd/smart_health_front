import React from 'react'
import './doctor.css'
import PersonImg from '../../assets/images/person.png'
import { Home, User, Search, PieChart,Key, Settings, Calendar, CheckSquare, MessageCircle, LogOut } from 'react-feather';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa'; 
import { BsPersonVcard } from 'react-icons/bs'; 

function SidebarDoctor() {
  return (
    <div className='w-2/12 bg-gray-100 h-screen flex flex-col'>
      <div className="flex center w-9/12 pt-10 pb-7">
        <img src={PersonImg} className='w-12 rounded-full' alt="Person" srcset="" />
        <div className='block pl-3'>
          <h1>Anass Nebdaoui</h1>
          <p className='font-sans text-sm -mt-1'>Doctor</p>
        </div>
      </div>
      <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <PieChart className='h-5' />
        <p className='ml-3 text-sm font-extralight'>Dashboard</p>
      </a>
      <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <Calendar className='h-5' />
        <p className='ml-3 text-sm'>Rendez Vous</p>
      </a>
      <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <BsPersonVcard className='text-xl ml-1'/>
        <p className='ml-3 text-sm'>Gestion des Patients</p>
      </a>
      <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <CheckSquare className='h-5' />
        <p className='ml-3 text-sm'>Evaluations</p>
      </a>
      <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <MessageCircle className='h-5' />
        <p className='ml-3 text-sm'>Communauté</p>
      </a>
      <div className='mt-auto mb-10'>
        <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
          <Settings className='h-5' />
          <p className='ml-3 text-sm'>Paramètres</p>
        </a>
        <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
          <LogOut className='h-5' />
          <p className='ml-3 text-sm'>Déconnexion</p>
        </a>
      </div>
    </div>
  )
}

export default SidebarDoctor