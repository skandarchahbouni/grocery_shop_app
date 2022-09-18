import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './product_card'

export default function PopularProducts() {
    const [popularProducts, setpopularProducts] = useState([])
    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const { data } = await axios.get("/products?limit=5")
                setpopularProducts(data)
            } catch (error) {

            }
        }
        fetchPopularProducts()
    }, [])

    return (
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-6">
                        <h3 className="mb-0">Popular Products</h3>
                    </div>
                </div>
                <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                    {popularProducts.length > 0 && 
                        popularProducts.map(product => (
                            <ProductCard
                                 key={product?.code_product}
                                //  price={product?.price}
                                //  product_name={product?.name}
                                //  img={product?.lien_photo}
                                //  category={product?.category_name}
                                //  quantity_in_stock={product?.quantity_in_stock}
                                //  code_product={product.code_product}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
