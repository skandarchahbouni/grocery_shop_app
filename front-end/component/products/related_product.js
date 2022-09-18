import React from 'react'
import ProductCard from '../shared/product_card'

export default function RelatedProducts() {
  return (
    <section className="my-lg-14 my-14">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Related Items</h3>
        </div>
      </div>
      <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </div>
  </section>
  )
}
