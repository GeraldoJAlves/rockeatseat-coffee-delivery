import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: ${(props) => props.theme.title.L};
    color: ${(props) => props.theme.baseSubtitle};
    line-height: ${(props) => props.theme.title.lineHeight};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const CoffeeList = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 3.375rem 0 5rem;
`

export const CoffeeCard = styled.div`
  display: grid;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;
  min-width: 260px;
  padding-top: 0;
  margin-top: 20px;
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 120px;
    object-fit: cover;
    margin-top: -20px;
  }

  & > h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.title.S};
    line-height: ${(props) => props.theme.title.lineHeight};
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 0.5rem;
  }

  & > span {
    font-size: ${(props) => props.theme.text.S};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseLabel};
    text-align: center;
  }
`

export const Tags = styled.ul`
  display: flex;
  align-items: start;
  list-style: none;
  gap: 0.25rem;
  margin-top: 0.875rem;
  margin-bottom: 1rem;
  & > li {
    text-transform: uppercase;
    background-color: ${(props) => props.theme.yellowLight};
    border-radius: 100px;
    font-weight: 700;
    color: ${(props) => props.theme.yellowDark};
    font-size: ${(props) => props.theme.text.tag};
    line-height: ${(props) => props.theme.text.lineHeight};
    padding: 0.25rem 0.5rem;
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 33px;
`

export const PriceContainer = styled.div`
  flex: 1;
  & > span {
    font-size: ${(props) => props.theme.text.S};
    line-height: ${(props) => props.theme.text.lineHeight};
    color: ${(props) => props.theme.baseText};
    vertical-align: middle;
  }

  & > strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: ${(props) => props.theme.title.M};
    line-height: ${(props) => props.theme.title.lineHeight};
    color: ${(props) => props.theme.baseText};
    vertical-align: middle;
  }
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.purpleDark};
  padding: 0.5rem;
  cursor: pointer;

  & > svg {
    fill: ${(props) => props.theme.baseCard};
    width: 1.375rem;
    height: 1.375rem;
  }

  &:not(:disabled):hover {
    transition: 0.2s background ease-out;
    background: ${(props) => props.theme.purple};
  }
`
