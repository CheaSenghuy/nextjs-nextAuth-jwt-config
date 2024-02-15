import LogoutButton from '@/components/shared/LogoutButton'
import { WelcomeToKorean } from '@/components/shared/Welcome/WelcomeToKorean'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { Button } from '@/components/ui/moving-border'
import { TextRevealCard } from '@/components/ui/text-reveal-card'
import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import React from 'react'

const Page = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "Dashboard.",
      className: "text-[#f13c77] dark:text-[#b5c6e0]",
    },
  ];
  return (
    <div className="h-screen py-20 w-full z-0">
      <div className='flex justify-end px-20 flex-1 flex-wrap '>
        <LogoutButton />
      </div>
       <TypewriterEffectSmooth words={words} className='flex justify-center' />
      <WelcomeToKorean />
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <LayoutGrid cards={cards} />
      </div>
    </div>
  )
}

export default Page




const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/premium-photo/mount-fuji-cherry-blossom-trees-spring-japanese-landscape-illustration_691560-7640.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/premium-photo/mount-fuji-cherry-blossom-trees-spring-japanese-landscape-illustration_691560-7640.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/premium-photo/mount-fuji-cherry-blossom-trees-spring-japanese-landscape-illustration_691560-7640.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/premium-photo/mount-fuji-cherry-blossom-trees-spring-japanese-landscape-illustration_691560-7640.jpg",
  },
];