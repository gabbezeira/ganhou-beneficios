import styled from 'styled-components'
import '@globalStyles'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;

  padding: 0rem 10rem;

  @media (max-width: 640px) {
    align-items: center;
  }
`
