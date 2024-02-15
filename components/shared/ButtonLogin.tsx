"use client"
import { signIn } from 'next-auth/react';
import React from 'react'
import { Button } from '../ui/moving-border';
import { useRouter } from 'next/navigation';

const ButtonLogin = () => {
  const router= useRouter();
  return (
    <div className='flex gap-2'>
    <Button
    onClick={() => {
      signIn();
    }}
  >
    Login
  </Button>
  <Button
  onClick={() => {
    router.push('signup');
  }}
  borderRadius="2rem"
>
  Signup
</Button>
</div>
  )
}

export default ButtonLogin