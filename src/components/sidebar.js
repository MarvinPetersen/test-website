/**
 * Sidebar component
 */

import { Link } from "gatsby"
import * as React from "react"


const Sidebar = (props) => {

  return (
    <nav className={`${props.display} md:block p-4 bg-slate-100 md:h-screen sticky top-14`} id="sidebar">
      <div className="grid-cols-1">
        <div className="">
          <input className="m-2 p-2 outline outline-2 outline-slate-300 rounded-full" type="text" placeholder="Search..."></input>
        </div>
        <div>
          <Link className="m-2 p-2 hover:underline" to="/about" itemProp="url"> About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
