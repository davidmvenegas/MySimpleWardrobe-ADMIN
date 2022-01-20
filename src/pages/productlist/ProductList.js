import "./productlist.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Delete } from "@material-ui/icons"
import { DataGrid } from "@material-ui/data-grid"
import { getProducts, deleteProducts } from "../../redux/authRedux"

function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  
  const columns = [
    {field: "product", headerName: "Product", width: 225,
    renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt=""/>
            {params.row.title}
          </div>
        )}},
        {field: "_id", headerName: "ID", width: 225},
        {field: "inStock", headerName: "In Stock", width: 200},
        {field: "price", headerName: "Price $", width: 160},
        {field: "action", headerName: "Action", width: 150,
        renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <Delete className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
          </>
        )}}
      ]
      
      const handleDelete = (id) => deleteProducts(id, dispatch)
      useEffect(() => {getProducts(dispatch)}, [dispatch])
      
  return (
      <div className="productList">
        <DataGrid id="dataGridProducts" getRowId={(row) => row._id} rows={products} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection disableSelectionOnClick />
      </div>
  )
}
export default ProductList