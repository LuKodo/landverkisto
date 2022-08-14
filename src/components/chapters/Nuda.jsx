import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function Nuda () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="Desnuda" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Una noche la muerte se vistió de colores<br/>
                  quizá para no parecer tan cruel<br/>
                  se vistió de marrón, como las tierras desoladas<br/>
                  por el paso del tiempo<br/>
                  bañó sus vestidos con el carmín de la sangre,<br/>
                  fue un voraz espectáculo.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Cantó con el rosa pálido de suaves flores sin<br/>
                  terminar, descoloridas por el blanco de las<br/>
                  nubes<br/>
                  Burbujeó de grandes tonos amarillentos<br/>
                  como los del oro por los que el hombre<br/>
                  siempre mató.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  El olor a lluvia la acompañó cuando mudó en<br/>
                  azules celestes<br/>
                  como los ojos claros de Josefa<br/>
                  naranjas rojizos pintaron el valle cuando<br/>
                  atardeció entre sus vestiduras<br/>
                  iguales a los de un crepúsculo desértico.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Sus tonos verdes recordaban las soledades de<br/>
                  las selvas, o aquellos loros esmeralda que<br/>
                  repiten y repiten.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  La luna prestó su plata brillante, pero la<br/>
                  muerte no suele ser tan pretenciosa<br/>
                  y los marfiles del cielo eran demasiado para
                  ella.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  No encontró color que hiciera juego con tan<br/>
                  particular trabajo y aunque un arcoíris hubiera<br/>
                  sido mejor y ya el negro no estaba de moda,<br/>
                  aquella noche de estrellas brillantes en un<br/>
                  lienzo azabache,<br/>
                  la muerte se desnudó.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Nuda
