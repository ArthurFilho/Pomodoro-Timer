import { HeaderContainer } from './styles'
import { Timer, Scroll, HourglassMedium } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HourglassMedium size={24} color="#AB222E" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
