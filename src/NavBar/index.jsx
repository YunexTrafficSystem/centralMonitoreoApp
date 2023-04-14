import { YunexLogo } from './YunexLogo'
import { MenuButton } from './MenuButton'

function NavBar() {
  return (
    <nav className='navigation'>
      <div id="logo">
        <YunexLogo />
      </div>
      <div id="nav-items">
        <ul className='navigation-items'>
          <li><MenuButton text="MAPA" /></li>
          <li><MenuButton text="CONFIGURACIÓN" /></li>
          <li><MenuButton text="ANÁLISIS" /></li>
        </ul>
      </div>
    </nav>
  )
}

export { NavBar }