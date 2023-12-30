import Guide from "./Guide"
import PageTitle from "./PageTitle"

function Cxenoj () {
  return (
    <>
      <PageTitle title="Cadenas" />
      <p className="py-4">
        Eres acero, alma inmisericorde<br />
        Portal impenetrable<br />
        Amor inalcanzable
      </p>
      <p className="py-4">
        La rosa se astilló<br />
        El espejo de mi alma se nubló<br />
        El sereno de octubre te ahogó<br />
        Vela apagada, lumbre intrépida
      </p>
      <p className="py-4">
        Somos mundos solitarios<br />
        Vidas que sufren en silencio<br />
        Guías el uno del otro<br />
        Vidas de otra vida
      </p>
      <p className="py-4">
        Aquí me marchito<br />
        Con brazos extendidos<br />
        Corazón enjuto<br />
        Cara mojada
      </p>
      <p className="py-4">
        Allá te apagas<br />
        Callada, inmóvil<br />
        Como en un letargo de muerte<br />
        Como gente que no ama
      </p>

      <Guide leftLink='/kio-ni-estas' leftText='Lo que somos' rigthLink='/nokte' rigthText='De noche' />
    </>
  )
}

function Dedicatoria () {
  return (
    <>
      <blockquote className="border-r-4 text-right border-teal-500 italic my-8 pr-8 md:pl-12">
        Este libro está dedicado a Ella.
        <br />
        <br />
        <br />
        Gracias a todos los que quisieron
        ver este sueño hecho realidad.
      </blockquote>

      <Guide leftLink='/frontpagxo' leftText='Portada' rigthLink='/kagxoj' rigthText='Jaulas' />
    </>
  )
}

function EnLaFlavaUrbo () {
  return (
    <>
      <PageTitle title="En la ciudad amarilla" />
      <p className="py-4">
        En tu ausencia, quise escribir el poema más<br />
        triste del mundo, pero entre las calles<br />
        ardientes de esta ciudad amarilla los rencores<br />
        olvidados buscan renacer en la boca de un<br />
        pájaro negro.
      </p>
      <p className="py-4">
        No hay quien represente la oscuridad, y los<br />
        temores se esfumaron como la espuma del<br />
        mar, ahora, entre las sombras umbrosas del<br />
        disfraz que todos portan, existe la idea de<br />
        nunca escribir, de nunca soñar.
      </p>
      <p className="py-4">
        Y entre los recuerdos buscaba inspiración, para<br />
        con sangre mestiza marcar en papel de plata<br />
        mis amores prohibidos, las realidades absurdas<br />
        de los rincones de esta ciudad amarilla,<br />
        rememorando entre sus calles aquellos besos<br />
        que no dimos, y los abrazos que la brisa<br />
        veraniega se llevó.
      </p>
      <p className="py-4">
        Quería escribir, pero en la bóveda vacía del<br />
        pecho no yace la llama que hace tiempo<br />
        brillaba la cual con luz u oscuridad hacían<br />
        mover lo inmóvil. Ahora viven las semblanzas<br />
        tristes de un barrilete elevado con hilos de<br />
        luna en una muralla.
      </p>
      <p className="py-4">
        No pude escribir, porque la ciudad me tragó, y<br />
        la tristeza no es amarilla, y los mapas antiguos<br />
        los cuales no llevan a tesoros escondidos ni a<br />
        palacios para descubrir, en esta ciudad<br />
        amarilla el tiempo se detuvo, y las sonrisas se<br />
        apagaron como cuando acaba la fiesta.
      </p>
      <p className="py-4">
        Quería renacer, pero los sueños no renacen en<br />
        la boca de un pájaro negro a la orilla del mar<br />
        espumoso, en una ciudad amarilla.
      </p>

      <Guide leftLink='/sub-via-ombro' leftText='Debajo de tu sombra' rigthLink='/revo' rigthText='Sueño' />
    </>
  )
}

function FrontPage () {
  return (
    <>
      <blockquote className="border-l-4 border-teal-500 italic my-8 pl-8 md:pl-12">
        Cartas escritas desde el corazón inexistente para un amor incalculable,
        donde se descubren los mundos de introspección de un joven poeta y su alma desgarrada.
      </blockquote>

      <Guide rigthLink='/dedicxo' rigthText='Dedicatoria' />
    </>
  )
}

function Kagxoj () {
  return (
    <>
      <PageTitle title="Jaulas" />
      <p className="py-4">
        Pájaros efímeros<br />
        Vuelo tormentoso<br />
        Entre trinos y voces celestiales<br />
        ¿Quién pidió nacer así?
      </p>
      <p className="py-4">
        Jaula maldita<br />
        Potente dominas al más fiero<br />
        Poderosa suprimes la alegría<br />
        Implacable nublas los sueños
      </p>
      <p className="py-4">
        Jaula del infierno<br />
        Eterna esclava<br />
        ¿Dónde dejaste mis alas?<br />
        ¿También las cortaste?
      </p>
      <p className="py-4">
        Esperanza rota, enclaustrada<br />
        Cielo rayado de negro<br />
        Por más que abras la puerta<br />
        Mis sueños quedaron en ella
      </p>
      <p className="py-4">
        Jaula virgen<br />
        Etérea soledad de ayer<br />
        Juventud torpe que creyó<br />
        Ciegos ineptos que cayeron<br />
        Vida ahogada<br />
        Ya el bosque no me hace feliz...
      </p>

      <Guide leftLink='/dedicxo' leftText='Dedicatoria' rigthLink='/kio-ni-estas' rigthText='Lo que somos' />
    </>
  )
}

function KioNiEstas () {
  return (
    <>
      <PageTitle title="Lo que somos" />
      <p className="py-4">
        ¿Qué eres tú?<br />
        Mar de plata<br />
        Sol oscuro de marzo<br />
        Sombra incandescente<br />
        Presa libre<br />
        Canción ahogada
      </p>
      <p className="py-4">
        ¿Qué soy yo?<br />
        Playa desierta<br />
        Luna menguante<br />
        Lámpara de luz quebrada<br />
        Jaula de puertas abiertas<br />
        Grito en el cielo
      </p>
      <p className="py-4">
        ¿Qué somos?<br />
        Brisa de agosto<br />
        Atardecer de diciembre<br />
        Senderos no recorridos<br />
        Cárceles de libertad<br />
        Melodía de verano<br />
        Almas de piezas completas
      </p>

      <Guide leftLink='/kagxoj' leftText='Jaulas' rigthLink='/cxenoj' rigthText='Cadenas' />
    </>
  )
}

function LaAtendo () {
  return (
    <>
      <PageTitle title="La Espera" />
      <p className="py-4">
        Estoy esperándote.<br />
        Y la inerte brisa de la noche seca de golpe las
        lágrimas en mis mejillas.<br />
        Y el nauseabundo aroma de los floreros con
        rosas a medio podrir me retiene.<br />
        Y la noche, llena de destellos plateados y rojos
        mortecinos me recuerdan las soledades de
        abril.
      </p>
      <p className="py-4">
        Estoy esperándote.<br />
        Pero quizá seas tú quien me encuentre y me<br />
        destruya; es posible que si.<br />
        Pero solo veo distantes lamparitas que invaden<br />
        mi oscuridad.<br />
        Pero no estás, no estoy, no estamos, como<br />
        siempre, como nunca, como un todo.
      </p>
      <p className="py-4">
        Estoy esperándote.<br />
        Aquellos cantos callados de los invisibles<br />
        atormentan mi descanso.<br />
        Aquellos soles argentos que brillan silentes en<br />
        la mortalidad.<br />
        Aquellos versos sagrados que nunca debieron<br />
        ser mencionados en las oscuras tardes.
      </p>
      <p className="py-4">
        Estoy esperándote.<br />
        No obstante, ellos me buscan, me esperan en<br />
        los rincones vacíos.<br />
        No, no puedo moverme, no quiero dejar la<br />
        seguridad de mi penumbra.<br />
        No es posible callar los ecos del silencio,<br />
        brillan oscuramente ¡míralos!<br />
        No ha de ser correcto el golpe sibilante de sus<br />
        risas que enmudecen el grito tardío de mis<br />
        pensamientos.
      </p>
      <p className="py-4">
        Te estoy esperando.<br />
        Y espero que cuando llegues enciendas la luz,<br />
        que la traigas contigo.<br />
        Pero tal vez no funcione en el reino de los<br />
        blancos; Aquellos que a pulso brillante<br />
        plantaron árboles de metal a mí al tealedor y<br />
        no me dejaron volar en las planicies de mi<br />
        mundo y se robaron mis noches salpicadas,<br />
        para marcarme con el acero ardiente de la vida<br />
        en la ciudad.
      </p>

      <Guide leftLink='/nokte' leftText='De noche' rigthLink='/nuda' rigthText='Desnuda' />
    </>
  )
}

function Nokte () {
  return (
    <>
      <PageTitle title="De noche" />
      <p className="py-4">
        Entonces, ¿eso es lo que significa mirar de cara<br />
        al vacío?, la manifestación final del universo<br />
        pleno, pletórico.
      </p>
      <p className="py-4">
        Una bella mancha blanca sumergida en un<br />
        océano azabache, un océano interminable,<br />
        ondulante, dormido, tendría un poco más de<br />
        trece mil años ¿yo qué sé?
      </p>
      <p className="py-4">
        Pero aquello parecía una sinfonía brutal del<br />
        cosmos taciturno, una sonata envuelta en<br />
        rayos de esperanza neutral; con dos grandes<br />
        estrellas marrones, apostadas sobre una<br />
        montaña imponente, tan alta como el cielo<br />
        mismo.
      </p>
      <p className="py-4">
        No pasó mucho para que me diera cuenta<br />
        dónde estaba el peligro, allí bajo la majestuosa<br />
        montaña, en aquel cúmulo de seguridad estaba<br />
        cernido, sobre un maravilloso agujero negro<br />
        grande y silente, incluso delicioso y atrayente,<br />
        oscuramente iluminado por una constelación<br />
        de animosas estrellas.
      </p>
      <p className="py-4">
        Y ese remolino sin fin amenazaba con<br />
        atraparme, la brisa cósmica encrespó el negro<br />
        mar de la oscuridad. Aquel frío de las lejanas<br />
        lumbreras apagándose cristalizó en mi pechó<br />
        esa imagen.
      </p>
      <p className="py-4">
        Faltarían palabras para el sin sentido que me<br />
        embriagó aquella mañana.
      </p>
      <p className="py-4">
        Al subir a aquel barco, el paisaje estremecido<br />
        me hizo comprender lo que veían mis ojos, la<br />
        epifanía de los que en la oscuridad sueñan.
      </p>
      <p className="py-4">
        Aquello no era más que la Vía Láctea.
      </p>

      <Guide leftLink='/cxenoj' leftText='Cadenas' rigthLink='/la-atendo' rigthText='La Espera' />
    </>
  )
}

function Nuda () {
  return (
    <>
      <PageTitle title="Desnuda" />
      <p className="py-4">
        Una noche la muerte se vistió de colores<br />
        quizá para no parecer tan cruel<br />
        se vistió de marrón, como las tierras desoladas<br />
        por el paso del tiempo<br />
        bañó sus vestidos con el carmín de la sangre,<br />
        fue un voraz espectáculo.
      </p>
      <p className="py-4">
        Cantó con el rosa pálido de suaves flores sin<br />
        terminar, descoloridas por el blanco de las<br />
        nubes<br />
        Burbujeó de grandes tonos amarillentos<br />
        como los del oro por los que el hombre<br />
        siempre mató.
      </p>
      <p className="py-4">
        El olor a lluvia la acompañó cuando mudó en<br />
        azules celestes<br />
        como los ojos claros de Josefa<br />
        naranjas rojizos pintaron el valle cuando<br />
        atardeció entre sus vestiduras<br />
        iguales a los de un crepúsculo desértico.
      </p>
      <p className="py-4">
        Sus tonos verdes recordaban las soledades de<br />
        las selvas, o aquellos loros esmeralda que<br />
        repiten y repiten.
      </p>
      <p className="py-4">
        La luna prestó su plata brillante, pero la<br />
        muerte no suele ser tan pretenciosa<br />
        y los marfiles del cielo eran demasiado para
        ella.
      </p>
      <p className="py-4">
        No encontró color que hiciera juego con tan<br />
        particular trabajo y aunque un arcoíris hubiera<br />
        sido mejor y ya el negro no estaba de moda,<br />
        aquella noche de estrellas brillantes en un<br />
        lienzo azabache,<br />
        la muerte se desnudó.
      </p>

      <Guide leftLink='la-atendo' leftText='La Espera' rigthLink='/sub-via-ombro' rigthText='Debajo de tu sombra' />
    </>
  )
}

function Revo () {
  return (
    <>
      <PageTitle title="Sueño" />
      <p className="py-4">
        ¡Fuego! ¡Fuego!<br />
        Angustiantes alaridos sordos en medio de<br />
        noches silenciosas, en calles oscurecidas por la<br />
        rojiza llama. Por el fuego interminable de tus<br />
        cabellos negros. ¡Corre!
      </p>
      <p className="py-4">
        ¡Fuego! ¡Fuego!<br />
        Corre presurosa, aúlla en la rivera de la noche,<br />
        entre el filo más delgado de la luna y la gentil<br />
        curva que esbozan tus labios, labios de fuego.<br />
        Ardamos en llamas esta noche.<br />
      </p>
      <p className="py-4">
        ¡Quema! ¡Quema!<br />
        Sello interminable marcado en la piel, entre<br />
        roces sin sentido y amarguras solitarias,<br />
        tócame, déjame, mírame y no traigas a escena<br />
        la lúgubre media noche en la que me perdí en<br />
        el bosque de tus manos.<br />
      </p>
      <p className="py-4">
        ¡Huye! ¡Vuela!
      </p>
      <p className="py-4">
        Abre tu mar y viértelo en mi pecho, unta tu<br />
        sangre entre el calor del fuego que quema en<br />
        mis manos, entre mis dedos temblorosos,<br />
        entre el éxtasis rotundo de rojizas llamas,<br />
        bésame con tus labios de fuego y hagamos<br />
        catarsis frente al bosque de tus manos, entre<br />
        las llamas oscuras de una noche en la que<br />
        soñaba.
      </p>
      <p className="py-4">
        Sueña,<br />
        Mariposa intrépida, pétalos de azabache y<br />
        claro de luna, sueña en el solitario cuenco de<br />
        mis brazos y en la lejanía escucha el sonar<br />
        triste de tambores africanos y cumbia de<br />
        playa. Abre las alas al viento en la noche, esfera<br />
        destructiva en manos animosas, en la planicie<br />
        veraniega, en el tejado de mi morada, en mi<br />
        cabeza y en mis sueños.
      </p>

      <Guide leftLink='/en-la-flava-urbo' leftText='En la ciudad amarilla' />
    </>
  )
}

function SubViaOmbro () {
  return (
    <>
      <PageTitle title="Debajo de tu sombra" />
      <p className="py-4">
        Allí estaba, perdido, taciturno, en mis<br />
        pensamientos, jodido de tanta estupidez,<br />
        viendo cada hoja que caía en ese bello<br />
        atardecer de agosto, la brisa otoñal me<br />
        brindaba la mayor calidez que podía y el<br />
        sueño que irradiaba el cielo arrebolado me<br />
        hizo caer en un estado de meditación, fue allí<br />
        que me di cuenta que no necesitaba nada más,<br />
        que no requería el concepto de nadie, ni la<br />
        burla ni el elogio significaban nada para mí en<br />
        ese hermoso instante en el que nada más valía<br />
        mi felicidad.<br />
      </p>
      <p className="py-4">
        No sé por qué, pero después de un largo rato<br />
        pensando en esa plenitud tan grande, allí,<br />
        sentado en esa esquina, debajo de esa bonga<br />
        milenaria que desplegaba su inmensa<br />
        sabiduría sobre mí, sus años eran testigos de<br />
        cuantos habían llegado bajo su sombra a llorar,<br />
        reír o morir incluso; ahí en su descomunal<br />
        tallo se hallaba la prueba viviente de aquello<br />
        que solo ese árbol sabía.<br />
      </p>
      <p className="py-4">
        De verdad no sé, pero fue allí dormido, en<br />
        medio de las cuerdas de Morfeo que me<br />
        sujetaban fuerte hasta sumirme en la más<br />
        profunda oscuridad del sueño, allí sentado y<br />
        cabeceando, rendido del camino de la vida, del<br />
        pesado yugo de ser un ser viviente, agotado de<br />
        las penas fue que dormí, dormí como nunca, y<br />
        sentí por primera vez un reposo en el mismo<br />
        centro de mi vida, justo ahí en el alma, en el<br />
        mismo espíritu que da aliento.<br />
      </p>
      <p className="py-4">
        Ahora me entristece saber que los muchos que<br />
        llegaron hasta ti intentando cambiar su destino<br />
        jamás pudieron verte cómo te vi aquella tarde,<br />
        y es que algunos anhelaban de ti incluso tu<br />
        propia vida, pero no eran capaces de ver<br />
        cuánto dabas con solo sentarse a tu sombra.<br />
      </p>
      <p className="py-4">
        Ese atardecer otoñal que tanto recuerdo, supe<br />
        lo que era el descanso, después de vagar y<br />
        errar tantas veces siempre podía volver a tu<br />
        cobijo, jamás era rechazado, al contrario,<br />
        siempre que volvía había una nueva rama para<br />
        protegerme aún más del inclemente sol, me<br />
        gusta estar así, sin pensar en nada ni en nadie,<br />
        sentado viendo la parafernalia que da el<br />
        universo cada tarde cuando el sol se acuesta y<br />
        da paso a la tenue luz de la gentil noche.<br />
      </p>
      <p className="py-4">
        Quisiera quedarme, vivir bajo tu abrigo el<br />
        resto de mis días, ya que son pocos pero la<br />
        ciudad ha talado el resto de árboles a tu<br />
        altealedor y siento tanto miedo al solo pensar<br />
        que esta noche seas el próximo.<br />
      </p>
      <p className="py-4">
        Mientras caminaba a casa te pensé, e incluso te<br />
        escribí esta carta para que supieras cuanto te<br />
        necesito, cuanto realmente eres necesario para<br />
        tener un poco de sentido en esta vida.<br /><br />
        ... Cuando volví a la mañana, ya no estabas
      </p>

      <Guide leftLink='/nuda' leftText='Desnuda' rigthLink='/en-la-flava-urbo' rigthText='En la ciudad amarilla' />
    </>
  )
}

export { Dedicatoria, Cxenoj, EnLaFlavaUrbo, FrontPage, Kagxoj, KioNiEstas, LaAtendo, Nokte, Nuda, Revo, SubViaOmbro }
