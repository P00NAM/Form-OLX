import React from 'react'
import { FaArrowLeft, FaBackspace, FaBackward, FaBacon } from 'react-icons/fa'

const Header = () => {
  return (
    <div style={{width:'100%', height:'25%', zIndex:10, boxShadow:'revert-layer', background:'#f1f3f5', display:'flex', justifyContent:'left', alignItems:'center', padding:'30px 50px'}}>
      <FaArrowLeft/>
    </div>
  )
}

export default Header
