import { HeaderContainer, MapPinIcon, Nav, ShoppingCartIcon } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <Nav>
        <button>
          <MapPinIcon weight="fill" />
          Porto Alegre, RS
        </button>

        <Link to={'/checkout'}>
          <span>3</span>
          <ShoppingCartIcon weight="fill" />
        </Link>
      </Nav>
    </HeaderContainer>
  )
}
