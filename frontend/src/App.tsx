import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import PostForm from './pages/PostForm'
import EditForm from './pages/EditForm'


function App() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="detail/:id" element={<BlogDetail />} />
        <Route path="/write" element={<PostForm />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
