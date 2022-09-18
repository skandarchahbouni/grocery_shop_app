import axios from "axios";
import CartProducts from "../component/cart/cart_products";
import BreadCrumb from "../component/shared/breadcrumb";
import Footer from "../component/shared/footer";
import NavBar from "../component/shared/navbar";

export default function Wishlist({ cart }) {
  return (
    <>
        <NavBar />
        <main>
            <BreadCrumb />
            <CartProducts />
        </main>
        <Footer />
    </>
    )
}

export const getServerSideProps = async ({ req }) => {

    let cart
    const options = {
        withCredentials: true,
        headers: {
            Cookie: req?.headers?.cookie ?? null
        }
    }

    try {
        const { data } = await axios.get("/cart", options)
        cart = data
    } catch (error) {
        if (error.response?.status === 403) {
            return {
                redirect : {
                    destination: '/signin'
                }
            }
        }
    }

    return {
        props: {
            cart
        }
    }
}
