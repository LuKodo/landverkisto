import { A as Link } from "@solidjs/router";

function Nav() {
  return (
    <>
      <nav id="header" className="w-[40%] z-10 top-0">
        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <a className="text-teal-500 text-2xl no-underline hover:no-underline" href="#">
              Cartas al viento
            </a>
          </div>

          <div className="w-full flex mt-[35px] md:bg-white z-20 bg-teal-100">
            <ul className="list-reset justify-start flex-1 items-center">
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/frontpagxo'>Portada</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/dedicxo'>Dedicatoria</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/kagxoj'>Jaulas</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/kio-ni-estas'>Lo que somos</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/cxenoj'>Cadenas</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/nokte'>De noche</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/la-atendo'>La espera</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/nuda'>Desnuda</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/sub-via-ombro'>Debajo de tu sombra</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/en-la-flava-urbo'>En la ciudad amarilla</Link>
              </li>
              <li className="mr-3">
                <Link className='inline-block text-teal-600 no-underline hover:text-teal-900 hover:text-underline py-2 px-4' href='/revo'>Sueño</Link>
              </li>
            </ul>
          </div>

          <div className="flex w-full items-center font-sans px-4 mt-6">
            <img className="w-20 h-20 rounded-full mr-4" src="data:image/jpeg;base64,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" alt="Avatar of Author" />
            <div className="flex-1 px-2">
              <p className="text-base font-bold text-base md:text-xl leading-none mb-2">Luis Caraballo</p>
              <p className="text-gray-600 text-xs md:text-base">Escritor, programador & esperantista.</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;