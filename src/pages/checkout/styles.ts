import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  & > div {
    flex: 1;

    &:first-child {
      flex: 2;
    }
  }
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  & > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.title.XS};
    line-height: ${(props) => props.theme.title.lineHeight};
    color: ${(props) => props.theme.baseSubtitle};
  }

  & > div {
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    gap: 1rem;
    min-width: 636px;
  }

  & > main {
    border-radius: 6px 44px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    gap: 1rem;
  }
`

export const CardTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding-bottom: 1rem;

  & > div > h3 {
    font-weight: 400;
    font-size: ${(props) => props.theme.text.M};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseSubtitle};
  }

  & > div > span {
    font-size: ${(props) => props.theme.text.S};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseText};
  }

  & > svg {
    width: 22px;
    height: 22px;
  }
`

export const AddresesFields = styled.div`
  & > input {
    border: 1px solid ${(props) => props.theme.baseButton};
    padding: 0.75rem;
    font-size: ${(props) => props.theme.text.S};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseText};
    background-color: ${(props) => props.theme.baseInput};
    border-radius: 4px;

    &::-webkit-input-placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
    &:focus {
      border-color: ${(props) => props.theme.yellowDark};
    }

    &[name='cep'] {
      width: 200px;
      margin-right: auto;
    }
    &[name='street'] {
      width: 100%;
    }
    &[name='number'] {
      width: 200px;
    }
    &[name='complement'] {
      width: calc(100% - 200px - 1rem);
    }

    &[name='neighborhood'] {
      width: 200px;
    }

    &[name='city'] {
      width: calc(100% - 260px - 2rem);
    }

    &[name='uf'] {
      width: 60px;
    }
  }
`

export const MapPinLineIcon = styled(MapPinLine)`
  fill: ${(props) => props.theme.yellowDark};
`

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  fill: ${(props) => props.theme.purple};
`

export const PaymentMethods = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;

  & > input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    display: none;
    &:checked + label {
      background-color: ${(props) => props.theme.purpleLight};
      border: 1px solid ${(props) => props.theme.purple};
    }
  }
  & > label {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-transform: uppercase;
    border: 1px solid transparent;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;

    font-size: ${(props) => props.theme.text.buttonM};
    color: ${(props) => props.theme.baseText};
    background-color: ${(props) => props.theme.baseButton};

    &:hover {
      transition: 0.2s background-color ease-in-out;
      background-color: ${(props) => props.theme.baseHover};
    }

    & > svg {
      width: 1rem;
      height: 1rem;
      fill: ${(props) => props.theme.purple};
    }
  }
`

export const OrderFields = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 448px;
  gap: 1.5rem;
`

export const OrderItem = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(1.5rem);
    border-bottom: 1px solid ${(props) => props.theme.baseButton};
  }
`

export const OrderItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
  & > img {
    object-fit: cover;
    width: 64px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const OrderItemActions = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
`

export const ItemTitle = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.text.M};
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 400;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.25rem;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.text.buttonM};
  color: ${(props) => props.theme.baseText};
  background-color: ${(props) => props.theme.baseButton};

  &:hover {
    transition: 0.2s background-color ease-in;
    background-color: ${(props) => props.theme.baseHover};
  }

  & > svg {
    fill: ${(props) => props.theme.purple};
  }
`

export const ItemPrice = styled.span`
  margin-left: auto;
  font-size: ${(props) => props.theme.text.M};
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 700;
`

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > span {
      font-size: ${(props) => props.theme.text.S};
      color: ${(props) => props.theme.baseText};
    }

    &:last-child > span {
      font-size: ${(props) => props.theme.text.L};
      font-weight: 700;
    }
  }
`

export const ConfirmButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;

  font-size: ${(props) => props.theme.text.buttonG};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    transition: 0.2s background-color ease-in;
    background-color: ${(props) => props.theme.yellowDark};
  }
`
