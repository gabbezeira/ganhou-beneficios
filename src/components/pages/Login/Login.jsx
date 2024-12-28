import { LoginArea } from '@organisms'
import { ImageTextArea } from '@templates'
import { StyledLogin } from './Login.styles'

export function Login() {
	return (
		<StyledLogin>
			<ImageTextArea />
			<LoginArea />
		</StyledLogin>
	)
}
