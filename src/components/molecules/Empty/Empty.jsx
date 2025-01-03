import EmptyImage from '@assets/empty.svg'
import { Button } from '@atoms'
import { CreateCampainModal, ImageTextBlock } from '@organisms'
import { Modal } from '@templates'
import { BookmarkPlus as PlusCampain } from 'lucide-react'
import { useState } from 'react'
import { StyledEmpty } from './Empty.styles'

export function Empty() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<StyledEmpty>
			<ImageTextBlock
				imageSrc={EmptyImage}
				title="Você não tem campanhas cadastradas"
				subtitle="Crie uma pelo botão abaixo."
				textAlign="center"
				titleProps={{
					color: 'dark',
					fontSize: '1.5rem',
					fontWeight: '700',
				}}
				subtitleProps={{
					color: 'gray',
					fontSize: '1.25rem',
					fontWeight: 'normal',
				}}
				imageProps={{
					imgSize: '8.25rem',
				}}
			/>
			<Button variant="primary" fontWeight="500" onClick={openModal}>
				<PlusCampain className="buttonIcon" />
				<span className="buttonText">Criar campanha</span>
			</Button>

			{isModalOpen && (
				<Modal onClose={closeModal}>
					<CreateCampainModal />
				</Modal>
			)}
		</StyledEmpty>
	)
}
