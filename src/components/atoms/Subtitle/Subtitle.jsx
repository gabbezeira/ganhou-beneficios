import { StyledSubtitle } from './Subtitle.styles'

export const Subtitle = ({
	children,
	color,
	fontSize,
	fontWeight,
	lineHeight,
}) => (
	<StyledSubtitle
		$color={color}
		$fontSize={fontSize}
		$fontWeight={fontWeight}
		$lineHeight={lineHeight}
	>
		{children}
	</StyledSubtitle>
)
