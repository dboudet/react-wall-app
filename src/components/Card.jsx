import cardBubble from "../assets/chat-left.svg"

export default function Card({ message }) {
  return (
    <div
      style={{
        width: 360,
        height: 360,
        backgroundImage: `url(${cardBubble})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        marginBottom: "24px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: 20,
          padding: "28px 35px",
          height: 238,
          overflow: "hidden",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {message.messageBody}
      </div>
      <div
        style={{ position: "absolute", bottom: 40, right: 50, fontSize: 20 }}
      >
        &ndash;&nbsp;{message.messageAuthor}
      </div>
    </div>
  )
}
