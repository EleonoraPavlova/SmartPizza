import { ReactElement } from 'react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Typography } from '@/shared/typography'

interface Props {
  options: Record<string, string>
}

const RadioGroupFilter = ({ options }: Props): ReactElement => {
  const optionEntries = Object.entries(options)

  return (
    <RadioGroup defaultValue={optionEntries[0][0]}>
      {optionEntries.map(([value, label]) => (
        <div key={value} className='flex items-center space-x-2'>
          <RadioGroupItem value={value} id={value} />
          <Typography as='label' htmlFor={value}>
            {label}
          </Typography>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupFilter
