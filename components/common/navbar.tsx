import MobileSidebar from '@/app/(dashboard)/_components/mobile-sidebar'
import React from 'react'

const NavBar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
     <MobileSidebar />
    </div>
  )
}

export default NavBar
