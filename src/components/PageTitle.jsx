function PageTitle (props) {
  
  return (
    <h2 className="mt-6 text-4xl text-gray-700 capitalize dark:text-blue-200">
      <em>{props.title}</em>
    </h2>
  )
}

export default PageTitle;