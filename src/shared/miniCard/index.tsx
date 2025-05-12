import { ArrowRight, ShoppingCart } from 'lucide-react'
import { ReactElement } from 'react'

import { Button } from '@/components/ui/button'

type Props = {
  count: number
  sum: number
}

const MiniCard = ({ count, sum }: Props): ReactElement => {
  return (
    <Button variant='default' className='group relative'>
      <b>{sum}</b>
      <span className='h-full w-[1px] bg-background mx-2' />
      <span className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
        <ShoppingCart width={16} height={16} className='relative' strokeWidth={2} />
        {count}
      </span>
      <ArrowRight
        width={16}
        height={16}
        className='absolute right-5 transition duration-300
          -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
      />
    </Button>
  )
}

export default MiniCard
