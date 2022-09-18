import BreadCrumb from "../../component/shared/breadcrumb";
import SortBy from "../../component/products/sortby";
import Pagination from "../../component/products/pagination";
import SideBar from "../../component/products/sidebar";
import ProductCard from "../../component/shared/product_card";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";
import ShopTitle from "../../component/store/shop_title";

export default function ProductsPage() {
    return (
        <>
            <NavBar />
            <main>
                <BreadCrumb />
                <div className="mt-8 mb-lg-14 mb-8">
                    <div className="container">
                        <div className="row gx-10">
                            <SideBar />
                            <section class="col-lg-9 col-md-12">
                                <ShopTitle />
                                <SortBy />
                                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
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
