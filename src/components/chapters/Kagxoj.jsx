import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function Kagxoj () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="Jaulas" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Pájaros efímeros<br/>
                  Vuelo tormentoso<br/>
                  Entre trinos y voces celestiales<br/>
                  ¿Quién pidió nacer así?
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Jaula maldita<br/>
                  Potente dominas al más fiero<br/>
                  Poderosa suprimes la alegría<br/>
                  Implacable nublas los sueños
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Jaula del infierno<br/>
                  Eterna esclava<br/>
                  ¿Dónde dejaste mis alas?<br/>
                  ¿También las cortaste?
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Esperanza rota, enclaustrada<br/>
                  Cielo rayado de negro<br/>
                  Por más que abras la puerta<br/>
                  Mis sueños quedaron en ella
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Jaula virgen<br/>
                  Etérea soledad de ayer<br/>
                  Juventud torpe que creyó<br/>
                  Ciegos ineptos que cayeron<br/>
                  Vida ahogada<br/>
                  Ya el bosque no me hace feliz...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Kagxoj
