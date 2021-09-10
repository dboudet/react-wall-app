import cardBubble from "../assets/chat-left.svg"

export default function Card() {
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
        }}
      >
        Bacon ipsum dolor amet rump dolore turducken, anim eiusmod qui strip steak nostrud drumstick reprehenderit meatball chuck. Aute strip steak consectetur, beef magna ham hock kevin porchetta beef ribs incididunt ...
      </div>
      <div
        style={{ position: "absolute", bottom: 40, right: 50, fontSize: 20 }}
      >
        {" "}
        -Daniel
      </div>
    </div>
  )
}
