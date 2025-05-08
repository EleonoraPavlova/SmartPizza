import { ReactElement } from 'react'

import CheckboxFilter from '@/shared/sideBar/checkboxFilter'
import RadioGroupFilter from '@/shared/sideBar/radioGroupFilter'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'
import { Typography } from '@/shared/typography'

interface Props {
  filters: typeof SIDEBAR_FILTERS
}

const Filter = ({ filters }: Props): ReactElement => {
  return (
    <div className='flex gap-[40px] flex-col'>
      {Object.entries(filters).map(([key, { label, type, options }]) => (
        <div className='flex flex-col gap-3' key={key}>
          {label === 'Filtration' ? (
            <Typography as='h2' variant='h2' className='mb-[20px]'>
              {label}
            </Typography>
          ) : (
            <Typography variant='h4'>{label}</Typography>
          )}
          {type === 'checkbox' ? <CheckboxFilter options={options} /> : <RadioGroupFilter options={options} />}
        </div>
      ))}
    </div>
  )
}

export default Filter
