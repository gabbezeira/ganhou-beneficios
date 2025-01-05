import styled, { css } from 'styled-components'
import '@globalStyles'

export const StyledIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || '100%'};
  min-width: 1.875rem;
  max-width: 1.875rem;
  
  padding: 0 0.3125rem;

  border-radius: ${({ $borderRadius }) => $borderRadius || '0.25rem'};;
  transition: all 0.2s;
  cursor: pointer;

  .Icon {
    display: flex;
    align-items: center;
    justify-content: center;
    stroke-width: 0.0938rem;
    
    width: 100%;
    height: 100%;
  }

  ${({ $variant }) =>
		$variant === 'blue' &&
		css`
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: var(--white);
    cursor: pointer;
  `}

  ${({ $variant }) =>
		$variant === 'green' &&
		css`
    background-color: var(--green);
    border: 1px solid var(--green);
    color: var(--white);
  `}

  ${({ $variant }) =>
		$variant === 'lightblue' &&
		css`
    background-color: var(--light-blue);
    border: 1px solid var(--light-blue);
    color: var(--white);
  `}

  ${({ $variant }) =>
		$variant === 'lightblue' &&
		css`
    background-color: var(--light-blue);
    border: 1px solid var(--light-blue);
    color: var(--white);
  `}
  
  ${({ $variant }) =>
		$variant === 'red' &&
		css`
    background-color: var(--red);
    border: 1px solid var(--red);
    color: var(--white);
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
