import { Navbar, Nav} from "react-bootstrap"
import { Login, Logout } from "../components"
import { LinkContainer } from "react-router-bootstrap"
import { useKeyCloak } from "../hooks"

export const Header = () => {
    const[keycloak, isAuthenticated] = useKeyCloak()
    return (
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <LinkContainer to="/">
                <Navbar.Brand >The Movie App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home <i className="fas fa-home"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/watched">
                        <Nav.Link>Watched <i className="far fa-check-circle"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favourite">
                        <Nav.Link>Favs <i className="far fa-thumbs-up"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/search">
                        <Nav.Link>Search <i className="fas fa-search"></i></Nav.Link>
                    </LinkContainer>
                </Nav>

                { (!isAuthenticated)? <Login keycloak={keycloak}/>: <Logout keycloak={keycloak}/> }

            </Navbar.Collapse>
        </Navbar>
    )
}


