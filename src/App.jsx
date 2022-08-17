import { Route } from 'wouter'
import { Dedicatoria, Cxenoj, EnLaFlavaUrbo, FrontPage, Kagxoj, KioNiEstas, LaAtendo, Nokte, Nuda, Revo, SubViaOmbro } from './components/Chapters'
import Nav from './components/Nav'

function App () {

  return (
    <>
      <Nav />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full font-serif px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <Route path="/">
            <FrontPage />
          </Route>
          <Route path="/frontpagxo">
            <FrontPage />
          </Route>
          <Route path="/dedicxo">
            <Dedicatoria />
          </Route>
          <Route path="/kagxoj">
            <Kagxoj />
          </Route>
          <Route path="/kio-ni-estas">
            <KioNiEstas />
          </Route>
          <Route path="/cxenoj">
            <Cxenoj />
          </Route>
          <Route path="/nokte">
            <Nokte />
          </Route>
          <Route path="/la-atendo">
            <LaAtendo />
          </Route>
          <Route path="/nuda">
            <Nuda />
          </Route>
          <Route path="/revo">
            <Revo />
          </Route>
          <Route path="/sub-via-ombro">
            <SubViaOmbro />
          </Route>
          <Route path="/en-la-flava-urbo">
            <EnLaFlavaUrbo />
          </Route>
        </div>

        <hr className="border-b-1 border-gray-400 mb-8 mx-4" />

        <div className="flex w-full items-center font-sans px-4">
          <img className="w-20 h-20 rounded-full mr-4" src="https://yt3.ggpht.com/yti/AJo0G0kb_gESfeMrzyMekf_nlE-ngl8NdqvhlB2OxYDJaQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="Avatar of Author" />
          <div className="flex-1 px-2">
            <p className="text-base font-bold text-base md:text-xl leading-none mb-2">Luis Caraballo</p>
            <p className="text-gray-600 text-xs md:text-base">Escritor, programador & esperantista.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
