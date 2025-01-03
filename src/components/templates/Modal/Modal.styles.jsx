import styled from 'styled-components'

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
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.15s;

    &.show {
      transform: scale(1);
      opacity: 1;
    }
  }
`
