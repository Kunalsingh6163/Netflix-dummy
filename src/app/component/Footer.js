import React from 'react'
import Styles from '../../app/style/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'

function Footer() {
  return (
    <div className={Styles.footer}>
<footer>
  <p>Author: Hi Ref to:
  <a href="mailto:singhkunal2211997@gmail.com">singhkunal2211997@gmail.com</a></p>
  <p style={Styles.txt}>NetHipHop
        <Link href='/' >
         <Image src= {logo} width={65} height={20} alt='logo' /> 
    </Link>
    </p>
</footer>
    </div>
  )
}

export default Footer