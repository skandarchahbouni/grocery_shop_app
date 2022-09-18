import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function SideBar() {

    const categories = ['Sweet & Salty', 'Fruit', 'Snacks & Munchies', 'Cream Biscuits', 'Cookies', 'Chicken & Meat']
    const manufacturers = ['Dmart', 'Mahboul', 'Terra', 'Kfc']
    const minRef = useRef()
    const maxRef = useRef()

    const router = useRouter()
    const { query } = router

    const handleManufacturerChanges = (e) => {
        let selectedManufacturer = query.manufacturer ? query.manufacturer.split(',') : []
        const isChecked = e.target.checked;
        const value = e.target.value
        if (isChecked) {
            selectedManufacturer.push(value)
        } else {
            selectedManufacturer = selectedManufacturer.filter(manufacturer => manufacturer !== value)
        }
        if (selectedManufacturer.length === 0) {
            delete query.manufacturer
            return router.push({
                query : {
                    ...query,
                    page : 1
                }
            })
        }
        router.push({
            query: {
                ...query,
                manufacturer: selectedManufacturer.join(','),
                page : 1
            }
        })
    }

    const handleCategoriesChanges = (e) => {
        let selectedCategories = query.categories ? query.categories.split(',') : []
        const isChecked = e.target.checked;
        const value = e.target.value
        if (isChecked) {
            selectedCategories.push(value)
        } else {
            selectedCategories = selectedCategories.filter(category => category !== value)
        }
        if (selectedCategories.length === 0) {
            delete query.categories
            return router.push({
                query : {
                    ...query,
                    page : 1
                }
            })
        }
        router.push({
            query: {
                ...query,
                categories: selectedCategories.join(','),
                page : 1
            }
        })
    }

    const handlePrice = () => {
        const min = minRef.current.value || null
        const max = maxRef.current.value || null
        if (min || max){
            return router.push({
                query : {
                    ...query,
                    price : `${min}-${max}`,
                    page : 1
                }
            })
        }
        // else 
        delete query.price
        return router.push({
            query : {
                ...query,
                page: 1
            }
        })
    }

    return (
        <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
            <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabIndex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">

                <div className="offcanvas-header d-lg-none">
                    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ps-lg-2 pt-lg-0">
                    <div className="mb-8">
                        <h5 className="mb-3">Categories</h5>
                        {categories.map(category =>
                            <div className="form-check mb-2" key={category}>
                                <input
                                    style={{"cursor" :"pointer"}}
                                    className="form-check-input"
                                    type="checkbox"
                                    value={category}
                                    id={category}
                                    defaultChecked={query.categories && query.categories.split(',').find(c => c == category)}
                                    onChange={handleCategoriesChanges}
                                />
                                <label className="form-check-label" htmlFor={category} style={{"cursor" :"pointer"}}>
                                    {category}
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="mb-8">

                        <h5 className="mb-3">Manufacturer</h5>
                        <div className="my-4">
                            <input type="search" className="form-control" placeholder="Search by manufacturer" />
                        </div>

                        {manufacturers.map(manufacturer =>
                            <div className="form-check mb-2" key={manufacturer}>
                                <input
                                    style={{"cursor" :"pointer"}}
                                    defaultChecked={query.manufacturer && query.manufacturer.split(',').find(m => m == manufacturer)}
                                    className="form-check-input"
                                    type="checkbox"
                                    value={manufacturer}
                                    id={manufacturer}
                                    onChange={handleManufacturerChanges}
                                />
                                <label className="form-check-label" htmlFor={manufacturer} style={{"cursor" :"pointer"}}>
                                    {manufacturer}
                                </label>
                            </div>
                        )}

                    </div>
                    <div className="mb-8">
                        <h5 className="mb-3">Price</h5>
                        <div>
                            <div id="priceRange" className="mb-3"></div>
                            <div className="d-flex">
                                <input ref={minRef} defaultValue={query.price && query.price.split('-')[0]} type="number" className="form-control w-50 me-1" placeholder="min"/>
                                <input ref={maxRef} defaultValue={query.price && query.price.split('-')[1]} type="number" className="form-control w-50" placeholder="max"/>
                                <button className="btn btn-primary  ms-1" onClick={handlePrice}><i className="feather-icon icon-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">

                        <h5 className="mb-3">Rating</h5>
                        <div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="ratingFive" />
                                <label className="form-check-label" htmlFor="ratingFive">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="ratingFour" defaultChecked />
                                <label className="form-check-label" htmlFor="ratingFour">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star text-warning"></i>
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="ratingThree" />
                                <label className="form-check-label" htmlFor="ratingThree">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star-fill text-warning "></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="ratingTwo" />
                                <label className="form-check-label" htmlFor="ratingTwo">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="ratingOne" />
                                <label className="form-check-label" htmlFor="ratingOne">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className="mb-8 position-relative">
                        <div className="position-absolute p-5 py-8">
                            <h3 className="mb-0">Fresh Fruits </h3>
                            <p>Get Upto 25% Off</p>
                            <a href="#" className="btn btn-dark">Shop Now<i className="feather-icon icon-arrow-right ms-1"></i></a>
                        </div>
                        <img src="/images/banner/assortment-citrus-fruits.png" alt=""
                            className="img-fluid rounded-3" />
                    </div>
                </div>
            </div>
        </aside>
    )
}
