import { StyledImage } from './Image.styles'

export const Image = ({ image, altImage, imgSize }) => (
	<StyledImage src={image} alt={altImage} $imgSize={imgSize} />
)
