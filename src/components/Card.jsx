import cardBubble from "../assets/chat-left.svg"

export default function Card({ message }) {
  return (
    <div className="message-container">
      <div className="message-bubble">
        <p>{message.messageBody}</p>
        </div>
      <div className="message-author">{message.messageAuthor}</div>
    </div>
  )
}
