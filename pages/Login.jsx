import React from "react"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password: ""})

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(loginFormData)

    return (
        <div className="login-form-container">
            <h1>Sign in to your account</h1>
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
                <button>Log in</button>
            </form>

        </div>
    )
}