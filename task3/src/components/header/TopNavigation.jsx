import { useNavigate } from "react-router"

export const TopNavigation = () => {
  const navigate = useNavigate()
  return (
    <ul>
      <li>
        <a onClick={() => navigate('/')}>Home</a>
      </li>
      <li className="register">
        <a className="active" onClick={() => navigate('/register')}>Register</a>
      </li>
      <li className="login">
        <a className="active" onClick={() => navigate('/login')}>Login</a>
      </li>
    </ul>

  )
}