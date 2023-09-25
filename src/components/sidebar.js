/**
 * Sidebar component
 */

import { Link } from "gatsby"
import * as React from "react"
import { useState, useEffect } from "react"
import { useLunr } from "react-lunr"

const Sidebar = (props) => {
  
  const [query, setQuery] = useState("")
  var results = useLunr(query, props.index, props.store);
  
  useEffect(() => {
    props.callback(results, query);
  });
 
  const Search = evt => {
    setQuery(evt.target.value);
  }
  

  return (
    <nav className={`${props.display} md:block p-4 bg-slate-100 md:h-screen sticky top-14 md:top-0 z-40`} id="sidebar">
      <div className="grid-cols-1">
        <div className="">
          <input className="m-2 p-2 outline outline-2 outline-slate-300 rounded-full" type="text" value={query}  placeholder="Search..." onChange={Search}></input>
        </div>
        <div>
          <Link className="m-2 p-2 hover:underline" to="/about" itemProp="url"> About</Link>
        </div>
      </div>
      {/* <footer className="absolute bottom-0">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </nav>
  )
}

export default Sidebar
