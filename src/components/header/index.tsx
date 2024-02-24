import { HeaderContainer, MapPinIcon, Nav, ShoppingCartIcon } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Nav>
        <button>
          <MapPinIcon weight="fill" />
          Porto Alegre, RS
        </button>

        <a href="/checkout">
          <span>3</span>
          <ShoppingCartIcon weight="fill" />
        </a>
      </Nav>
    </HeaderContainer>
  )
}
