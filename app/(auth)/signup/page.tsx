import Loading from '@/components/shared/Loading/Loading'
import SignUp from '@/components/shared/Signup/SignUp'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Boxes } from '@/components/ui/background-boxes'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <section>
      <Suspense fallback={ <Loading/> }>
        <SignUp />
        <BackgroundBeams />
      </Suspense>
    </section>
  )
}

export default Page