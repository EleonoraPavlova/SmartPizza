'use client'
import { ReactElement, useRef } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import ProductsCards from '@/shared/productsCards'
import { mockProducts } from '@/shared/productsCards/mockData'
import { Typography } from '@/shared/typography'
import { useCategoryStore } from '@/store/category'

interface Props {
  title: string
  id: string
}

const ProductListSection = ({ title, id }: Props): ReactElement => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategoryId)

  const ref = useRef<HTMLDivElement | null>(null)

  useIntersectionObserver(ref, () => {
    setActiveCategoryId(id)
  })

  return (
    <div ref={ref} className='flex flex-col gap-5 mb-6' id={id}>
      <Typography as='h2' variant='h2'>
        {title}
      </Typography>
      <ProductsCards productsData={mockProducts} />
    </div>
  )
}
export default ProductListSection
