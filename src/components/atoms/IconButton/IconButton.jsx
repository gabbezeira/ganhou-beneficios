import { StyledIconButton } from './IconButton.styles'

export const IconButton = ({
	children,
	onClick,
	variant,
	borderRadius,
	height,
	width,
}) => (
	<StyledIconButton
		$variant={variant}
		$height={height}
		$width={width}
		$borderRadius={borderRadius}
		type="button"
		onClick={onClick}
	>
		{children}
	</StyledIconButton>
)
