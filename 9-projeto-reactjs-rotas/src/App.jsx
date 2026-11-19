import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './componets/Footer'
import Header from './componets/Header'
import HomePage from './pages/HomePage'
import ServicosPage from './pages/ServicosPage'
import SobreNosPage from './pages/SobreNosPage'
import PaginaExtra1 from './pages/PaginaExtra1'
import PaginaExtra2 from './pages/PaginaExtra2'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/servicos' element={<ServicosPage />} />
            <Route path='/sobre-nos' element={<SobreNosPage />} />
            <Route path='/paginaextra1' element={<PaginaExtra1 />} />
            <Route path='/paginaextra2' element={<PaginaExtra2 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
