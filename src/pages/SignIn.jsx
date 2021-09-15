import { useContext } from "react"
import { UserContext } from "../App"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useHistory } from "react-router"

export default function SignIn() {
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)
  const history = useHistory()

  const handleSignIn = (event) => {
    event.preventDefault()
    setIsSignedIn(true)
    sessionStorage.setItem("userLoggedIn", "true")
    history.push("/")
  }

  return (
    <Form className="db-form" id="signin-form" onSubmit={handleSignIn}>
      <FloatingLabel
        className="mb-3"
        controlId="formBasicEmail"
        label="Email Address"
      >
        <Form.Control type="email" placeholder="Email Address" />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="formBasicPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  )
}
