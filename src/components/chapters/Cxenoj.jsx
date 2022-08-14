import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function Cxenoj () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="Cadenas" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Eres acero, alma inmisericorde<br/>
                  Portal impenetrable<br/>
                  Amor inalcanzable
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  La rosa se astilló<br/>
                  El espejo de mi alma se nubló<br/>
                  El sereno de octubre te ahogó<br/>
                  Vela apagada, lumbre intrépida
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Somos mundos solitarios<br/>
                  Vidas que sufren en silencio<br/>
                  Guías el uno del otro<br/>
                  Vidas de otra vida
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Aquí me marchito<br/>
                  Con brazos extendidos<br/>
                  Corazón enjuto<br/>
                  Cara mojada
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Allá te apagas<br/>
                  Callada, inmóvil<br/>
                  Como en un letargo de muerte<br/>
                  Como gente que no ama
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cxenoj
