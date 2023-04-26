import Nav from "./Nav"
import Social from "../social/Social"
import './Header.scss';

function Header () {
    return (
        <>
        <header>
            <Nav></Nav>
        </header>
        <Social></Social>
        </>
    )
}

export default Header