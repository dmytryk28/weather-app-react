import './Login.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'

function Login() {
    const [cookies, setCookie] = useCookies(['isLoggedIn'])
    const [isInvalidLogIn, setInvalidLogIn] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const toggleInvalidLogIn = () => {
        setInvalidLogIn(!isInvalidLogIn)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === 'em@gmail.com' && password === 'dmytro3') {
            setCookie('isLoggedIn', true)
            navigate('/dashboard')

        } else {
            toggleInvalidLogIn()
            setCookie('isLoggedIn', false)
        }
        if (rememberMe) {
            setCookie('user', email)
            setCookie('password', password)
        } else {
            setCookie('user', null)
            setCookie('password', null)
        }
    }

    useEffect(() => {
        if (cookies.user && cookies.password) {
            setEmail(cookies.user)
            setPassword(cookies.password)
            setRememberMe(true)
        }

        setCookie('isLoggedIn', false)

    }, [cookies])

    return (
        <>
            <div className="app-background">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Weather App Log in</h2>
                        <div className="invalid-data" style={{display: isInvalidLogIn ? 'block' : 'none'}}>
                            <span>Invalid email or password</span>
                        </div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email"
                               id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               name="email"
                               placeholder="name@example.com" required/>

                        <label htmlFor="password">Password:</label>
                        <input type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               id="password"
                               name="password" required/>

                        <div className="remember-me">
                            <input type="checkbox"
                                   checked={rememberMe}
                                   onChange={(e) => setRememberMe(e.target.checked)}
                                   id="remember"
                                   name="remember"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
