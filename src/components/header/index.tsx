import {
  CheckoutLink,
  HeaderContainer,
  LocationButton,
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
        <LocationButton>
          <MapPinIcon weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <CheckoutLink to={'/checkout'}>
          <span>3</span>
          <ShoppingCartIcon weight="fill" />
        </CheckoutLink>
      </Nav>
    </HeaderContainer>
  )
}
