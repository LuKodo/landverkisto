import Nav from './components/Nav'

const App = props => (
  <>
    <div className="container w-full mx-auto pt-20 flex">
      <Nav />

      <div className="w-[60%] font-serif px-4 md:px-6 text-xl text-gray-800 leading-normal">
        {props.children}
      </div>
    </div>
  </>
)

export default App
