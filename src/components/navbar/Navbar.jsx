import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
export default function Navbar() {
  return (
    <div className="navbar">
        {/*Sidebar  */}
        <Sidebar />
        <div className="wrapper">
            <span>KhoaLVD</span>
            <div className="social flex">
                <a href="https://www.linkedin.com/in/khoalvd/"><img src="./linkedin.png" alt="" /></a>
                <a className="mt-1" href="https://dribbble.com/dante27"><img src="./dribble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
