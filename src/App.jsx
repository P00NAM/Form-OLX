// RentPropertyForm.jsx
import React, { useState } from 'react';
import './App.css';
import RentPropertyForm from './RentPropertyForm';
import Header from './Header';


export default function App() {

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', width:"100%", padding:'0px'}}>
     <Header/>
     <h1 style={{fontSize:'24px' }}>POST YOUR AD</h1>
     <RentPropertyForm/>
     </div>
  );
}
