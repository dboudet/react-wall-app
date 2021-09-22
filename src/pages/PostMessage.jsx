import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../App"
import { Button, FloatingLabel, Form } from "react-bootstrap"

export default function PostMessage() {
  const { isSignedIn } = useContext(UserContext)
  const [messageContents, setMessageContents] = useState({messageAuthor: sessionStorage.getItem("displayName")})
  const history = useHistory()

  const handleFormData = (event) => {
    setMessageContents({
      ...messageContents,
      [event.target.name]: event.target.value,
    })
  }

  const handlePostMessage = (event) => {
    event.preventDefault()
    fetch("http://localhost:5000/post-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageContents),
    })
      .then((response) =>
        response.status === 201
          ? response.json()
          : alert("Sorry, your message could not be posted.")
      )
      .then(() => {
        alert("Thank you for posting your message!")
        history.push("/")
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    if (sessionStorage.getItem("userLoggedIn") !== "true")
      history.push("/sign-in")
    else return
  }, [])

  return (
    <Form className="db-form" id="signin-form" onSubmit={handlePostMessage}>
      <FloatingLabel
        className="mb-3"
        controlId="formBasicText"
        label="Display Name"
      >
        <Form.Control
          type="text"
          name="messageAuthor"
          defaultValue={sessionStorage.getItem("displayName")}
          onChange={handleFormData}
        />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="formBasicTextArea"
        label="Message (Please limit to 200 characters)"
      >
        <Form.Control
          as="textarea"
          name="messageBody"
          onChange={handleFormData}
          style={{ height: 200 }}
        />
      </FloatingLabel>
      <Button id="post-message-button" variant="primary" type="submit">
        Post Your Message
      </Button>
    </Form>
  )
}
