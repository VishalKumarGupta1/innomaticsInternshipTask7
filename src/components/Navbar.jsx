import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>

            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>

    )
}
