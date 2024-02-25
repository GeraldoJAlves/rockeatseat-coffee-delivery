import {
  CheckoutLink,
  HeaderContainer,
  Location,
  LogoLink,
  MapPinIcon,
  Nav,
  ShoppingCartIcon,
} from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <LogoLink to={'/'}>
          <img src={logo} alt="" />
        </LogoLink>
        <Location>
          <MapPinIcon weight="fill" />
          Porto Alegre, RS
        </Location>

        <CheckoutLink to={'/checkout'}>
          <span>3</span>
          <ShoppingCartIcon weight="fill" />
        </CheckoutLink>
      </Nav>
    </HeaderContainer>
  )
}
