import useSWR from "swr"
import axios from "axios"
import { Button, Card, Skeleton } from "antd"
import { CarOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const fetcher = async (url: string) => {
    try {
        const {data} = await axios.get(url)
        return data
        
    } catch (err) {
        if(err instanceof Error) {
            throw new Error(err.message)
        }
    }
}

const Products = () => {
    const navigate = useNavigate()
    const {data, error, isLoading} = useSWR("https://fakestoreapi.com/products", fetcher)
    
    const buyNow = (item: any) => {
        navigate(`/products/${item.title.split(" ").join("-")}`)
    }

    if(isLoading) 
        return <Skeleton active/>
    
    if(error)
        return <h1>{error.message}</h1>

  return (
    <div className="grid grid-cols-4 gap-12 w-10/12 mx-auto py-16">
        {
            data.map((item: any, index: any) => (
                <Card 
                    key={index}
                    cover={<img src={item.image} 
                    className="h-[150px] object-cover" />}
                    actions={[
                        <Button key="cart" type="primary" icon={<CarOutlined />}>Add to cart</Button>,
                        <Button key="buy" type="primary" danger onClick={() => buyNow(item)}>Buy now</Button>
                    ]}
                >
                    <Card.Meta 
                        title={item.title}
                        description={`$${item.price}`}
                    />
                </Card>
            ))
        }
    </div>
  )
}

export default Products