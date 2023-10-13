import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
