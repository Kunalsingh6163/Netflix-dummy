import React from 'react'
import Image from 'next/image'
import Nlogo from '../../../public/Nlogo.png'
import Styles from '../../app/style/navbar.module.css'
import Link from 'next/link'
import Nav from './Nav'

function Header() {


  return (
    <div>
    <header className={Styles.appbar}>
    <Link href='/' className={Styles.img}>
         <Image src= {Nlogo} width={50} height={50} alt='logo' /> 
    </Link>
    <Nav />
    </header>    
    </div>
  )
}

export default Header