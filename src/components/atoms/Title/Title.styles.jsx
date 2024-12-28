import styled from 'styled-components'
import '@globalStyles'

export const StyledTitle = styled.h1`
  color: ${({ $color }) => `var(--${$color}, var(--white))`};
  font-size: ${({ $fontSize }) => $fontSize || '2.25rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'bold'};
  line-height: ${({ $lineHeight }) => $lineHeight || '1.2'};
`
