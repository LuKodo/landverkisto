function LateralMenu () {
  return (

    <div className="md:w-1/3 p-2 md:flex md:justify-center">
      <div className="md:fixed">
        <div className="md:block flex justify-center items-center">
          <div className="mb-2 mx-7 mt-4 justify-center items-center">
            <h1 className="italic md:text-lg text-lg text-gray-800 dark:text-blue-100">
              Cartas al viento y un
            </h1>

            <div className="italic md:text-2xl text-2xl text-gray-800 dark:text-blue-100">
              Café de
            </div>

            <div className="italic md:text-2xl text-2xl text-gray-800 dark:text-blue-100">  
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
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LateralMenu