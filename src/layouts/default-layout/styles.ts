import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  padding-top: 104px;
  & > * {
    padding-left: 10rem;
    padding-right: 10rem;
    min-width: 880px;
  }

  @media screen and (max-width: 880px) {
    & > * {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`
