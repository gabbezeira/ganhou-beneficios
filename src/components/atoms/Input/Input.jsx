import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import {
	FieldContainer,
	InputWrapper,
	StyledInput,
	StyledLabel,
	ToggleButton,
} from './Input.styles'

export const Input = ({
	label,
	type = 'text',
	placeholder,
	inputWidth,
	inputHeight,
	borderSize,
	labelView,
	borderRadius,
}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handleTogglePassword = () => {
		setIsPasswordVisible((prev) => !prev)
	}

	return (
		<InputWrapper $inputWidth={inputWidth}>
			<StyledLabel style={{ display: labelView || 'block' }}>
				{label}
			</StyledLabel>
			<FieldContainer>
				<StyledInput
					$borderSize={borderSize}
					$inputHeight={inputHeight}
					$borderRadius={borderRadius}
					type={type === 'password' && isPasswordVisible ? 'text' : type}
					placeholder={placeholder}
				/>
				{type === 'password' && (
					<ToggleButton onClick={handleTogglePassword}>
						{isPasswordVisible ? (
							<EyeOff className="icon" />
						) : (
							<Eye className="icon" />
						)}
					</ToggleButton>
				)}
			</FieldContainer>
		</InputWrapper>
	)
}
