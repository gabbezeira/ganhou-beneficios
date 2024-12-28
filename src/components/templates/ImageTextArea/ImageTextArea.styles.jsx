import styled from 'styled-components'
import '@globalStyles'

export const StyledImageTextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--primary);

  width: 45%;
  height: 100%;

  padding: 0rem 6.75rem;

  ::selection {
		background-color: var(--white);
		color: var(--primary);
	}

  @media (max-width: 768px) {
    display: none;
  }
`
