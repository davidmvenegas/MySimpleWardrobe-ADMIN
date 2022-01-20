import "./user.css"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function User() {
    const location = useLocation()
    const memberId = location.pathname.split("/").at(-1)
    const member = useSelector((state) => state.member.members.find((member) => member._id === memberId))

    return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">UPDATE USER</h1>
        </div>
        <div className="userEntireContainer">
            <form className="userForm">
                <div className="userFormLeft">
                    <label>Username:</label>
                    <input type="text" placeholder={member.username} />
                    <label>Email:</label>
                    <input type="email" placeholder={member.email} />
                    <label>Password:</label>
                    <input type="password" placeholder="•••••••••••••••••" />
                    <label>Admin?</label>
                    <select name="isAdmin" id="idStock">
                        <option value="no" selected={!member.isAdmin}>No</option>
                        <option value="yes" selected={member.isAdmin}>Yes</option>
                    </select>
                    <button className="userActualButton">Update</button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default User