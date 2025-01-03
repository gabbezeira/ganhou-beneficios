import { Button, Input } from '@atoms'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { StyledQuestion } from './Question.styles'

export const Question = ({ index, id, trashOnClick }) => {
	const [isChecked, setIsChecked] = useState(false)

	const toggleCheckbox = () => setIsChecked((prev) => !prev)

	return (
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
				borderSize="0.5px"
				inputHeight="3.125rem"
			/>
			<Button
				variant={isChecked ? 'primary' : 'outline'}
				borderRadius="0.25rem"
				height="3.125rem"
				onClick={toggleCheckbox}
			>
				Sim ou Não?
			</Button>
			<Button
				variant="noSelect"
				borderRadius="0.25rem"
				height="3.125rem"
				width="3.125rem"
				onClick={() => trashOnClick(id)}
			>
				<Trash2 className="buttonIcon" size={20} />
			</Button>

			<input type="hidden" value={id} />
		</StyledQuestion>
	)
}
