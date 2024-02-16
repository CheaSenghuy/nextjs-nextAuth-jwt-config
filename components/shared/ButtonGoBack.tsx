"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';



const ButtonGoBack = () => {
    const router = useRouter();
    
    return (
        <Button className='' onClick={() => router.back()} >
            Back
        </Button>
    )
}

export default ButtonGoBack