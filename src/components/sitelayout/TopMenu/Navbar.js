import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';

const navbar = (props) => {
    return (
        <nav className="menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        </nav>
    )
}

export default navbar;