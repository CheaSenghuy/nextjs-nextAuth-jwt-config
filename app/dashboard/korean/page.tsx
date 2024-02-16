import Loading from '@/components/shared/Loading/Loading'
import ImageScroll from '@/components/shared/korean/ImageScroll'
import React, { Suspense } from 'react'



const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ImageScroll />

    </Suspense>
  )
}

export default Page