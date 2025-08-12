import { GoogleOneTap, PricingTable, SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex flex-center h-full'>
    <SignIn afterSignOutUrl="/"/>
  </div> 
}