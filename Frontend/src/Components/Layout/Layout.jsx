import React from 'react'
import { Children } from 'react'

const Layout = ({ children }) => {
  return (
    <div className=' bg-zinc-900'>
      <div className='h-xl w-xl border-blue-200 border-3 rounded-2xl m-20'>
      {children}

      </div>
    </div>
  )
}

export default Layout