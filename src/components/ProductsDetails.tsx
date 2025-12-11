import { Button, Card } from "antd"
import { useProduct } from "../zustand"
import { Navigate } from "react-router-dom"

const ProductsDetails = () => {
  const { product } = useProduct((state) => state)

  if(!product) 
    return <Navigate to="/products"/>

  return (
    <div className="w-6/12 mx-auto py-16">
            <Card cover={<img src={product.image} className="h-[350px] object-cover"/>}>
                <Card.Meta 
                    title={product.title}
                    description={product.description}
                />
                <Button size="large" type="primary" danger className="!w-full !mt-6">Checkout now</Button>
            </Card>
        </div>
  )
}

export default ProductsDetails