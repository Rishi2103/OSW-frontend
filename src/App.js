import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Events from "./components/Events"
import Home from "./components/Home"
import About from "./components/About"
import Partners from "./components/Partners"
import Blogs from "./components/Blogs"
import ResourceLibrary from "./components/ResourceLibrary"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resourceLibrary" element={<ResourceLibrary />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App