import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { UserContext } from "../App"

export default function Header() {
  const { isSignedIn } = useContext(UserContext)

  const handleSignOut = () => {
    sessionStorage.setItem('userLoggedIn', false)
  }

  return (
    <Navbar variant="dark">
      <Container style={{ justifyContent: "space-between" }}>
        <Navbar.Brand href="/">
          <i className="bi bi-chat-quote"></i>
          &nbsp;React Wall App
        </Navbar.Brand>

        {isSignedIn === "true" && (
          <Nav className="userNav">
            <Nav.Link href="/post-message">Post Message</Nav.Link>
            <Nav.Link href="/" onClick={handleSignOut}>Sign Out</Nav.Link>
          </Nav>
        )}
        {isSignedIn !== "true" && (
          <Nav className="guestNav">
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/create-account">Create Account</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}
