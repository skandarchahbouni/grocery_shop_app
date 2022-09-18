import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../helpers/constant";
import { open } from "../../states/slices/modal_slice";

export default function AccountOrders({ orders }) {
    const renderStatusComponent = (status) => {
        let style
        switch (status) {
            case "Processing":
                style = "badge bg-warning"
                break;
            case "Canceled":
                style = "badge bg-danger"
                break;
            case "Completed":
                style = "badge bg-primary"
                break
            case "Delivered":
                style = "badge bg-warning"
                break
            default:
                break;
        }
        return <span className={style}>{status}</span>
    }

    const dispatch = useDispatch()
    const router = useRouter()

    const handleCancelOrder = async (id_order) => {
        try {
            await axios.put(`/orders/${id_order}/cancel`)
            return router.reload()
        } catch (error) {
            if (error?.response?.staus === 403) return dispatch(open(SIGNIN))
        }
    }

    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <h2 className="mb-6">Your Orders</h2>

                <div className="table-responsive border-0">
                    <table className="table mb-0 text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th className="border-0">Order</th>
                                <th className="border-0">Date</th>
                                <th className="border-0">Items</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Total</th>
                                <th className="border-0"></th>
                                <th className="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 && orders.map(order => (
                                <tr key={order.id_order}>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">#{order.id_order}</a>

                                    </td>
                                    <td className="align-middle border-top-0">
                                        {order.date_order.slice(0, 19).replace('T', ' ')}
                                    </td>
                                    <td className="align-middle border-top-0">
                                        {order.items}
                                    </td>
                                    <td className="align-middle border-top-0">
                                        {renderStatusComponent(order.status)}
                                    </td>
                                    <td className="align-middle border-top-0">
                                        ${order.total}
                                    </td>
                                    <td className="align-middle border-top-0">
                                        {(order.status == "Processing" || order.status == "Delivered") &&
                                            <span onClick={() => handleCancelOrder(order.id_order)} className=" btn btn-danger btn-sm" style={{ "cursor": "pointer" }}>Cancel</span>
                                        }
                                    </td>
                                    <td className="text-muted align-middle border-top-0">
                                        <Link href={`/account/orders/${order.id_order}`}>
                                            <a className="text-inherit"><i className="feather-icon icon-eye"></i></a>
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
