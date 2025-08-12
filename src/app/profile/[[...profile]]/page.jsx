import { UserProfile } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const profile = async () => {


  const user =await currentUser();

if(!user) redirect("/")
  return (
    <div>
   <h1 className='text-xl font-bold '>Welcome {user.firstName}! </h1>
      <UserProfile/>
   
    </div>
  )
}

export default profile
