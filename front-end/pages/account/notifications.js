import axios from "axios";
import AccountNotifications from "../../component/account/account_notifications";
import AccountSideBar from "../../component/account/account_sidebar";
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
                        <AccountNotifications />
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