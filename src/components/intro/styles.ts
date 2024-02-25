import styled from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import background from '../../assets/background.svg'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  background: url(${background}) no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 5.75rem;
  padding-bottom: 5.75rem;
  /* box-shadow: inset 0 0 16px 16px ${(props) => props.theme.background}; */
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
  gap: 4.125rem;
  padding-bottom: 0.5rem;
`

export const TitleContainer = styled.div`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.title.XL};
    color: ${(props) => props.theme.baseTitle};
    line-height: ${(props) => props.theme.title.lineHeight};
  }

  & > span {
    font-size: ${(props) => props.theme.text.L};
    color: ${(props) => props.theme.baseSubtitle};
    line-height: ${(props) => props.theme.text.lineHeight};
  }
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  margin-top: auto;
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > svg {
      box-sizing: initial;
      fill: ${(props) => props.theme.background};
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`
export const ShoppingCartIcon = styled(ShoppingCart)`
  background-color: ${(props) => props.theme.yellowDark};
`
export const PackageIcon = styled(Package)`
  background-color: ${(props) => props.theme.baseText};
`
export const TimerIcon = styled(Timer)`
  background-color: ${(props) => props.theme.yellow};
`
export const CoffeeIcon = styled(Coffee)`
  background-color: ${(props) => props.theme.purple};
`

export const Illustration = styled.img`
  object-fit: cover;
  width: 476px;
  max-height: 360px;
`
