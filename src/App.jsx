import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dedicatoria, Cxenoj, EnLaFlavaUrbo, FrontPage, Kagxoj, KioNiEstas, LaAtendo, Nokte, Nuda, Revo, SubViaOmbro } from './components/Chapters'
import Nav from './components/Nav'

function App () {

  return (
    <>
      <Nav />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
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
          </BrowserRouter>
        </div>


        <div className="flex w-full items-center font-sans px-4 py-12">
          <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
          <div className="flex-1 px-2">
            <p className="text-base font-bold text-base md:text-xl leading-none mb-2">Luis Caraballo</p>
            <p className="text-gray-600 text-xs md:text-base">Escritor, programador, esperantista</p>
          </div>
        </div>

        <hr className="border-b-1 border-gray-400 mb-8 mx-4" />

        <div className="font-sans flex justify-between content-center px-4 pb-12">
          <div className="text-left">
            <a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline">Blog title</a>
          </div>
          <div className="text-right">
            <a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
