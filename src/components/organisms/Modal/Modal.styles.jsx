import styled from 'styled-components'
import '@globalStyles'

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  z-index: 1000;

  &.show {
    opacity: 1;
    pointer-events: all;
  }

  .modalContent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    width: auto;
    height: auto;
    transform: scale(0.8);
    opacity: 0;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;

    &.show {
      transform: scale(1);
      opacity: 1;
    }
  }
`
