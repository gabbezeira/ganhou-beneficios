import styled from 'styled-components'
import '@globalStyles'

export const StyledSubtitle = styled.p`
  color: ${({ $color }) => `var(--${$color}, var(--gray-white))`};
  font-size: ${({ $fontSize }) => $fontSize || '1.25rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
  line-height: ${({ $lineHeight }) => $lineHeight || '1.5'};
`
