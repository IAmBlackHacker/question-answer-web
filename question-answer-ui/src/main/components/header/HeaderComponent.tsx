import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {UserPanel} from "./UserPanel";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function HeaderComponent({button_name, link}: {button_name: string, link: string}) {
    const {user} = useSelector((state: any) => ({
        user: state.user,
    }));

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <UserPanel name={user.username} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                        <Nav.Link as={Link} to={link}>
                            <Button className={"bg-primary rounded-5"}>
                                {button_name}
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;
