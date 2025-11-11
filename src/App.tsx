import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Home from "./screens/Home"
import Industries from "./screens/Industries"
import Landing from "./screens/Landing"
import Technology from "./screens/Technology"


const App = () => {
  return (
    <>
      <Landing />
      <Navigation />
      <Hero />
      <Home />

      <Industries />
      <Technology />
      <Footer />

    </>
  )
}

export default App