import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function Dedicatoria () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <p className="mt-8 text-3xl mb-4 dark:bg-gray-800 dark:text-blue-200 text-right">
                  <em>
                    Este libro está dedicado a Ella.
                    <br />
                    <br />
                    <br />
                    Gracias a todos los que quisieron
                    ver este sueño hecho realidad.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dedicatoria
