import { useContext, useState } from "react"
import { UserContext } from "../App"
import bcrypt from "bcryptjs"
import { mySalt } from "../config"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function SignIn() {
  const [user, setUser] = useState({})
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)
  const history = useHistory()

  const handleSignIn = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          alert("Authentication failed: User not found or incorrect password.")
          return
        }
      })
      .then((data) => {
        if (data) {
          setIsSignedIn(true)
          sessionStorage.setItem("token", data.token)
          sessionStorage.setItem("displayName", data.token.displayName)
          history.push("/post-message")
          alert("You are now logged in and may post a new message")
          return
        }
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
          name="password"
          placeholder="Password"
          onChange={(event) => {
            let hashedPassword = bcrypt.hashSync(event.target.value, mySalt)
            setUser({ ...user, password: hashedPassword })
          }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  )
}
