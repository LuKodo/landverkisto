import { Link } from "react-router-dom"

function LateralMenu () {

  return (
    <>
      <div className="md:w-1/3 p-2 md:flex md:justify-center">
        <div className="md:fixed">
          <div className="md:block flex justify-center items-center">
            <div className="mb-2 mx-7 mt-4 justify-center items-center">
              <h1 className="md:text-lg text-lg text-gray-800 dark:text-blue-100">
                Cartas al viento y un
              </h1>

              <div className="md:text-2xl text-2xl text-gray-800 dark:text-blue-100">
                Café de
              </div>

              <div className="md:text-2xl text-2xl text-gray-800 dark:text-blue-100">
                Medianoche
              </div>

              <div className="md:text-md font-bold text-md text-gray-800 uppercase dark:text-blue-100">
                Antología Poetica
              </div>
            </div>
          </div>

          <div className="mx-7 mt-6 hidden md:block">
            <div className="my-2 text-gray-600 flex dark:text-blue-100">
              <ul>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/frontpagxo'>Portada</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/dedicxo'>Dedicatoria</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/kagxoj'>Jaulas</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/kio-ni-estas'>Lo que somos</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/cxenoj'>Cadenas</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/nokte'>De noche</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/la-atendo'>La espera</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/nuda'>Desnuda</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/sub-via-ombro'>Debajo de tu sombra</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/en-la-flava-urbo'>En la ciudad amarilla</Link>
                </li>
                <li className="mr-3">
                  <Link className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4' to='/revo'>Sueño</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LateralMenu