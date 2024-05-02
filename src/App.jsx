import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TopHeader from "./components/TopHeader"
import Header from "./components/Header"
import About from "./pages/About"
import Director from "./Director"
function App() {

  return (
    <div>
      <BrowserRouter>
      <TopHeader />
      <Header />
        <Routes>
          <Route path="/" element={<Director />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
