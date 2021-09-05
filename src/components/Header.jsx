import { Container, Navbar } from "react-bootstrap";
 
export default function Header() {

    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <i class="bi bi-chat-quote"></i>
          &nbsp;React Wall App
          </Navbar.Brand>
        </Container>
      </Navbar>
        )
}