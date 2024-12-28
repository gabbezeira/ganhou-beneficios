import { Button, Input } from '@atoms'
import { Trash2 } from 'lucide-react'
import { StyledQuestion } from './Question.styles'

export const Question = ({ index }) => (
	<StyledQuestion>
		<Button
			variant="noSelect"
			borderRadius="0.25rem"
			height="3.125rem"
			width="2.5rem"
		>
			{index + 1}
		</Button>
		<Input
			type="text"
			labelView="none"
			placeholder="Texto da pergunta"
			borderRadius="0.25rem"
			borderSize="1px"
			inputHeight="3.125rem"
		/>
		<Button variant="outline" borderRadius="0.25rem" height="3.125rem">
			Sim ou não?
		</Button>
		<Button
			variant="noSelect"
			borderRadius="0.25rem"
			height="3.125rem"
			width="3.125rem"
		>
			<Trash2 className="buttonIcon" size={20} />
		</Button>
	</StyledQuestion>
)
