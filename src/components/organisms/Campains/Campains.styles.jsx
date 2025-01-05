import styled from 'styled-components'
import '@globalStyles'

export const StyledCampain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: 18rem;
  overflow: hidden;

  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &.hidden {
    opacity: 0;
  }
`

export const ConfirmDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 20rem;
  text-align: center;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    width: 100%;
  }
`
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 1rem;
  gap: 1rem;

  width: 100%;
  height: 4.0625rem;

  background-color: var(--white);
  border: 0.0625rem solid var(--stroke-color);
  border-radius: 0.5rem;

  transition: all 0.2s;
  outline: none;

  .icon {
    color: var(--stroke-color);
    width: 1.5rem;
    height: 1.5rem;
  }

  .search-input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-radius: 0.625rem;

    font-size: 1.125rem;
    color: var(--dark);
    outline: none;

    &::placeholder {
      color: var(--stroke-color);
      opacity: 0.3;
      font-size: 1.25rem;
      font-weight: normal;
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }
`
