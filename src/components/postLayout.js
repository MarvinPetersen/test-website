import * as React from "react"
import { Link } from "gatsby"
import { useState} from "react"

const PostLayout = ({ location, title, children}) => {
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

  const [m_visible,setMVisible] = useState(false);
  const [m_display,setMDisplay] = useState("hidden");

  const toggleMenu = () => {
    if (!m_visible) {
      setMDisplay("block");
      if (!visible) {
        setDisplay("block");
        setVisible(true)
      }
    } else {
      setMDisplay("hidden");
      setDisplay("hidden");
      setVisible(false)
    }
    setMVisible(!m_visible)
  }
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div>
        <div className="bg-slate-800 flex text-white justify-between sticky md:relative top-0 z-50">
          <header> {header} </header>
          <button className="p-4 md:hidden" onClick={toggleMenu}> Menu </button>
        </div>
        <div className="grid md:grid-cols-[max-content_1fr] gap-2">
          <nav className={`${display} md:block p-4 bg-slate-100 md:h-screen md:w-min fixed md:relative w-full top-14 md:top-0 z-40`} id="sidebar">
            <div className="grid-cols-1">
              <div className={`${m_display} md:block mx-2 mt-2`} >
                <Link className="p-2 hover:underline" to="/about" itemProp="url"> About</Link>
              </div>
            </div>
          </nav>
          <div className="p-4 col-span-1">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostLayout
