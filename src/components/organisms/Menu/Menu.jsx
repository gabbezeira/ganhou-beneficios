import { Button, Logo } from '@atoms'
import { CreateCampainModal } from '@molecules'
import { Modal } from '@organisms'
import { LogOut, BookmarkPlus as PlusCampain } from 'lucide-react'
import { useState } from 'react'
import { StyledMenu } from './Menu.styles'

export function Menu() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<StyledMenu>
			<Logo />
			<div className="rightContent">
				<Button variant="primary" fontWeight="500" onClick={openModal}>
					<PlusCampain className="buttonIcon" />
					<span className="buttonText">Nova campanha</span>
				</Button>
				<Button variant="outline" fontWeight="500">
					<LogOut className="buttonIcon" />
					<span className="buttonText">Sair</span>
				</Button>
			</div>

			{isModalOpen && (
				<Modal onClose={closeModal}>
					<CreateCampainModal />
				</Modal>
			)}
		</StyledMenu>
	)
}
