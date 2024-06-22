import React from 'react'
import Link from '../../node_modules/next/link'


function Navbar() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/price'>Price</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
