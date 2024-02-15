"use client"

import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

const LogoutButton = () => {
    return (
        <Button onClick={() => {
            signOut()
            toast.success("Logout Successfully.")
        }}>
            Logout
        </Button>
    )
}

export default LogoutButton