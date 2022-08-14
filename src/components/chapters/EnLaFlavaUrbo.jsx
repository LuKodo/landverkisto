import LateralMenu from "../LateralMenu"
import PageTitle from "../PageTitle"

function EnLaFlavaUrbo () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="En la ciudad amarilla" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  En tu ausencia, quise escribir el poema más<br/>
                  triste del mundo, pero entre las calles<br/>
                  ardientes de esta ciudad amarilla los rencores<br/>
                  olvidados buscan renacer en la boca de un<br/>
                  pájaro negro.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  No hay quien represente la oscuridad, y los<br/>
                  temores se esfumaron como la espuma del<br/>
                  mar, ahora, entre las sombras umbrosas del<br/>
                  disfraz que todos portan, existe la idea de<br/>
                  nunca escribir, de nunca soñar.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Y entre los recuerdos buscaba inspiración, para<br/>
                  con sangre mestiza marcar en papel de plata<br/>
                  mis amores prohibidos, las realidades absurdas<br/>
                  de los rincones de esta ciudad amarilla,<br/>
                  rememorando entre sus calles aquellos besos<br/>
                  que no dimos, y los abrazos que la brisa<br/>
                  veraniega se llevó.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Quería escribir, pero en la bóveda vacía del<br/>
                  pecho no yace la llama que hace tiempo<br/>
                  brillaba la cual con luz u oscuridad hacían<br/>
                  mover lo inmóvil. Ahora viven las semblanzas<br/>
                  tristes de un barrilete elevado con hilos de<br/>
                  luna en una muralla.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  No pude escribir, porque la ciudad me tragó, y<br/>
                  la tristeza no es amarilla, y los mapas antiguos<br/>
                  los cuales no llevan a tesoros escondidos ni a<br/>
                  palacios para descubrir, en esta ciudad<br/>
                  amarilla el tiempo se detuvo, y las sonrisas se<br/>
                  apagaron como cuando acaba la fiesta.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200">
                  Quería renacer, pero los sueños no renacen en<br/>
                  la boca de un pájaro negro a la orilla del mar<br/>
                  espumoso, en una ciudad amarilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EnLaFlavaUrbo
