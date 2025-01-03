import styled from 'styled-components'
import '@globalStyles'

export const StyledCreateCampainModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 51rem;
  height: auto;
  gap: 2rem;

  .content {
    display: flex;

    align-items: center;
    flex-direction: column;
		gap: 1.75rem; 
		width: 100%;

    .baseInfos {
      display: flex;
      gap: 1rem; 
      width: 100%;
	  }

    .midSection { 
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    .questions{
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1.125rem;

      max-height: 7.375rem;
      height: 7.375rem;

      overflow-y: auto;
      padding-right: 1.5rem;

      &::-webkit-scrollbar {
        width: 0.5rem;
        border-radius: 0.25rem;
      }

      &::-webkit-scrollbar-track {
        background: #D1D8E3; 
        border-radius: 0.25rem;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--dark);
        border-radius: 0.25rem;
      }
    }

    .warning {
      text-align: center;
      font-size: 0.6875rem;
      font-weight: 500;
      color: var(--gray);
    }
  }

`
