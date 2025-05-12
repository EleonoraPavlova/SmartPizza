import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Product } from '@/shared/productsCards/mockData'
import { Typography } from '@/shared/typography'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props): ReactElement => {
  const { id, name, title, desc, src, price } = product

  return (
    <div className='flex flex-col gap-2 w-[285px]'>
      <Link href={`/product/${id}`} className='py-[24px] px-[37px] bg-primary/30 rounded-2xl mb-2 h-[260px]'>
        <div className='relative w-[212px] h-[212px]'>
          <Image src={src} alt={name} fill sizes='(max-width: 768px) 100vw, 285px' className='rounded-2xl' />
        </div>
      </Link>
      <div className='mb-3'>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='subtitle2' gray>
          {desc}
        </Typography>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex gap-1.5'>
          <Typography variant='subtitle2'>from</Typography>
          <Typography as='h4' variant='h4'>
            {price}
          </Typography>
        </div>
        <Button variant='outline' className='w-[125px]'>
          <Plus size={16} />
          <Typography variant='subtitle2'>Add</Typography>
        </Button>
      </div>
    </div>
  )
}
export default ProductCard
