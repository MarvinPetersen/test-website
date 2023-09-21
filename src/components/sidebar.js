/**
 * Sidebar component
 */

import { Link } from "gatsby"
import * as React from "react"


const Sidebar = (props) => {

  return (
    <div className="z-50 ">
      <nav className={`${props.display} p-4 rounded-bl-lg bg-slate-100 grid-cols-1 ml-auto absolute top-18 right-0`} id="sidebar">
        <div>
          <input className="m-2 p-2 outline outline-2 outline-slate-300 rounded-full" type="text" placeholder="Search..."></input>
        </div>
        <div>
          <Link className="m-2 p-2 hover:underline" to="/about" itemProp="url"> About</Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
