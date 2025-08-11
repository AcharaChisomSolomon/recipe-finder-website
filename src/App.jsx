import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import your page components (create these as needed)
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipePage from './pages/RecipePage'
import About from './pages/About'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path='/recipe/:name' element={<RecipePage />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App
