import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squat" element={<SectionPage section="squat" />} />
          <Route path="/panca" element={<SectionPage section="panca" />} />
          <Route path="/stacco" element={<SectionPage section="stacco" />} />
          <Route path="/mobilita" element={<SectionPage section="mobilita" />} />
          <Route path="/stretching" element={<SectionPage section="stretching" />} />
          <Route path="/dips" element={<SectionPage section="dips" />} />
          <Route path="/trazioni" element={<SectionPage section="trazioni" />} />
          <Route path="/complementari" element={<SectionPage section="complementari" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
