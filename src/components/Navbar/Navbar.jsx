import React, { useState } from 'react'
import style from  './navbar.module.css'
import Search from '../Search/Search'

import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {


  const [currentPage, setcurrentPage] = useState('home')

  const [isSignedin, setisSignedin] = useState(false)


  const handlePage=(page)=>{
    setcurrentPage(page)
  }
  return (

   

    <nav className={style.navbarMain}>

        <div className={style.navbarLeft}>

        <div className={style.logo}>


            <img src="burger.png" alt="" />


        

        </div>
           <Search/>
        </div>


        <div className={style.navbarRight}>
            
           

        <ul className={style.navbar}>
            <li className={currentPage==='home'?style.active:'' }  onClick={()=>handlePage('home')} >Home </li>
            <li className={currentPage==='menu'?style.active:'' }  onClick={()=>handlePage('menu')}>Menu</li>
            <li className={currentPage==='reviews'?style.active:'' }  onClick={()=>handlePage('reviews')}>Reviews</li>
            <li className={currentPage==='about'?style.active:'' }  onClick={()=>handlePage('about')}>About Us</li>
        </ul>

        {isSignedin?<FaCircleUser className={style.userIcon}/>
        :

        <Link to='signup' style={{color:'white',textDecoration:"none" }} href="">Sign Up</Link>
        }

        <  FaShoppingCart className={style.cartIcon}/>



         
        </div>
    </nav>








  )
}

export default Navbar