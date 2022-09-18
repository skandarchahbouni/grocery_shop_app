import axios from "axios";
import ProductDetails from "../../component/products/product_details";
import SingleProductCard from "../../component/products/single_product_card";
import BreadCrumb from "../../component/shared/breadcrumb";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";
import PopularProducts from "../../component/shared/popular_products";

export default function ProductDetailsPage({ product }) {
    return (
        <>
            <NavBar />
            <main>
                <BreadCrumb />
                <SingleProductCard product={product} />
                <ProductDetails product={product}/>
            </main>
            <PopularProducts />
            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const code_product = ctx?.params?.id
    let product

    try {
        const { data } = await axios.get(`/products/${code_product}`)
        product = data
    } catch (error) {
        if (error?.response?.status === 404) {
            return {
                redirect: {
                    destination: '/404'
                }
            }
        }
    }

    return {
        props: {
            product
        }
    }
}
