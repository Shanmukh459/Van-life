import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password: ""})
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const path = location.state?.path || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(path, {replace: true})
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-form-container">
            {location.state?.message && <h3 className="login-error">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-error">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    type="email"
                    name="email"
                    value={loginFormData.email}
                    placeholder="Email address"
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    onChange={handleChange}
                />
                <button disabled={status === "submitting"}>Log in</button>
            </form>

        </div>
    )
}