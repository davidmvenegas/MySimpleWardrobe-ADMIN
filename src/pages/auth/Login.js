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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login;
