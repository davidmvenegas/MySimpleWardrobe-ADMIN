import "./newproduct.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/authRedux"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from "../../firebase"

function NewProduct() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [categories, setCategories] = useState([])

  function handleChange(e) {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleCategories = (e) => setCategories(e.target.value.split(","))

  function handleSubmit(e) {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed', 
      (progress) => {console.group(progress)},
      (error) => {alert(error)},
      () => {getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)
        const product = {...inputs, img: downloadURL, categories: categories}
        addProduct(product, dispatch)
      })}
    )
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" accept=".png, .jpg, .jpeg" onChange={e=>setFile(e.target.files[0])} required/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" name="title" placeholder="Name..." onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name="desc" placeholder="Description..." onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" name="price" placeholder="$0" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="(add seperated by commas)" onChange={handleCategories} required/>
        </div>
        <div className="addProductItem">
          <label>In Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="addProductButton">Create</button>
      </form>
    </div>
  )
}
export default NewProduct