'use client'

import { Button } from '@/components/ui/button/button'

const Home = () => {
  const handleClick = () => {
    console.log('open')
  }

  return (
    <>
      Home
      <Button onClick={handleClick} variant='outline' className='font-[Atma]'>
        Open
      </Button>
    </>
  )
}

export default Home
