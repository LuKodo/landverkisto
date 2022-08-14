import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LaAtendo from './components/chapters/LaAtendo'
import Nokte from './components/chapters/Nokte'
import Kagxoj from './components/chapters/Kagxoj'
import Cxenoj from './components/chapters/Cxenoj'
import KioNiEstas from './components/chapters/KioNiEstas'
import Dedicatoria from './components/chapters/Dedicatoria'
import FrontPage from './components/chapters/FrontPage'
import Nuda from './components/chapters/Nuda'
import SubViaOmbro from './components/chapters/SubViaOmbro'
import EnLaFlavaUrbo from './components/chapters/EnLaFlavaUrbo'
import Revo from './components/chapters/Revo'

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/frontpagxo" element={<FrontPage />} />
        <Route path="/dedicxo" element={<Dedicatoria />} />
        <Route path="/kagxoj" element={<Kagxoj />} />
        <Route path="/kio-ni-estas" element={<KioNiEstas />} />
        <Route path="/cxenoj" element={<Cxenoj />} />
        <Route path="/nokte" element={<Nokte />} />
        <Route path="/la-atendo" element={<LaAtendo />} />
        <Route path="/nuda" element={<Nuda />} />
        <Route path="/sub-via-ombro" element={<SubViaOmbro />} />
        <Route path="/en-la-flava-urbo" element={<EnLaFlavaUrbo />} />
        <Route path="/revo" element={<Revo />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
