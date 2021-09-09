import { Container, Nav, Navbar } from "react-bootstrap";
 
export default function Header() {

    return(
        <Navbar bg="primary" variant="dark">
        <Container style={{justifyContent:"space-between"}}>
          <Navbar.Brand href="/">
          <i class="bi bi-chat-quote"></i>
          &nbsp;React Wall App
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/sign-out">Sign Out</Nav.Link>
            <Nav.Link href="/create-account">Create Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        )
}