import styled from 'styled-components'

export const QuantityEntryContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 0.5rem;

  & > button {
    border: none;
    background: transparent;
    line-height: 0;
    cursor: pointer;

    & > svg {
      fill: ${(props) => props.theme.purple};
    }

    &:not(:disabled):hover > svg {
      transition: 0.2s fill ease-out;
      fill: ${(props) => props.theme.purpleDark};
    }
  }

  & > span {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: 0 0.5rem;
    max-width: 2.5rem;
    font-size: ${(props) => props.theme.text.M};
    color: ${(props) => props.theme.baseTitle};
  }
`
