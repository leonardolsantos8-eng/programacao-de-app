import './App.css'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import HomePage from './pages/HomePage'


function App() {
  return (
    <>
      <Header />

      <main>
        <HomePage />
      </main>      

      <Footer />
    </>
  )
}

export default App
