import styled, { css } from 'styled-components'
import '@globalStyles'

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  white-space: nowrap;

  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || '3.125rem'};
  padding: 0rem 1.25rem;

  font-family: 'Poppins', sans-serif;
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '500'};

  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};;
  box-sizing: border-box;
  transition: all 0.2s;
  cursor: pointer;

  .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    stroke-width: 2px;
    max-height: 1.25rem;
  }

  ${({ $variant }) =>
		$variant === 'primary' &&
		css`
    background-color: var(--primary);
    border: none;
    color: var(--white);

    &:hover {
      background-color: var(--primary-opacity);
    }
  `}

  ${({ $variant }) =>
		$variant === 'outline' &&
		css`
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);

    &:hover {
      background-color: var(--primary);
      color: var(--white);
    }
  `}

  ${({ $variant }) =>
		$variant === 'noSelect' &&
		css`
    background-color: var(--dark);
    padding: 0.875rem !important;
    border: none;
    color: var(--white);

    &:hover {
      background-color: var(--gray);
    }
  `}

  @media (max-width: 768px) {
    padding: 0.625rem;
  }
`
