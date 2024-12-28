import { Image } from '@atoms'
import { TextBlock } from '@molecules'
import { StyledImageTextBlock } from './ImageTextBlock.styles'

export const ImageTextBlock = ({
	title,
	imageSrc,
	subtitle,
	textAlign,
	titleProps = {},
	subtitleProps = {},
	imageProps = {},
}) => (
	<StyledImageTextBlock>
		<Image image={imageSrc} {...imageProps} />
		<TextBlock
			title={title}
			subtitle={subtitle}
			titleProps={titleProps}
			subtitleProps={subtitleProps}
			textAlign={textAlign}
		/>
	</StyledImageTextBlock>
)
