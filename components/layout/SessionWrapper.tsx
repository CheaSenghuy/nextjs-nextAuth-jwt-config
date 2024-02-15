"use client";
import { SessionProvider } from "next-auth/react"
import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient({

});

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <SessionProvider  >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default SessionWrapper