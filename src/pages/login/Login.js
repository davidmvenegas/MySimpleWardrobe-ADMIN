import "./login.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginRequest } from "../../redux/authRedux"

function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        loginRequest(dispatch, {username, password})
    }

    return (
    <div id="loginContainer">
        <h1 id="loginTitle">The Red Planet Shop</h1>
        <h1 id="loginSubtitle">ADMIN PORTAL</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
            <input className="loginInput" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input className="loginInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button id="loginButton" type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login;
