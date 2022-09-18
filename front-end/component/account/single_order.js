import Link from "next/link"
import BASE_URL_IMAGES from "../../helpers/base_url_images"

export default function SingleOrderDetails({ order }) {
    const status = order.length > 0 ? order[0].completed : null
    const disabled = status == 'Completed'
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <h2 className="mb-6">Order #{order[0].id_order}</h2>

                <div className="table-responsive border-0">
                    <table className="table mb-0 text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th className="border-0">&nbsp;</th>
                                <th className="border-0"></th>
                                <th className="border-0">Product</th>
                                <th className="border-0">Code</th>
                                <th className="border-0">Category</th>
                                <th className="border-0">Quantity</th>
                                <th className="border-0">Price</th>
                                <th className="border-0">Actions</th>
                                <th className="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.length > 0 && order.map(item => (
                                <tr key={item.code_product}>


                                    <td class="align-middle border-top-0 w-0">
                                        <a href="#"> <img src={BASE_URL_IMAGES + "/" + item.lien_photo} alt="Ecommerce"
                                            class="icon-shape icon-xl" /></a>

                                    </td>
                                    <td className="align-middle border-top-0"></td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">{item.name}</a>
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">#{item.code_product}</a>
                                    </td>

                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">{item.category_name}</a>
                                    </td>

                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">{item.quantity}</a>
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">${item.price}</a>
                                    </td>
                                    <td className="align-middle border-top-0">
                                        {disabled ?
                                            <button style={{ "cursor": "pointer" }} className="btn btn-sm btn-warning" disabled>Add review</button>
                                            :
                                            <Link href={`/products/${item.code_product}`}>
                                                <button style={{ "cursor": "pointer" }} className="btn btn-sm btn-warning">Add review</button>
                                            </Link>
                                        }
                                    </td>
                                    <td className="text-muted align-middle border-top-0">
                                        <Link href={`/products/${item.code_product}`}>
                                            <a href="#" className="text-inherit"><i className="feather-icon icon-eye"></i></a>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
