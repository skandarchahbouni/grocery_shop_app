import Categories from "../component/home/categories";
import Hero from "../component/home/hero";
import OurFeatures from "../component/home/our_features";
import Footer from "../component/shared/footer";
import NavBar from "../component/shared/navbar";
import PopularProducts from "../component/shared/popular_products";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <br />
        <Categories />
        <PopularProducts />
        <OurFeatures />
      </main>
      <Footer />
    </>
  )
}
