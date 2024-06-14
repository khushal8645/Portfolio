import React, { useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {HiOutlineBookmark} from "react-icons/hi";
import {RiServiceFill} from "react-icons/ri";
import {AiFillContacts} from "react-icons/ai";



const Nav = () => {
  const [activenav,setactivenav]=useState('#');
  return (
   <nav>
    <a href='#' className={activenav==='#'?'active':''}><AiOutlineHome/></a>
    <a href='#about' onClick={()=> setactivenav('#about')}  className={activenav==='#about'?'active':''}><AiOutlineUser/></a>
    <a href='#skill' onClick={()=> setactivenav('#skill')}  className={activenav==='#skill'?'active':''}><HiOutlineBookmark/></a>
    <a href='#portfolio' onClick={()=> setactivenav('#portfolio')}  className={activenav==='#porfolio'?'active':''}><RiServiceFill/></a>
    <a href='#contact'  onClick={()=> setactivenav('#contact')}  className={activenav==='#conatct'?'active':''}><AiFillContacts/></a>
   </nav>
  )
}

export default Nav
