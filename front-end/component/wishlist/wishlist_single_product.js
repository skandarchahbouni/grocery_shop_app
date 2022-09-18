import Link from "next/link"
import BASE_URL_IMAGES from "../../helpers/base_url_images"
import ConfirmRemoveFromWishList from "../modals/confirms/confirm_remove_from_wishlist"

export default function WishlistSingleProduct({ price, img, name, code_product, quantity_in_stock }) {
    return (
        <tr>
            <td className="align-middle">
                <a href="#"><img src={`${BASE_URL_IMAGES}/${img}`}
                    className="img-fluid icon-shape icon-xxl" alt="" /></a>

            </td>
            <td className="align-middle">
                <div>
                    <h5 className="fs-6 mb-0"><a href="#" className="text-inherit">{name}</a></h5>
                    <small>${price}</small>
                </div>
            </td>
            <td className="align-middle">$35.00</td>
            <td className="align-middle">
                {quantity_in_stock > 0 ?
                    <span className="badge bg-success">in stock</span>
                    :
                    <span class="badge bg-danger">out of stock</span>
                }

            </td>
            <td className="align-middle">
                <Link href={`/products/${code_product}`}>
                    <div className="btn btn-primary btn-sm">See details</div>
                </Link>
            </td>
            <td className="align-middle "><a href="#" className="text-muted" title="Delete">
                <ConfirmRemoveFromWishList code_product={code_product} />
            </a></td>
        </tr>
    )
}

