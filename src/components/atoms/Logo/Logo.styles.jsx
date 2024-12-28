import styled from 'styled-components'

export const StyledLogo = styled.img`
  user-select: none;
  pointer-events: none;

  height: ${({ $logoHeight }) => $logoHeight || '3.125rem'};
  width: auto;

`
