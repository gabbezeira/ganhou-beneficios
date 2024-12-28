import { Button, Input, Title } from '@atoms'
import { LogIn } from 'lucide-react'
import { StyledLoginForm } from './LoginForm.styles'

export const LoginForm = () => (
	<StyledLoginForm>
		<Title color="dark" fontSize="1.75rem" fontWeight="bold" lineHeight="auto">
			Entrar no painel
		</Title>
		<div className="inputs">
			<Input label="Email" type="text" placeholder="Digite seu email" />
			<Input label="Senha" type="password" placeholder="Digite sua senha" />
			<Button heigth="3.75rem" width="100%" variant="primary">
				<LogIn />
				<span>Entrar no painel</span>
			</Button>
		</div>
	</StyledLoginForm>
)
