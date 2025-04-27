import Home from "./assets/Pages/Home"
import Contact  from "./assets/Pages/Contact"
import Nav from "./assets/Component/Navigation"
import Footer from "./assets/Component/Footer"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
    <Nav/>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/reactwoek" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
