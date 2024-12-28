import { Subtitle, Title } from '@atoms'
import { StyledTextBlock } from './TextBlock.styles'

export const TextBlock = ({
	title,
	subtitle,
	textAlign,
	titleProps = {},
	subtitleProps = {},
}) => (
	<StyledTextBlock $textAlign={textAlign}>
		<Title {...titleProps}>{title}</Title>
		<Subtitle {...subtitleProps}>{subtitle}</Subtitle>
	</StyledTextBlock>
)
