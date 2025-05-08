'use client'

import { ReactElement, useState } from 'react'

import { Card } from '@/shared/card'
import { CATEGORIES } from '@/shared/categoriesTabs/categoriesTabs.const'
import SideBar from '@/shared/sideBar'
import TopBar from '@/shared/topBar'
import { Typography } from '@/shared/typography'

const Home = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0].value)

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All pizzas
      </Typography>
      <TopBar activeTab={activeTab} tabs={CATEGORIES} onChange={setActiveTab} />
      <div className='mt-7'>
        <SideBar />
        <div />
      </div>
    </Card>
  )
}

export default Home
