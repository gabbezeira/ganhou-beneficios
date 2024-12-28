import Gift from '@assets/login-image.svg'
import { ImageTextBlock } from '@organisms'
import { StyledImageTextArea } from './ImageTextArea.styles'

export const ImageTextArea = () => (
	<StyledImageTextArea>
		<ImageTextBlock
			imageSrc={Gift}
			title="Nunca foi tão fácil ganhar benefícios."
			subtitle="Responda questionários e concorra a prêmios e descontos exclusivos."
			textAlign="start"
			titleProps={{
				color: 'white',
				fontSize: '2.25rem',
				fontWeight: '700',
			}}
			subtitleProps={{
				color: 'text-gray-white',
				fontSize: '1.25rem',
				fontWeight: 'normal',
			}}
			imageProps={{
				imgSize: '100%',
			}}
		/>
	</StyledImageTextArea>
)
