import { StyledTitle } from './Title.styles'

export const Title = ({
	children,
	color,
	fontSize,
	fontWeight,
	lineHeight,
}) => (
	<StyledTitle
		$color={color}
		$fontSize={fontSize}
		$fontWeight={fontWeight}
		$lineHeight={lineHeight}
	>
		{children}
	</StyledTitle>
)
