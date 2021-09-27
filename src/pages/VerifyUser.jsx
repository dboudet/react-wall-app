import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function VerifyUser() {
  const { confirmationCode } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/verify-email/${confirmationCode}`)
      .then((response) => response.json())
      .catch((err) => alert(err))
  }, [confirmationCode])

  return (
    <div className="db-form" style={{textAlign:"center"}}>
      <h2>Welcome!</h2>
      <p>
        Thank you for confirming your email address.
        <br />
        You can now sign in to post a message to the wall.
      </p>
      <Link to="/sign-in">
        <Button variant="primary">Sign In</Button>
      </Link>
    </div>
  )
}
