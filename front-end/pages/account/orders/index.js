import axios from "axios";
import AccountOrders from "../../../component/account/account_orders";
import AccountSideBar from "../../../component/account/account_sidebar";
import Footer from "../../../component/shared/footer";
import NavBar from "../../../component/shared/navbar";

export default function AccountOrdersPage({ orders }) {
    return (
        <>
            <NavBar />
            <main>
                <section className="container">
                    <div className="row">
                        <AccountSideBar />
                        <AccountOrders orders={orders} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    let orders = []
    const { req } = ctx
    const options = {
        withCredentials: true,
        headers: {
            Cookie: req?.headers?.cookie ?? null
        }
    }
    try {
        const { data } = await axios.get("/orders", options)
        orders = data
    } catch (error) {
        if (error?.response?.status === 403) {
            return {
                redirect: {
                    destination: '/signin'
                }
            }
        }
        console.log('error')
    }
    return {
        props: {
            orders
        }
    }
}