import { StyledButton } from './Button.styles'

export const Button = ({
	children,
	onClick,
	variant,
	fontSize,
	borderRadius,
	fontWeight,
	height,
	width,
}) => (
	<StyledButton
		$variant={variant}
		$fontSize={fontSize}
		$fontWeight={fontWeight}
		$height={height}
		$width={width}
		$borderRadius={borderRadius}
		type="button"
		onClick={onClick}
	>
		{children}
	</StyledButton>
)
