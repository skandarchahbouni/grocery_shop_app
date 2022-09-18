import BreadCrumb from "../../component/shared/breadcrumb";
import Footer from "../../component/shared/footer";
import NavBar from "../../component/shared/navbar";
import StoreCard from "../../component/store/store_card";

export default function StoresPage() {
  return (
    <>
      <NavBar />
      <main>
        <BreadCrumb />
        <section className="mt-8 mb-lg-14 mb-8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <h6>We have <span className="text-primary">36</span> vendors now</h6>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
              <StoreCard />
              <StoreCard />
              <StoreCard />
              <StoreCard />
              <StoreCard />
              <StoreCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
