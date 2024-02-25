import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: stretch;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.text.S};
    line-height: ${(props) => props.theme.text.lineHeight};
    gap: 0.25rem;
    padding: 0.5rem 0.5rem;
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
      font-size: ${(props) => props.theme.text.S};
      box-sizing: inherit;
      text-align: center;
      line-height: ${(props) => props.theme.text.lineHeight};
    }
  }
`

export const MapPinIcon = styled(MapPin)`
  fill: ${(props) => props.theme.purple};
  width: 1.375rem;
  height: 1.375rem;
  line-height: ${(props) => props.theme.text.lineHeight};
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  fill: ${(props) => props.theme.yellowDark};
  width: 1.375rem;
  height: 1.375rem;
  line-height: ${(props) => props.theme.text.lineHeight};
`
