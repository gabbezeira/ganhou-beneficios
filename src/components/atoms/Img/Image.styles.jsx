import styled from 'styled-components'
import '@globalStyles'

export const StyledImage = styled.img`
  width: ${({ $imgSize }) => $imgSize || 'auto'};
  height: auto;

  pointer-events: none;
  user-select: none;
`
