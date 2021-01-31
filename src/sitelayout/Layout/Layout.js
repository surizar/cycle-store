import NavBar from '../Navbar/NavBar'

const Layout = (props) => {
    return(
        <div className="App">
            <header>
                <NavBar/>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout