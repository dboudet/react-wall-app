import { useContext } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { UserContext } from "../App"

export default function CreateAccount() {
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)

  const handleCreateAccount = (event) => {
    event.preventDefault()
    setIsSignedIn(true)
    localStorage.setItem('userLoggedIn', true)
  }

  return (
      <Form
        className="db-form"
        id="signin-form"
        onSubmit={handleCreateAccount}
      >
        <FloatingLabel className="mb-3" controlId="formBasicText" label="Display Name">
          <Form.Control
            type="text"
            placeholder="Display Name"
          />
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="formBasicEmail" label="Email Address">
          <Form.Control
            type="email"
            placeholder="Email Address"
          />
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="formBasicPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
  )
}
