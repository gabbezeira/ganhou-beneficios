import styled from 'styled-components'
import '@globalStyles'

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.625rem;
  width: auto;
  padding: 0rem 10rem;

  border-bottom: 1px solid var(--light-blue);

  .rightContent {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;

    .buttonText{
      display: block;
    }
  }

@media (max-width: 768px) {
  height: 6.25rem;
  padding: 0rem 2.5rem;

  .buttonText{
      display: none !important;
    }
}
`
