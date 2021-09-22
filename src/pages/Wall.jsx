import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Card from "../components/Card"

export default function Wall() {
  const [allMessages, setAllMessages] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/all-messages")
      .then((response) => response.json())
      .then((data) => setAllMessages(data.reverse()))
  }, [])

  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        justifyItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      {allMessages?.map((message) => {
        return <Card message={message} />
      })}
    </Container>
  )
}
