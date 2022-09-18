import BreadCrumb from "../../component/shared/breadcrumb";
import CategoryTitle from "../../component/products/category_title";
import Pagination from "../../component/products/pagination";
import SideBar from "../../component/products/sidebar";
import ProductCard from "../../component/shared/product_card";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";
import SortBy from "../../component/products/sortby";
import axios from "axios";

export default function ProductsPage({ products }) {
    return (
        <>
            <NavBar />
            <main>
                <BreadCrumb />
                <div className="mt-8 mb-lg-14 mb-8">
                    <div className="container">
                        <div className="row gx-10">
                            <SideBar />
                            <section className="col-lg-9 col-md-12">
                                <CategoryTitle />
                                <SortBy />
                                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                                    {products.length > 0 && products.map(product => (
                                        <ProductCard 
                                            key={product.code_product}
                                            // price={product.price}
                                            // product_name={product.name}
                                            // category={product.category_name}
                                            // img={product.lien_photo}
                                            // quantity_in_stock={product.quantity_in_stock}
                                            // code_product={product.code_product}
                                            product={product}
                                        />
                                    ))
                                    }
                                </div>
                                <Pagination />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const { resolvedUrl } = ctx
    let products = []
    try {
        const { data } = await axios.get(resolvedUrl)
        products = data
    } catch (error) {
        
    }
    return {
        props:{
            products
        }
    }
}
