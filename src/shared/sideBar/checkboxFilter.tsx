import { ReactElement } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Typography } from '@/shared/typography'

interface Props {
  options: Record<string, string>
}

const CheckboxFilter = ({ options }: Props): ReactElement => {
  const optionEntries = Object.entries(options)

  return (
    <>
      {optionEntries.map(([value, label]) => (
        <div key={value} className='flex items-center space-x-2'>
          <Checkbox value={value} id={value} />
          <Typography as='label' htmlFor={value}>
            {label}
          </Typography>
        </div>
      ))}
    </>
  )
}

export default CheckboxFilter
