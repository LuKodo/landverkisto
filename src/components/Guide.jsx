import { Link } from "preact-router/match";

function Guide (props) {
  return (
    <div className="font-sans flex justify-between content-center pb-12">
      <div className="text-left bg-teal-500 rounded-2xl">
        {props.leftLink && <Link href={props.leftLink} className="break-normal text-base md:text-sm text-white p-4 font-bold no-underline">{props.leftText}</Link>}
      </div>
      <div className="text-right bg-teal-500 rounded-2xl">
        {props.rigthLink && <Link href={props.rigthLink} className="break-normal text-base md:text-sm text-white p-4 font-bold no-underline">{props.rigthText}</Link>}
      </div>
    </div>
  )
}

export default Guide;