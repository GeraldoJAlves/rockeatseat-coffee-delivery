import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-top: 80px;
  padding-bottom: 80px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.title.L};
    line-height: ${(props) => props.theme.title.lineHeight};
    color: ${(props) => props.theme.yellowDark};
  }

  & > p {
    font-size: ${(props) => props.theme.text.L};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const OrderDetailsWrapper = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  padding: 1px;
  border-radius: 6px 44px;
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 44px;
  padding: 2.5rem;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const BaseInfo = css`
  & > svg {
    box-sizing: initial;
    border-radius: 50%;
    padding: 0.5rem;
    fill: ${(props) => props.theme.background};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.175rem;

    & > span {
      font-size: ${(props) => props.theme.text.M};
      color: ${(props) => props.theme.baseText};

      & > strong {
        font-weight: 700;
      }
    }
  }
`

export const Address = styled.div`
  ${BaseInfo}
  & > svg {
    background-color: ${(props) => props.theme.purple};
  }
`

export const EstimatedTime = styled.div`
  ${BaseInfo}
  & > svg {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const PaymentMethod = styled.div`
  ${BaseInfo}
  & > svg {
    background-color: ${(props) => props.theme.yellowDark};
  }
`
