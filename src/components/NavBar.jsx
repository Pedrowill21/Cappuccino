import Styles from "./NavBar.module.css"
import { NavLink, Link} from "react-router-dom"

const NavBar = () => {
  return (

       <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <img src="../../public/cup-of-hot-chocolate.png" alt="coffee" />
      </div>
        <div>
        <ul className={Styles.list}>
            <li><NavLink className={Styles.link} to="/">Home</NavLink></li>
            <li><NavLink className={Styles.link} to="/about">Sobre</NavLink></li>
            <li><NavLink className={Styles.link} to="/products">Produtos</NavLink></li>
        </ul>
        </div>

    </nav>

  
  )
}

export default NavBar