import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { LoginButton } from '@/components/ui/auth/login-button';
const font=Poppins({
  subsets:["latin"],
  weight:["600"]
})
const Page = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-screen">
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl text-white font-semibold',font.className)}>
          🔐Auth
        </h1>
        <p className='text-white font-bold'>
          A simple authentication process
        </p>
      </div>
      <LoginButton >
      <Button variant="secondary" size="lg" className='mt-5'>
        Sign-In
      </Button>
      </LoginButton>
    </main>
  );
};

export default Page;
