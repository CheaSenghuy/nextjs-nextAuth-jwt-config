
import LoginForm from '@/components/shared/Login/LoginForm'
import { BackgroundBeams } from '@/components/ui/background-beams'

import React, { Suspense } from 'react'

const Page = () => {
    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
                <BackgroundBeams />
            </Suspense>
        </section>

    )
}

export default Page