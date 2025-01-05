import styled from 'styled-components'
import '@globalStyles'

export const StyledCampainCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.125rem;

  background-color: var(--white);
  border-radius: 0.5rem;
  border: 1px solid var(--stroke-color);

  padding: 1.5rem;

  width: 100% !important;
  height: 5rem;
`
export const CampainCardIndex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--gray);
  border-radius: 0.25rem;

  height: 100%;
  width: auto;
  
  max-width: 1.875rem;

  padding: 0.1875rem 0.75rem;

  font-size: 1rem;
  color: var(--white);
  font-weight: 600;
`

export const CampainCardText = styled.p`
  width: ${({ $textWidth }) => $textWidth || 'auto'}; 
  max-width: 24.5rem;

  overflow: ${({ $textOverflow }) => $textOverflow || 'hidden'};

  white-space: nowrap;
  text-overflow: ellipsis;

  color: var(--gray);
  font-size: 0.875rem;
  font-weight: normal;

  span {
    font-weight: bold;
  }
`

export const Divider = styled.div`
  height: 100%;
  width: 0.0625rem;
  background-color: var(--stroke-color);
`
