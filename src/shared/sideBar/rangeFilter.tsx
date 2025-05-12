import { ChangeEvent, memo, ReactElement } from 'react'

import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Typography } from '@/shared/typography'

interface Props {
  min: number
  max: number
  range: number[]
  onChange: (_newRange: number[]) => void
  onChangeInputMin: (_event: ChangeEvent<HTMLInputElement>) => void
  onChangeInputMax: (_event: ChangeEvent<HTMLInputElement>) => void
}

const RangeFilter = ({ min, max, range, onChange, onChangeInputMin, onChangeInputMax }: Props): ReactElement => {
  return (
    <div className='flex flex-col gap-2'>
      <Typography variant='h4'>Price</Typography>
      <div className='flex gap-3.5'>
        <Input
          placeholder='from'
          type='number'
          className='w-[90px] pl-2'
          min={min}
          value={range[0]}
          onChange={onChangeInputMin}
        />
        <Input
          placeholder='to'
          type='number'
          className='w-[90px] pl-2'
          max={max}
          value={range[1]}
          onChange={onChangeInputMax}
        />
      </div>
      <Slider max={max} min={min} step={1} className='mt-3' onValueChange={onChange} value={range} />
    </div>
  )
}

export default memo(RangeFilter)
