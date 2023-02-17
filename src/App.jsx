import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#212529]">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
