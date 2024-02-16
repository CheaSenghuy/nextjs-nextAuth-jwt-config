
import Loading from '@/components/shared/Loading/Loading'
import LoginForm from '@/components/shared/Login/LoginForm'
import { BackgroundBeams } from '@/components/ui/background-beams'

import React, { Suspense } from 'react'

const Page = () => {
    return (
        <section>
            <Suspense fallback={ <Loading/> }>
                <LoginForm />
                <BackgroundBeams />
            </Suspense>
        </section>

    )
}

export default Page