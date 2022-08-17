function PageTitle (props) {

  return (
    <div className="font-serif">
      <em>
        <h1 className="font-bold break-normal text-teal-500 pt-6 pb-2 text-3xl md:text-4xl">{props.title}</h1>
      </em>
    </div>
  )
}

export default PageTitle;