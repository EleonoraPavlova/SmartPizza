'use client'

import { useState } from 'react'

import { Card } from '@/shared/card'
import CategoriesTabs from '@/shared/categoriesTabs/categoriesTabs'
import { CATEGORIES } from '@/shared/categoriesTabs/categoriesTabs.const'
import { Typography } from '@/shared/typography'

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0].value)

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All pizzas
      </Typography>
      <CategoriesTabs tabs={CATEGORIES} onChange={setActiveTab} activeTab={activeTab} />
    </Card>
  )
}

export default Home
