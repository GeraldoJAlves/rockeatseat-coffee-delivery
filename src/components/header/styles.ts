import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: stretch;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.625rem 0.5rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};
  }

  & > a {
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.yellowLight};
    padding: 0.5rem;

    & > span {
      position: absolute;
      background: ${(props) => props.theme.yellowDark};
      color: ${(props) => props.theme.white};
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      border-radius: 1rem;
      width: 1.25rem;
      font-weight: 700;
      font-size: 0.875rem;
      box-sizing: inherit;
      text-align: center;
      line-height: 1.3;
    }
  }
`

export const MapPinIcon = styled(MapPin)`
  fill: ${(props) => props.theme.purple};
  width: 22px;
  height: 22px;
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  fill: ${(props) => props.theme.yellowDark};
  width: 22px;
  height: 22px;
`
