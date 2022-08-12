function PageTitle (props) {
  
  return (
    <h2 className="italic mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200">
      {props.title}
    </h2>
  )
}

export default PageTitle;