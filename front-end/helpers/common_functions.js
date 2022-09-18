import axios from "axios"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../states/slices/cart_slice"
import { open } from "../states/slices/modal_slice"
import { addToWishlist, removeFromWishlist } from "../states/slices/wishlist_slice"
import { SIGNIN } from "./constant"


class ProductInCart {
    constructor({ code_product, name, price, lien_photo, category_name, quantity }){
        this.code_product = code_product
        this.product_name = name
        this.price = price
        this.img = lien_photo
        this.category = category_name
        this.quantity = quantity
    }
}

export const addProductToCart = async (product, dispatch) => {
    const { code_product, quantity } = product
    try {
        await axios.post("/cart/add-product", { code_product , quantity })
        const payload = new ProductInCart(product)
        dispatch(addToCart(payload))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        console.log(error)
        alert("something went wrong")
    }
}

export const removeProductFromCart = async (code_product, dispatch) => {
    try {
        await axios.delete(`/cart/${code_product}/remove-product`)
        dispatch(removeFromCart(code_product))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        alert("something went wrong")
    }
}

export const incrementProductQuantityInCart = async (code_product, dispatch) => {
    try {
        await axios.put(`/cart/${code_product}/incrment-quantity`)
        dispatch(incrementQuantity(code_product))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        alert("something went wrong")
    }
}

export const decrementProductQuantityInCart = async (code_product, dispatch) => {
    try {
        await axios.put(`/cart/${code_product}/decrement-quantity`)
        dispatch(decrementQuantity(code_product))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        alert("something went wrong")
    }
}


class ProductInWishlist {
    constructor({code_product, price, quantity_in_stock, lien_photo}){
        this.code_product = code_product
        this.price = price
        this.quantity_in_stock = quantity_in_stock
        this.img = lien_photo
    }
}

export const addProductToWishlist = async (product, dispatch) => {
    const { code_product } = product
    try {
        await axios.post("/wishlist/add-product", { code_product })
        const paylaod = new ProductInWishlist(product)
        return dispatch(addToWishlist(paylaod))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        alert("something went wrong")
    }
}

export const removeProductFromWishlist = async (code_product, dispatch) => {
    
    try {
        await axios.delete(`/wishlist/${code_product}/remove-product`)
        return dispatch(removeFromWishlist(code_product))
    } catch (error) {
        if (error?.response?.status === 403) return dispatch(open(SIGNIN))
        alert("something went wrong")
    }
}


