import axios from "axios";
import AccountSideBar from "../../../component/account/account_sidebar";
import SingleOrderDetails from "../../../component/account/single_order";
import Footer from "../../../component/shared/footer";
import NavBar from "../../../component/shared/navbar";

export default function SingleOrderPage({ order }) {
    return (
        <>
            <NavBar />
            <main>
                <section className="container">
                    <div className="row">
                        <AccountSideBar />
                        <SingleOrderDetails order={order}/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    let order 
    const { req } = ctx
    const { id } = ctx.params 
    if (!Number(id)){
        return {
            redirect: {
                destination: '/signin'
            }
        }
    }
    const options = {
        withCredentials: true,
        headers: {
            Cookie: req?.headers?.cookie ?? null
        }
    }
    try {
        const { data } = await axios.get(`/orders/${id}`, options)
        order = data
    } catch (error) {
        if (error?.response?.status === 403) {
            return {
                redirect: {
                    destination: '/signin'
                }
            }
        }
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
            order
        }
    }
}