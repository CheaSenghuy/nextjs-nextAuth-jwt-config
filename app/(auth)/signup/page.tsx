import SignUp from '@/components/shared/Signup/SignUp'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Boxes } from '@/components/ui/background-boxes'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
        <BackgroundBeams />
      </Suspense>
    </section>
  )
}

export default Page