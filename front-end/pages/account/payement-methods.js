import axios from "axios";
import AccountAddresses from "../../component/account/account_addresses";
import AccountNotifications from "../../component/account/account_notifications";
import AccountOrders from "../../component/account/account_orders";
import SettingsAccount from "../../component/account/account_settings";
import AccountSideBar from "../../component/account/account_sidebar";
import AccountPayementMethods from "../../component/account/payement_methods";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";

export default function AccountNotificationsPage() {
    return (
        <>
            <NavBar />
            <main>
                <section className="container">
                    <div className="row">
                        <AccountSideBar />
                        <AccountPayementMethods />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}



export const getServerSideProps = async (ctx) => {
    const { req } = ctx
    const options = {
      withCredentials: true,
      headers: {
        Cookie: req?.headers?.cookie ?? null
      }
    }
    try {
      await axios.get('/authorization', options)
    } catch (error) {
      if (error?.response?.status == 403) {
        return {
          redirect: {
            destination: '/signin'
          }
        }
      }
    }
    return {
      props: {
        data: null
      }
    }
  }