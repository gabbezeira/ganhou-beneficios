import styled from 'styled-components'
import '@globalStyles'

export const StyledLoginArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;

  width: 55%;
  height: 100%;

  padding: 0rem 9.8125rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0rem;
  }
`
