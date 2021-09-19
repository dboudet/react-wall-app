import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import bcrypt from "bcryptjs"
import { mySalt } from "../config"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { UserContext } from "../App"

export default function CreateAccount() {
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)
  const [user, setUser] = useState({})
  const history = useHistory()

  const handleFormData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleCreateAccount = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => console.log(response))
      .then(() => {
        setIsSignedIn(true)
        sessionStorage.setItem("userLoggedIn", "true")
      })
      .then(() => history.push("/"))
      .catch((err) => alert(err))
  }

  return (
    <Form className="db-form" id="signin-form" onSubmit={handleCreateAccount}>
      <FloatingLabel
        className="mb-3"
        controlId="formBasicText"
        label="Display Name"
      >
        <Form.Control
          type="text"
          placeholder="Display Name"
          name="displayName"
          onChange={handleFormData}
        />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="formBasicEmail"
        label="Email Address"
      >
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="email"
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
          placeholder="Password"
          name="password"
          onChange={handleFormData}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  )
}
