import { Button, Input, Title } from '@atoms'
import { Question, TextBlock } from '@molecules'
import { MessageSquarePlus, BookmarkPlus as PlusCampain } from 'lucide-react'
import { useState } from 'react'
import { StyledCreateCampainModal } from './CreateCampainModal.styles'

export const CreateCampainModal = () => {
	const [questions, setQuestions] = useState([])

	const addQuestion = () => {
		const newQuestion = {
			id: Date.now(),
			text: '',
		}
		setQuestions([...questions, newQuestion])
	}

	const removeQuestion = (id) => {
		setQuestions(questions.filter((question) => question.id !== id))
	}

	return (
		<StyledCreateCampainModal>
			<TextBlock
				title="Criar nova campanha"
				subtitle="Preencha todas as informações da campanha"
				titleProps={{
					color: 'dark',
					fontSize: '1.25rem',
					fontWeight: 'bold',
				}}
				subtitleProps={{
					color: 'gray',
					fontSize: '1rem',
					fontWeight: 'normal',
				}}
			/>

			<div className="content">
				<div className="baseInfos">
					<Input
						label="Nome da campanha"
						type="text"
						placeholder="Digite o nome da campanha"
						inputWidth="60%"
						borderRadius="0.25rem"
						borderSize="0.5px"
						inputHeight="3.125rem"
					/>
					<Input
						label="Identificador"
						type="text"
						placeholder="Digite o identificador da campanha"
						inputWidth="40%"
						borderRadius="0.25rem"
						borderSize="0.5px"
						inputHeight="3.125rem"
					/>
				</div>

				<div className="midSection">
					<Title color="dark" fontSize="1.25rem" fontWeight="bold">
						Adicione suas perguntas
					</Title>
					<Button
						variant="primary"
						fontSize="1rem"
						fontWeight="500"
						borderRadius="0.25rem"
						height="2.5rem"
						onClick={addQuestion}
					>
						<MessageSquarePlus className="buttonIcon" />
						<span>Nova pergunta</span>
					</Button>
				</div>

				<div className="questions">
					{questions.map((question, index) => (
						<Question
							key={question.id}
							index={index}
							id={question.id}
							trashOnClick={removeQuestion}
						/>
					))}
				</div>

				<p className="warning">
					Perguntas como nome, celular, email e cidade são padrões nos
					formulários.
				</p>

				<Button heigth="3.125rem" width="13.3125rem" variant="primary">
					<PlusCampain />
					<span>Criar campanha</span>
				</Button>
			</div>
		</StyledCreateCampainModal>
	)
}
