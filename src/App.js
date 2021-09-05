import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}
