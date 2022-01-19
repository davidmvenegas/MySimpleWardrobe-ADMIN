import "./sidebar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { HomeOutlined, PermIdentity, Storefront } from "@material-ui/icons"

function Sidebar() {
  const [home, setHome] = useState(true)
  const [users, setUsers] = useState(false)
  const [products, setProducts] = useState(false)
  function handleHome() {
    setHome(true)
    setUsers(false)
    setProducts(false)
  }
  function handleUsers() {
    setHome(false)
    setUsers(true)
    setProducts(false)
  }
  function handleProducts() {
    setHome(false)
    setUsers(false)
    setProducts(true)
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link" onClick={handleHome}>
              <li className={home?"sidebarListItem active":"sidebarListItem"}><HomeOutlined className="sidebarIcon" />Home</li>
            </Link>
            <Link to="/users" className="link" onClick={handleUsers}>
              <li className={users?"sidebarListItem active":"sidebarListItem"}><PermIdentity className="sidebarIcon"/>Users</li>
            </Link>
            <Link to="/products" className="link" onClick={handleProducts}>
              <li className={products?"sidebarListItem active":"sidebarListItem"}><Storefront className="sidebarIcon"/>Products</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar