import { useEffect, useState } from "react"
import Card from "../components/Card"

export default function Wall() {
  const [allMessages, setAllMessages] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/all-messages")
      .then((response) => response.json())
      .then((data) => setAllMessages(data.reverse()))
  }, [])

  return (
    <div className="wall-container">
      {allMessages?.map((message) => {
        return <Card key={message._id} message={message} />
      })}
    </div>
  )
}
