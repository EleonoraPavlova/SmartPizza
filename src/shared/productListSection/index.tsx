import ProductsCards from '@/shared/productsCards'
import { mockProducts } from '@/shared/productsCards/mockData'
import { Typography } from '@/shared/typography'

interface Props {
  title: string
}

const ProductListSection = ({ title }: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <Typography as='h2' variant='h2'>
        {title}
      </Typography>
      <ProductsCards productsData={mockProducts} />
    </div>
  )
}
export default ProductListSection
