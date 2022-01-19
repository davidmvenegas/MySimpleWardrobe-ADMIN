import "./smallwidget.css"
import { useEffect, useState } from "react"
import { Visibility } from "@material-ui/icons"
import { userRequest } from "../../request"
import noUser from "./noUser.png"

function SmallWidget() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await userRequest.get("users?new=true")
        setUsers(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newest members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li key={user.email} className="widgetSmListItem">
            <img src={user.img || noUser} alt="Profile Img" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SmallWidget