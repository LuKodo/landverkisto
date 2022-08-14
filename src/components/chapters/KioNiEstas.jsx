import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function KioNiEstas () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="Lo que somos" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  ¿Qué eres tú?<br/>
                  Mar de plata<br/>
                  Sol oscuro de marzo<br/>
                  Sombra incandescente<br/>
                  Presa libre<br/>
                  Canción ahogada
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  ¿Qué soy yo?<br/>
                  Playa desierta<br/>
                  Luna menguante<br/>
                  Lámpara de luz quebrada<br/>
                  Jaula de puertas abiertas<br/>
                  Grito en el cielo
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  ¿Qué somos?<br/>
                  Brisa de agosto<br/>
                  Atardecer de diciembre<br/>
                  Senderos no recorridos<br/>
                  Cárceles de libertad<br/>
                  Melodía de verano<br/>
                  Almas de piezas completas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default KioNiEstas
