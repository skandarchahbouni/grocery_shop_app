import axios from "axios";
import BreadCrumb from "../component/shared/breadcrumb";
import Footer from "../component/shared/footer";
import NavBar from "../component/shared/navbar";
import WishListProducts from "../component/wishlist/wishlist_products";

export default function Wishlist({ wishlist }) {
  return (
    <>
        <NavBar />
        <main>
            <BreadCrumb />
            <WishListProducts wishlist={wishlist}/>
        </main>
        <Footer />
    </>
    )
}


export const getServerSideProps = async ({ req }) => {
    let wishlist = null
    const options = {
        withCredentials: true,
        headers: {
            Cookie: req?.headers?.cookie ?? null
        }
    }
    try {
        const { data } = await axios.get("/wishlist", options)
        wishlist = data
    } catch (error) {
        console.log(error)
        if (error.response?.status === 403) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/signin'
                }
            }
        }
    }

    console.log("wishlist -> ", wishlist)

    return {
        props: {
            wishlist 
        }
    }
}
