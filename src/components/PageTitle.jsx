function PageTitle(props) {

  return (
    <div className="font-serif">
      <em>
        <h1 className="font-bold break-normal text-teal-500 mt-6 text-3xl md:text-3xl">{props.title}</h1>
      </em>
    </div>
  )
}

export default PageTitle;