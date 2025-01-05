import styled from 'styled-components'
import '@globalStyles'

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  text-align: center;
  width: 1.75rem;
  height: 1.75rem;

  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  border: none;

  transition: all 0.2s;

  .icon {
    color: var(--white);
    height: 1.125rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--primary-opacity);
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    border: 0.0625rem solid var(--stroke-color);

    .icon {
      color: var(--stroke-color);
    }
  }
`

export const PageNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  width: 1.5rem;
  height: 1.5rem;

  background-color: transparent;
  border: 0.0313rem solid var(--stroke-color);
  border-radius: 50%;
  color: var(--dark);
  font-size: 0.625rem;
  text-align: center;

  &.active {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--white);
    font-weight: bold;
  }
`
