import { useContext } from "react"
import { UserContext } from "../App"
import { Button, FloatingLabel, Form } from "react-bootstrap"

export default function PostMessage() {
    const {isSignedIn} = useContext(UserContext)

    const handlePostMessage = (event) => {
        event.preventDefault()
        alert("Message posted (in progress)")
    }

  return (
    <Form className="db-form" id="signin-form" onSubmit={handlePostMessage}>
      <FloatingLabel className="mb-3" controlId="formBasicText" label="Display Name">
        <Form.Control type="text" placeholder="*Pre-populate with User Name" />
      </FloatingLabel>

      <FloatingLabel className="mb-3" controlId="formBasicTextArea" label="Message">
        <Form.Control as="textarea" placeholder="Type your message here (Please limit to 200 characters)" style={{height:250}} />
      </FloatingLabel>
      <Button id="post-message-button" variant="primary" type="submit">
        Post Your Message
      </Button>
    </Form>
  )
}
