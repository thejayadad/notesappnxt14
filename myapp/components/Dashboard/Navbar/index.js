import Logo from '@/components/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'

const Navbar = async () => {
  const user = await getServerUser()
  return (
    <header className='px-4 py-8'>
      <nav className='flex justify-between mx-auto max-w-screen-lg'>
        <Logo />
        <div className='flex gap-4'>
          <AuthLinks user={user} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar