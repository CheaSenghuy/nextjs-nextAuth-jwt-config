
import { Button } from '@/components/ui/button';
import Link from 'next/link'

import React from 'react'

const NavBar = () => {


    return (
        <div className='flex gap-5 px-5'>
            <Link href={`/dashboard/korean`} className='text-2xl border-b' >
        
                    Korean
                </Link>
        </div>
    )
}

export default NavBar