'use client'

import { ChangeEvent, ReactElement, useCallback, useState } from 'react'

import { Card } from '@/shared/card'
import { CATEGORIES } from '@/shared/categoriesTabs/categoriesTabs.const'
import ProductListSection from '@/shared/productListSection'
import SideBar from '@/shared/sideBar'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'
import TopBar from '@/shared/topBar'
import { Typography } from '@/shared/typography'
import { useCategoryStore } from '@/store/category'

const Home = (): ReactElement => {
  const min = 100
  const max = 1000
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategoryId)

  const [slider, setSlider] = useState<number[]>([min, max])
  const [ingredientsFilterOptions, setIngredientsFilterOptions] = useState<Record<string, string>>(
    SIDEBAR_FILTERS.INGREDIENTS.options
  )
  const [_, setSearch] = useState('')

  const sliderChangeHandler = (newRange: number[]) => {
    setSlider(newRange)
  }

  const onChangeInputMinHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      if (!isNaN(value) && value <= slider[1] && value >= min) {
        setSlider([value, slider[1]])
      }
    },
    [slider, min]
  )

  const onChangeInputMaxHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      if (!isNaN(value) && value >= slider[0] && value <= max) {
        setSlider([slider[0], value])
      }
    },
    [slider, max]
  )

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearch(query)

    const filtered = Object.entries(SIDEBAR_FILTERS.INGREDIENTS.options)
      .filter(([_, value]) => value.toLowerCase().includes(query))
      .sort(([valueA], [valueB]) => {
        const indexA = valueA.toLowerCase().indexOf(query)
        const indexB = valueB.toLowerCase().indexOf(query)

        if (indexA === indexB) {
          return valueA.localeCompare(valueB)
        }

        return indexA - indexB
      })

    const sortedFiltered = Object.fromEntries(filtered)

    setIngredientsFilterOptions(sortedFiltered)
  }

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All pizzas
      </Typography>
      <TopBar tabs={CATEGORIES} onChange={setActiveCategoryId} />
      <div className='mt-7 flex gap-[48px]'>
        <SideBar
          min={min}
          max={max}
          slider={slider}
          filters={SIDEBAR_FILTERS}
          ingredientsFilterOptions={ingredientsFilterOptions}
          onChangeSlider={sliderChangeHandler}
          onChangeSearch={searchHandler}
          onChangeInputMin={onChangeInputMinHandler}
          onChangeInputMax={onChangeInputMaxHandler}
        />
        <div className='flex-1'>
          <ProductListSection title='Pizzas' id='pizzas' />
          <ProductListSection title='Salads' id='salads' />
          <ProductListSection title='Breakfast' id='breakfast' />
        </div>
      </div>
    </Card>
  )
}

export default Home
