import "./product.css"
import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { Publish } from "@material-ui/icons"
import Chart from "../../components/chart/Chart"
import { userRequest } from "../../request"

function Product() {

    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [productStats, setProductStats] = useState([])
    const product = useSelector((state) => state.product.products.find((product) => product._id === productId))
    const MONTHS = useMemo(() => ["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"],[])

    useEffect(() => {
        const getStats = async () => {
        try {
            const res = await userRequest.get(`orders/revenue?pid=${productId}`)
            const list = res.data.sort((a,b) => a._id - b._id)
            list.map((item) => setProductStats((prev) => [...prev, {name: MONTHS[item._id - 1], Sales: item.total}]))
        } catch (error) {
            console.log(error)
        }
    }
    getStats()
    }, [productId, MONTHS])

    return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">{product.title}</h1>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productStats} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productName">{product.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Product #:</span>
                        <span className="productInfoValue">{product._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">23</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">In Stock:</span>
                        <span className="productInfoValue">{product.inStock ? "Yes" : "No"}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder={product.title} />
                    <label>Product Description</label>
                    <input type="text" placeholder={product.desc} />
                    <label>Product Price</label>
                    <input type="text" placeholder={product.price} />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
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