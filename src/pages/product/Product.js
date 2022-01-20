import "./product.css"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { Publish } from "@material-ui/icons"

function Product() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const product = useSelector((state) => state.product.products.find((product) => product._id === productId))

    return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">UPDATE PRODUCT</h1>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Title:</label>
                    <input type="text" placeholder={product.title} />
                    <label>Description:</label>
                    <input type="text" placeholder={product.desc} />
                    <label>Price:</label>
                    <input type="text" placeholder={`$ ${product.price}`} />
                    <label>Categories:</label>
                    <input type="text" placeholder={product.categories} />
                    <label>Colors:</label>
                    <input type="text" placeholder={product.color} />
                    <label>Sizes:</label>
                    <input type="text" placeholder={product.size} />
                    <label>In Stock:</label>
                    <select name="inStock" id="idStock">
                        <option value="yes" selected={product.inStock}>Yes</option>
                        <option value="no" selected={!product.inStock}>No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={product.img} alt="" className="productUploadImg" />
                        <label htmlFor="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Product