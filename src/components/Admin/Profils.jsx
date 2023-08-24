import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import './admin.css'
import DataTable from './TableData';

const data = [
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
  { name: 'John Doe', age: 25, email: 'john@example.com', gender:'M' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com', gender:'F' },
];

function Profils() {
    
  return (
    <div className='flex'>
        <SidebarAdmin/>
        <div className='w-10/12'>
        <div>
            <h1>Liste des différents profils</h1>
            <DataTable data={data} />
        </div>
        </div>
    </div>
  )
}

export default Profils