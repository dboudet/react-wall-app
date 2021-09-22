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

  const handleCreateAccount = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) =>
        response.status === 201
          ? response.json()
          : alert(
              "Authentication failed: User not found or incorrect password."
            )
      )
      .then((data) => {
        console.log(data)
        setIsSignedIn(true)
        sessionStorage.setItem("userLoggedIn", "true")
        sessionStorage.setItem("displayName", data.displayName)
      })
      .then(() => history.push("/post-message"))
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
          onChange={(event) => {
            setUser({ ...user, displayName: event.target.value })
          }}
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
          onChange={(event) => {
            let cleanedEmail = String(event.target.value).toLowerCase()
            setUser({
              ...user,
              email: cleanedEmail,
            })
          }}
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
          onChange={(event) => {
            let hashedPassword = bcrypt.hashSync(event.target.value, mySalt)
            setUser({ ...user, password: hashedPassword })
          }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
  )
}
