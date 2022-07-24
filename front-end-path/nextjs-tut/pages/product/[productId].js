import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <div>
      <h3>Product Detail Page {productId}</h3>
    </div>
  )
}

export default ProductDetail
