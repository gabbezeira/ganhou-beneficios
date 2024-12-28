import styled from 'styled-components'
import '@globalStyles'

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  text-align: ${({ $textAlign }) => $textAlign || 'center'};
  width: 100%;
`
