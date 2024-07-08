import Header from "./Components/Header"
import { BrowserRouter,Route,Routes } from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
