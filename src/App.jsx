import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipePage from './pages/RecipePage'
import About from './pages/About'
import Header from './Header'
import Footer from './Footer'
import RecipesContext from './recipesContext'
import ScrollToTop from './ScrollToTop'

import data from './data.json'

function App() {
  return (
    <RecipesContext.Provider value={data}>
      <Router>

        <ScrollToTop />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path='/recipe/:name' element={<RecipePage />} />
        </Routes>

        <Footer />

      </Router>
    </RecipesContext.Provider>
  )
}

export default App
