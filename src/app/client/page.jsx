"use client";
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'
import Loader from '../../components/Loader';

const ClientPage = () => {
const {isLoaded,user,isSignedIn} = useUser();
if(!user) redirect("/");
if(!isLoaded) Loader()
  return (
    <div className='h-full flex  flex-col font-[100] flex-center text-6xl'>
      Hello, {user.firstName} welcome to clerk
    </div>
  )
}

export default ClientPage
