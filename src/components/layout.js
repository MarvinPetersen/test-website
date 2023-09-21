import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import Sidebar from "../components/sidebar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-4xl font-medium p-4 text-white">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="p-4 text-xl font-medium" to="/">
        {title}
      </Link>
    )
  }

  const [visible,setVisible] = useState(false);
  const [display,setDisplay] = useState("hidden");

  const toggleSidebar = () => {
    if (!visible) {
      setDisplay("grid");
    } else {
      setDisplay("hidden");
    }
    setVisible(!visible)
  }
  
  return (
    // <div className="global-wrapper" data-is-root-path={isRootPath}>
    <div>
      <div className="bg-slate-800 flex text-white justify-between">
        <header> {header} </header>
        <button className="p-4" onClick={toggleSidebar}> Menu </button>
      </div>
      <div className="grid md:grid-cols-[max-content_1fr] gap-2">
        <Sidebar className="col-span-1" display={display}/>
        <div className="col-span-1">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
