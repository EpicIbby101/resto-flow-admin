import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      This page is protected via Clerk!
    </div>
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
    </div>
  )
}
