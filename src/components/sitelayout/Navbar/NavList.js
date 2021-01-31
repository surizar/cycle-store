import NavItem from './NavItem'

const NavList = (props) => {
    return (
        <ul>
            <NavItem link="/" linktext="Homepage" />
            <NavItem link="/products" linktext="Products" />
            <NavItem link="/search" linktext="Search" />
            <NavItem link="/cart" linktext="Cart" />
            <NavItem link="/contact" linktext="Contact Us" />
        </ul>
    )
}

export default NavList;