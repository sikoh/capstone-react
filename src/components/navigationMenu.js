
import { Outlet, Link } from "react-router-dom";


const NavigationMenu = () => {
    return (
      <>
      <nav>
        <ul style={{display:"flex", justifyContent:"center", listStyleType: "none" }}>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/about">About</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/contact">Contact</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/1">Widget #1</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/2">Widget #2</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/3">Widget #3</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/4">Widget #4</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/5">Widget #5</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/6">Widget #6</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/widget/7">Widget #7</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/weather">Weather</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/swapi">Swapi API</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", paddingRight:"30px"}} to="/dropdown">DropDown Input</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </>
    )
  };
  
  export default NavigationMenu;