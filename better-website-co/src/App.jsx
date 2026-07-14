import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Transformations from './components/Transformations'
import Credibility from './components/Credibility'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import AboutFounder from './components/AboutFounder'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import InquiryForm from './components/InquiryForm'
// import Resources from './components/Resources' // re-enable once real articles are written
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MeetBee from './components/MeetBee'
import NotFound from './components/NotFound'

function Home() {
  const [selectedTier, setSelectedTier] = useState(null)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Transformations />
        <Credibility />
        <Process />
        <WhyUs />
        <AboutFounder />
        <Testimonials />
        <Pricing onSelect={setSelectedTier} />
        <InquiryForm selectedTier={selectedTier} onSelectTier={setSelectedTier} />
        {/* <Resources /> re-enable once real articles are written */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-bee" element={<MeetBee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
