import cardBubble from "../assets/chat-left.svg"

export default function Card() {
  return (
    <div
      style={{
        width: 340,
        height: 340,
        backgroundImage: `url(${cardBubble})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ padding: "27px 33px", height:224, overflow:"hidden", }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio deserunt at sunt, dolorum quaerat aut corrupti harum quisquam corporis commodi. Modi pariatur nobis esse tempora, vel dolore quos! Similique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi ut accusantium autem blanditiis sapiente at, molestiae dicta harum enim cumque, ea error. Vero labore vitae magnam odio, veritatis voluptatem.
      </div>
    </div>
  )
}
