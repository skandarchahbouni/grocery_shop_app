import { useSelector } from "react-redux"
import WishlistProduct from "./wishlist_single_product"

export default function WishListProducts() {
    const wishlist = useSelector(state => state.wishlist.value)

    return (
        <section className="mt-8 mb-14">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-8">
                            <h1 className="mb-1">My Wishlist</h1>
                            <p>There are 5 products in this wishlist.</p>
                        </div>
                        <div>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-light">
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlist.length > 0 && wishlist.map(product => 
                                            <WishlistProduct 
                                                key={product.code_product}
                                                price={product.price}
                                                img={product.lien_photo}
                                                name={product.name}
                                                code_product={product.code_product}
                                                quantity_in_stock={product.quantity_in_stock}
                                            />
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
