import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="bg-[#212529]">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
