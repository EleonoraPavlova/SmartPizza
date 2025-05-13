import { ArrowUpDown } from 'lucide-react'
import { ReactElement } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Typography } from '@/shared/typography'

const SortPopover = (): ReactElement => {
  return (
    <Popover>
      <PopoverTrigger className='flex items-center gap-2 cursor-pointer'>
        <ArrowUpDown width={16} height={16} />
        Sort by
        <Typography className='text-primary'>popular</Typography>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here</PopoverContent>
    </Popover>
  )
}
export default SortPopover
