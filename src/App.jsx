import LateralMenu from "./assets/components/LateralMenu"
import PageTitle from "./assets/components/PageTitle"

function App () {

  return (
    <div className="w-full px-6 pb-12 antiliased bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="dark:bg-gray-900 mt-6">
          <div className="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
            <LateralMenu />
            <div className="md:w-2/3 px-8">
              <div className="mb-6">
                <PageTitle title="Cartas al viento" />
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mdrathik" className="text-sm text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">github</span>
            <i className="bi bi-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#" className="text-sm text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">Linkedin</span>
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:hello@rathik.dev" className="text-sm text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">mail</span>
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">facebook</span>
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2022</div>
          <div>•</div>
          <a href="/">Luis Caraballo - Let's start coding</a>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"></a>
        </div>
      </div>
    </div>

  )
}

export default App
