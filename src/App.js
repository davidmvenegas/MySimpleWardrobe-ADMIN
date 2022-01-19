import { Fragment } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import UserList from "./pages/userlist/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newuser/NewUser"
import ProductList from "./pages/productlist/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newproduct/NewProduct"

function App() {
  const location = useLocation()
  return (
    <Fragment>
      {(location.pathname === '/login') ? null : <Topbar/>}
      <div className="container">
        {(location.pathname === '/login') ? null : <Sidebar/>}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route exact path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/newproduct" element={<NewProduct/>} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App