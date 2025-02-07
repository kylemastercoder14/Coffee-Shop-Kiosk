"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const SplashScreen = () => {
  const router = useRouter();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/get-started");
    }, 5000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <div className='bg-white flex flex-col items-center justify-center h-screen'>
      <Image src="/logo-welcome.png" alt='Welcome' width={300} height={300} />
    </div>
  )
}

export default SplashScreen
