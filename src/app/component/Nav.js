import React from 'react'
import Link from 'next/link'
import Styles from '../../app/style/navbar.module.css'

function Nav() {
  return (
    <div >
        <nav>
            <ul className={Styles.nav}>
                <li className={Styles.list}>
                    <Link href='/' style={{textDecoration: 'none'}}>Home</Link>
                </li>
                <li className={Styles.list}>
                    <Link href='/movie' style={{textDecoration: 'none'}}>Movie</Link>
                </li>
                <li className={Styles.list}>
                    <Link href='/about' style={{textDecoration: 'none'}}>About</Link>
                </li>
                <li className={Styles.list}>
                    <Link href='/contact' style={{textDecoration: 'none'}}>Contact</Link>
                </li>
                </ul>
                </nav>
    </div>
  )
}

export default Nav