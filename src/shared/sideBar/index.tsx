'use client'
import { ChangeEvent, ReactElement } from 'react'

import Filter from '@/shared/sideBar/filter'
import RangeFilter from '@/shared/sideBar/rangeFilter'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'

interface Props {
  min: number
  max: number
  slider: number[]
  ingredientsFilterOptions: Record<string, string>
  filters: typeof SIDEBAR_FILTERS
  onChangeSlider: (_newRange: number[]) => void
  onChangeSearch: (_event: ChangeEvent<HTMLInputElement>) => void
  onChangeInputMin: (_event: ChangeEvent<HTMLInputElement>) => void
  onChangeInputMax: (_event: ChangeEvent<HTMLInputElement>) => void
}

const SideBar = ({
  slider,
  min,
  max,
  filters,
  ingredientsFilterOptions,
  onChangeSlider,
  onChangeInputMin,
  onChangeInputMax,
  onChangeSearch,
}: Props): ReactElement => {
  return (
    <div className='min-w-[244px] h-full flex flex-col gap-[30px]'>
      <Filter filters={filters} ingredientsFilterOptions={ingredientsFilterOptions} onChange={onChangeSearch} />
      <RangeFilter
        range={slider}
        onChange={onChangeSlider}
        min={min}
        max={max}
        onChangeInputMin={onChangeInputMin}
        onChangeInputMax={onChangeInputMax}
      />
    </div>
  )
}

export default SideBar
