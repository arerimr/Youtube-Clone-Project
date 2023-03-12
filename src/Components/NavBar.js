import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="Nav-bar">
      <Link to="/">
        <h2>YÚ Tub</h2>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
