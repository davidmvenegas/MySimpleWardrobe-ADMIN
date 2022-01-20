import { generalRequest, userRequest } from "../request"
import { loginSuccess, loginStart, loginFailure } from "./userRedux"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } from "./productRedux"

async function loginRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const response = await generalRequest.post("auth/login", user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
        console.error(error)
    }
}
async function getProducts(dispatch) {
    dispatch(getProductStart())
    try {
        const response = await generalRequest.get("products")
        dispatch(getProductSuccess(response.data))
    } catch (error) {
        dispatch(getProductFailure())
        console.error(error)
    }
}
async function deleteProducts(id, dispatch) {
    dispatch(deleteProductStart())
    try {
        const response = await userRequest.delete(`products/${id}`)
        dispatch(deleteProductSuccess(response.data))
    } catch (error) {
        dispatch(deleteProductFailure())
        console.error(error)
    }
}
const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())
    try {
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}
const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}

export { loginRequest, getProducts, deleteProducts, updateProduct, addProduct }