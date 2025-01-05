import { LoaderCircle } from 'lucide-react'
import { StyledLoader } from './Loader.styles'

export function Loader({ size = 48 }) {
	return (
		<StyledLoader>
			<LoaderCircle className="spinner" style={{ width: size, height: size }} />
		</StyledLoader>
	)
}
