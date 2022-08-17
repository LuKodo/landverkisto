function Nav () {
  document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      document.getElementById("header").classList.add("bg-white");
      document.getElementById("header").classList.add("shadow");
      document.getElementById("nav-content").classList.remove("bg-gray-100");
      document.getElementById("nav-content").classList.add("bg-white");
    } else {
      document.getElementById("header").classList.remove("bg-white");
      document.getElementById("header").classList.remove("shadow");
      document.getElementById("nav-content").classList.remove("bg-white");
      document.getElementById("nav-content").classList.add("bg-gray-100");
    }
  });


  const onClickToggle = () => {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

  return (
    <>
      <nav id="header" className="fixed w-full z-10 top-0">
        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
              Cartas al viento
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" onClick={onClickToggle} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 md:bg-transparent z-20 bg-gray-100" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/frontpagxo'>Portada</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/dedicxo'>Dedicatoria</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/kagxoj'>Jaulas</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/kio-ni-estas'>Lo que somos</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/cxenoj'>Cadenas</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/nokte'>De noche</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/la-atendo'>La espera</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/nuda'>Desnuda</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/sub-via-ombro'>Debajo de tu sombra</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/en-la-flava-urbo'>En la ciudad amarilla</a>
              </li>
              <li className="mr-3">
                <a className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' href='/revo'>Sueño</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;