import { createContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import Header from "./components/Header"
import Wall from "./pages/Wall"
import SignIn from "./pages/SignIn"
import { Container } from "react-bootstrap"
import PostMessage from "./pages/PostMessage"
import CreateAccount from "./pages/CreateAccount"

export const UserContext = createContext(undefined)

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState()

  useEffect(() => {
    setIsSignedIn(localStorage.getItem('userLoggedIn'))
  },[isSignedIn])

  return (
    <div className="App">
      <UserContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Header />
        <Container className="main">
          <Router>
            <Switch>
              <Route exact path="/post-message" component={PostMessage} />Î
              <Route exact path="/create-account" component={CreateAccount} />Î
              <Route exact path="/sign-in" component={SignIn} />Î
              <Route exact path="/" component={Wall} />
            </Switch>
          </Router>
        </Container>
      </UserContext.Provider>
    </div>
  )
}
