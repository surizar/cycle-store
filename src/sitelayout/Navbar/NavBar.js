import classes from './NavBar.module.css';
import NavList from './NavList'

const NavBar = (props) => {
    return (
        <nav className={classes.NavBar}>
        <NavList />
        </nav>
    )
}

export default NavBar;