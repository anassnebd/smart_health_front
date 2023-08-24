import React,  { useState, useEffect } from 'react'
import SidebarDoctor from './SidebarDoctor';
import PersonImg from '../../assets/images/person.png'
import './doctor.css'
import { ResponsiveContainer, PieChart,CartesianGrid, Pie, Cell,BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';

const data = [
  { name: 'Men', value: 60 },
  { name: 'Women', value: 40 },
  
];

const data_bar = [
  { name: 'Category A', value: 40 },
  { name: 'Category B', value: 30 },
  { name: 'Category C', value: 20 },
  { name: 'Category D', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {data[index].name}
    </text>
  );
};


function Dashboard() {
  return (
    <div className='flex'>
        <SidebarDoctor/>
        <div className='w-10/12'>
          <div style={{ width: '400px', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKeyswzsq="value"
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={60}
                  fill="#8884d8"
                  paddingAngle={5}
                  label={renderCustomizedLabel}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: '90%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data_bar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
    </div>
  )
}

export default Dashboard