import About from "./components/About"
import Dishes from "./components/Dishes"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
      <div id="home">
          <Home/>
      </div>

      <div id="dishes">
          <Dishes/>
      </div>

      <div id="about">
          <About/>
      </div>

      <div id="about">
          <Menu/>
      </div>


      </main>
    </div>
  )
}

export default App
