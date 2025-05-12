import { Product } from '@/shared/productsCards/mockData'
import ProductCard from '@/shared/productsCards/productCard'

interface Props {
  productsData: Product[]
}

const ProductsCards = ({ productsData }: Props) => {
  return (
    <div className='flex flex-wrap gap-12'>
      {productsData.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductsCards
