import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex gap-6 flex-col flex-center h-screen'>
      <h2 className='font-medium text-md'>Requested Page Couldn't Found😢</h2>
     
      <Link href="/" className='font-medium text-lg cursor-pointer border-3 hover:border-blue-400  border-blue-500 px-4 py-2 text-white rounded-lg inline-block'>Return Home</Link>
    </div>

  )
}


