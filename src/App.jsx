import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <  Route path='/' element={<Home />} />
        <  Route path='/Courses' element={<Courses />} />
        <  Route path='/About' element={<About />} />
        <  Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
