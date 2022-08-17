function PageTitle (props) {

  return (
    <div className="font-sans">
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{props.title}</h1>
    </div>
  )
}

export default PageTitle;