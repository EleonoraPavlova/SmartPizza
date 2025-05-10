import { ChangeEvent, ReactElement } from 'react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import CheckboxFilter from '@/shared/sideBar/checkboxFilter'
import RadioGroupFilter from '@/shared/sideBar/radioGroupFilter'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'
import { Typography } from '@/shared/typography'

interface Props {
  filters: typeof SIDEBAR_FILTERS
  ingredientsFilterOptions: Record<string, string>
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void
}

const Filter = ({ filters, ingredientsFilterOptions, onChange }: Props): ReactElement => {
  return (
    <div className='flex gap-[40px] flex-col'>
      {Object.entries(filters).map(([key, { label, type, options }]) => (
        <div
          className={cn('flex flex-col gap-2 pb-1', label === 'Ingredients' && 'max-h-80 overflow-auto scrollbar')}
          key={key}
        >
          {label === 'Filtration' ? (
            <Typography as='h2' variant='h2' className='mb-[20px]'>
              {label}
            </Typography>
          ) : (
            <>
              <Typography variant='h4' className={cn(label === 'Ingredients' && 'sticky top-0 bg-background z-10')}>
                {label}
              </Typography>
              {label === 'Ingredients' && (
                <div className='mx-3'>
                  <Input placeholder='Search...' className='pl-2' onChange={onChange} />
                </div>
              )}
            </>
          )}
          {type === 'checkbox' ? (
            <CheckboxFilter options={label === 'Ingredients' ? ingredientsFilterOptions : options} />
          ) : (
            <RadioGroupFilter options={options} />
          )}
        </div>
      ))}
    </div>
  )
}

export default Filter
