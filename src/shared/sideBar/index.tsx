import { ChangeEvent, ReactElement, useCallback, useState } from 'react'

import Filter from '@/shared/sideBar/filter'
import RangeFilter from '@/shared/sideBar/rangeFilter'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'

const SideBar = (): ReactElement => {
  const min = 100
  const max = 1000
  const [slider, setSlider] = useState([min, max])

  const sliderChangeHandler = (newRange: number[]) => {
    setSlider(newRange)
  }

  const onChangeInputMin = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      if (!isNaN(value) && value <= slider[1] && value >= min) {
        setSlider([value, slider[1]])
      }
    },
    [slider, min]
  )

  const onChangeInputMax = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      if (!isNaN(value) && value >= slider[0] && value <= max) {
        setSlider([slider[0], value])
      }
    },
    [slider, max]
  )

  return (
    <div className='min-w-[244px] h-full flex flex-col gap-[30px]'>
      <Filter filters={SIDEBAR_FILTERS} />
      <RangeFilter
        range={slider}
        onChange={sliderChangeHandler}
        min={min}
        max={max}
        onChangeInputMin={onChangeInputMin}
        onChangeInputMax={onChangeInputMax}
      />
    </div>
  )
}

export default SideBar
