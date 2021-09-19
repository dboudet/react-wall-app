import { useContext, useState } from "react"
import { UserContext } from "../App"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function SignIn() {
  const [user, setUser] = useState({})
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)
  const history = useHistory()

  const handleFormData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSignIn = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) =>
        response.status === 200
          ? response.json()
          : alert("Authentication error")
      )
      .then((data) => {
        setIsSignedIn(true)
        sessionStorage.setItem("userLoggedIn", "true")
        history.push("/post-message")
        alert("You are now logged in and may post a new message")
      })
      .catch((err) => console.error(err))
  }

  return (
    <Form className="db-form" id="signin-form" onSubmit={handleSignIn}>
      <FloatingLabel
        className="mb-3"
        controlId="formBasicEmail"
        label="Email Address"
      >
        <Form.Control
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleFormData}
        />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="formBasicPassword"
        label="Password"
      >
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleFormData}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  )
}
