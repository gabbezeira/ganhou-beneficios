import styled from 'styled-components'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: ${({ $inputWidth }) => $inputWidth || '100%'};
`

export const StyledLabel = styled.label`
	font-size: 0.875rem;
	color: var(--gray);
	font-weight: 500;
`

export const FieldContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
`

export const StyledInput = styled.input`
	width: 100%;
	height: ${({ $inputHeight }) => $inputHeight || '3.75rem'};
	padding: 0.75rem 2.5rem 0.75rem 1rem;

	font-size: 1rem;
	color: var(--dark);
	background: var(--white);

	border: ${({ $borderSize }) => $borderSize || '2px'} solid var(--light-blue);
	border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
	outline: none;

	transition: all 0.2s;

	&::placeholder {
		color: var(--light-blue);
	}
`

export const ToggleButton = styled.button`
	position: absolute;
	top: 50%;
	right: 1rem;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;

	width: 1.5rem;
	height: 1.5rem;

	background: none;
	border: none;
	cursor: pointer;

	.icon {
		width: 100%;
		height: 100%;
		stroke-width: 1.5px;
		color: var(--light-blue);
	}
`
