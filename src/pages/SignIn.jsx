import { useContext, useState } from "react"
import { UserContext } from "../App"
import bcrypt from "bcryptjs"
import { mySalt } from "../config"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)
  const history = useHistory()

  const handleSignIn = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
          const { token, displayName, message } = data
          sessionStorage.setItem("userLoggedIn", "true",)
          sessionStorage.setItem("token", token)
          sessionStorage.setItem("displayName", displayName)
          alert(message)  
          return
        }
      })
      .then(() => {
        history.push("/post-message")
        setIsSignedIn(sessionStorage.getItem("userLoggedIn"))
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
            setFormData({
              ...formData,
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
            setFormData({ ...formData, password: hashedPassword })
          }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  )
}
