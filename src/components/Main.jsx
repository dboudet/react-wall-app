import { Container } from "react-bootstrap"
import Card from "./Card"

export default function Main() {
  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        justifyItems: "flex-start",
        paddingTop:"40px",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}
