import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    const [user] = useAuthState(auth);

    const logOutFun = () => {
        signOut(auth)
    }

    return (
        <header className='mb-4'>

            {/* <Navbar bg="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Navbar bg="dark" variant="dark" fixed='top' >
                <Container>
                    <Navbar.Brand >Navbar</Navbar.Brand>
                    <Nav className="me-auto">

                        {/* <LinkContainer to="/">
                            <Button >Home</Button>
                        </LinkContainer>

                        <LinkContainer to="aboutUs">
                            <Button >About-Us</Button>
                        </LinkContainer>

                        <LinkContainer to="register">
                            <Button >Register</Button>
                        </LinkContainer> */}

                        {
                            // user ? <button style={{ color: "red", border: "none", backgroundColor: "transparent" }} className='button' onClick={logOutFun}>Log-Out</button>
                            // user ? <LinkContainer to="login">
                            //     <Button onClick={logOutFun} >Log-Out</Button>
                            // </LinkContainer>
                            //     :
                            //     <LinkContainer to="login">
                            //         <Button >Login</Button>
                            //     </LinkContainer>

                            // <li> <Link to="login">Login</Link> </li>
                        }

                        {/* <LinkContainer to="/">
                            <NavLink >Home</NavLink>

                        </LinkContainer> */}

                        {/* <Nav.Link ><Link  to="/">Home</Link>  </Nav.Link>
                        <Nav.Link><Link  to="aboutUs">About-Us</Link></Nav.Link>
                        <Nav.Link><Link  to="register">Register</Link></Nav.Link>
                        <Nav.Link><Link to="register">
                            {
                                user ? <button style={{ color: "red", border: "none", backgroundColor: "transparent" }} className='button' onClick={logOutFun}>Log-Out</button>
                                    :
                                    <li> <Link to="login">Login</Link> </li>
                            }
                        </Link></Nav.Link> */}


                        <Nav.Link as={Link} to="/"> home </Nav.Link>
                        <Nav.Link href='#aboutUs' as={Link} to="aboutUs">About-Us</Nav.Link>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                        <Nav.Link href='#coolCompo'>Cool</Nav.Link>

                        {/* <Nav.Link></Nav.Link> */}
                        {
                            user && <>
                                <Nav.Link as={Link} to="addedservice">Addedservice</Nav.Link>
                                <Nav.Link as={Link} to="mansgeServices">Manage</Nav.Link>
                                <Nav.Link as={Link} to="order">Orders</Nav.Link>
                            </>
                        }

                        <Nav.Link><Link to="register">
                            {
                                user ? <button style={{ color: "red", border: "none", backgroundColor: "transparent" }} className='button' onClick={logOutFun}>Log-Out</button>
                                    :
                                    <li> <Link to="login">Login</Link> </li>
                            }
                        </Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            {/* <h3>this is header page</h3> */}

            {/* <nav>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="aboutUs">About-Us</Link> </li>
                <li> <Link to="register">Register</Link> </li>
                {
                    user? <button style={{color : "red", border : "none", backgroundColor : "transparent"}} className='button' onClick={logOutFun}>Log-Out</button>
                    :
                    <li> <Link to="login">Login</Link> </li>
                }
            </nav> */}

        </header>
    );
};

export default Header;