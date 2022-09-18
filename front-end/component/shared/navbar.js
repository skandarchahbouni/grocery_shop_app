import { useDispatch, useSelector } from "react-redux"
import { open } from "../../states/slices/modal_slice"
import { LOCATION, SIGNIN } from "../../helpers/constant"
import { addToWishlist, removeFromWishlist, initilizeWishlist } from "../../states/slices/wishlist_slice"
import { useEffect } from 'react'
import axios from 'axios'
import { initilizeCart } from "../../states/slices/cart_slice"
import Link from "next/link"

export default function NavBar() {

    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value)
    let itemsInCart = 0
    cart.forEach(item => {
        itemsInCart += item.quantity
    });

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchWishlistAndCart = async () => {
            try {
                const { data } = await axios.get("/wishlist")
                const response = await axios.get("/cart")
                dispatch(initilizeWishlist(data)) && dispatch(initilizeCart(response.data))
            } catch (error) {

            }
        }
        fetchWishlistAndCart()
    }, [])



    return (
        <>
            <header>
                <div className="bg-light py-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 text-center text-md-start"><span> Super Value Deals - Save more with coupons</span>
                            </div>
                            <div className="col-6 text-end d-none d-md-block">
                                <div className="dropdown">
                                    <a className="dropdown-toggle text-decoration-none  text-muted" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="me-1">
                                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#selectedlang)">
                                                    <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                                                    <path
                                                        d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                                                        fill="white" />
                                                    <path
                                                        d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                                                        fill="#C8102E" />
                                                    <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
                                                    <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="selectedlang">
                                                        <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                        </span>English
                                    </a>

                                    <ul className="dropdown-menu">

                                        <li><a className="dropdown-item " href="#"><span className="me-2">

                                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_5543_19744)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H16V12.5H0V0.5Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H5.3325V12.5H0V0.5Z" fill="#002654" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.668 0.5H16.0005V12.5H10.668V0.5Z"
                                                        fill="#CE1126" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5543_19744">
                                                        <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </span>Français</a></li>
                                        <li><a className="dropdown-item " href="#"><span className="me-2">

                                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_5543_19751)">
                                                    <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
                                                    <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
                                                    <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5543_19751">
                                                        <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </span>Deutsch</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-light py-lg-4 pt-3 px-0 pb-0">
                    <div className="container">
                        <div className="row w-100 align-items-center g-lg-2 g-0">
                            <div className="col-xxl-2 col-lg-3">
                                <Link href="/">
                                    <a className="navbar-brand d-none d-lg-block" href="./index.html">
                                        <img src="/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />

                                    </a>
                                </Link>
                                <div className="d-flex justify-content-between w-100 d-lg-none">
                                    <a className="navbar-brand" href="./index.html">
                                        <img src="/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />

                                    </a>

                                    <div className="d-flex align-items-center lh-1">

                                        <div className="list-inline me-2">
                                            <div className="list-inline-item">

                                                <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="feather feather-user">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="list-inline-item">

                                                <a className="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                                    role="button" aria-controls="offcanvasRight">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="feather feather-shopping-bag">
                                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                    </svg>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                        1
                                                        <span className="visually-hidden">unread messages</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="icon-bar top-bar mt-0"></span>
                                            <span className="icon-bar middle-bar"></span>
                                            <span className="icon-bar bottom-bar"></span>
                                        </button>

                                    </div>
                                </div>

                            </div>
                            <div className="col-xxl-6 col-lg-5 d-none d-lg-block">

                                <form action="#">


                                    <div className="input-group ">
                                        <input className="form-control rounded-3" type="search" defaultValue="Search for products" id="searchInput" />
                                        <span className="input-group-append">
                                            <button className="btn bg-white border border-start-0 ms-n10" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-2 col-xxl-3 d-none d-lg-block">
                                <button type="button" className="btn  btn-outline-gray-400 text-muted" onClick={() => dispatch(open(LOCATION))}>
                                    <i className="feather-icon icon-map-pin me-2"></i>Location
                                </button>


                            </div>
                            <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">

                                <div className="list-inline">
                                    <div className="list-inline-item">
                                        <Link href="/wishlist">
                                            <a  className="text-muted position-relative">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-heart">
                                                    <path
                                                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                                    </path>
                                                </svg>
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                    {wishlist.length}
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                    <div className="list-inline-item">
                                        <Link href="/account/orders">
                                            <a  className="text-muted position-relative pointer" style={{ 'cursor': 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-user">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </a>
                                        </Link>
                                        </div>
                                    <div className="list-inline-item">
                                        <Link href="/cart">

                                            <a className="text-muted position-relative " role="button" aria-controls="offcanvasRight">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-shopping-bag">
                                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                    {itemsInCart}
                                                </span>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="border-bottom pb-lg-4 pb-3">
                <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
                    <div className="container px-0 px-md-3">
                    </div>

                </nav>
            </div>
        </>
    )
}
