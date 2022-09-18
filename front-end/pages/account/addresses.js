import axios from "axios";
import AccountAddresses from "../../component/account/account_addresses";
import AccountSideBar from "../../component/account/account_sidebar";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";

export default function AccountAddressesPage({ addresses }) {
  return (
    <>
      <NavBar />
      <main>
        <section className="container">
          <div className="row">
            <AccountSideBar />
            <AccountAddresses addresses={addresses} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { req } = ctx
  let addresses = []
  const options = {
    withCredentials: true,
    headers: {
      Cookie: req?.headers?.cookie ?? null
    }
  }

  try {
    const { data } = await axios.get('/addresses', options)
    addresses = data
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
      addresses
    }
  }
}