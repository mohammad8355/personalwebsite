import { useState } from "react";

const NavMenu = ({onChange}) => {
  const [activeLink,setActiveLink] = useState("Home");
  const setActiveLinkHandle = (linkname) => {
    setActiveLink(linkname);
  }
    return (
        <nav className="col-12">
          <ul className="nav col-12">
            <li className={activeLink == 'Home' ? ("active") : "" } onClick={ () =>  {onChange("Home");setActiveLink("Home");}}><i className="lni lni-home"></i></li>
            <li className={activeLink == 'Portfolio' ? ("active") : "" } onClick={() => {onChange("Portfolio");setActiveLink("Portfolio");}} ><i className="lni lni-briefcase"></i></li>
            <li className={activeLink == 'Skills' ? ("active") : "" } onClick={() => {onChange("Skills");setActiveLink("Skills")}} ><i className="lni lni-bulb"></i></li>
            <li className={activeLink == 'Articles' ? ("active") : "" } onClick={() => {onChange("Articles");setActiveLink("Articles")}}><i className="lni lni-pencil"></i></li>
          </ul>
        </nav>
    );
}
export default NavMenu;