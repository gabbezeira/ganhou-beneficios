import LogoImg from '@assets/logo.svg'
import { StyledLogo } from './Logo.styles'

export const Logo = ({ logoHeight }) => (
	<StyledLogo
		src={LogoImg}
		$logoHeight={logoHeight}
		alt="Logo da plataforma: Ganhou Benefícios"
	/>
)
