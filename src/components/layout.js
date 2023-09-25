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
      <h1 className="m-0 p-4 text-4xl font-medium text-white">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h2 className="m-0 p-4 text-xl font-medium text-white">
        <Link  to="/">
          {title}
        </Link>
      </h2>
    )
  }

  const [visible,setVisible] = useState(false);
  const [display,setDisplay] = useState("hidden");

  const toggleSidebar = () => {
    if (!visible) {
      setDisplay("block");
    } else {
      setDisplay("hidden");
    }
    setVisible(!visible)
  }
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div>
        <div className="bg-slate-800 flex text-white justify-between sticky md:relative top-0 z-50">
          <header> {header} </header>
          <button className="p-4 md:hidden" onClick={toggleSidebar}> Menu </button>
        </div>
        <div className="grid md:grid-cols-[max-content_1fr] gap-2">
          <Sidebar className="col-span-1" display={display}/>
          <div className="mx-10 p-4 col-span-1">
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
