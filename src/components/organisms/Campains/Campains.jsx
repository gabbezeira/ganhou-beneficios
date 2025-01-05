import TrashImage from '@assets/trash.svg'
import { Button } from '@atoms'
import CampainsItems from '@mocks/campains.json'
import { CampainCard, Pagination } from '@molecules'
import { Modal } from '@templates'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Image, Title } from '../../atoms'
import { ConfirmDelete, SearchBar, StyledCampain } from './Campains.styles'

export function Campains() {
	const [campains, setCampains] = useState(CampainsItems)
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [showModal, setShowModal] = useState(false)
	const [currentCampainToDelete, setCurrentCampainToDelete] = useState(null)

	const itemsPerPage = 3

	const filteredCampains = campains.filter(
		(campain) =>
			campain.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			campain.idCampain.toString().includes(searchTerm),
	)

	const totalPages = Math.ceil(filteredCampains.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const currentCampains = filteredCampains.slice(
		startIndex,
		startIndex + itemsPerPage,
	)

	const handlePageChange = (page) => setCurrentPage(page)

	const openModal = (idCampain) => {
		setCurrentCampainToDelete(idCampain)
		setShowModal(true)
	}

	const removeCampain = () => {
		setCampains((prevCampains) =>
			prevCampains.filter(
				(campain) => campain.idCampain !== currentCampainToDelete,
			),
		)
		setShowModal(false)
	}

	const cancelDelete = () => {
		setShowModal(false)
	}

	return (
		<>
			<SearchBar>
				<Search className="icon" />
				<input
					className="search-input"
					type="search"
					placeholder="Digite o nome da campanha ou ID"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value)
						setCurrentPage(1)
					}}
				/>
			</SearchBar>

			<StyledCampain key={`page-${currentPage}`}>
				<AnimatePresence mode="sync">
					{currentCampains.map((campain, index) => (
						<motion.div
							key={campain.idCampain}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 10 }}
							transition={{ duration: 0.2 }}
							style={{ width: '100%' }}
						>
							<CampainCard
								indexCampain={index}
								descriptionCampain={campain.description}
								idCampain={campain.idCampain}
								leadsCampain={campain.leads.length}
								trashOnClick={() => openModal(campain.idCampain)}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</StyledCampain>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>

			{showModal && (
				<Modal isOpen={showModal} onClose={cancelDelete}>
					<ConfirmDelete>
						<Title color="dark" fontSize="1.125rem">
							Tem certeza que deseja excluir esta campanha?
						</Title>
						<Image image={TrashImage} imgSize="50%" />
						<div className="buttons">
							<Button onClick={removeCampain} variant="primary" width="100%">
								Sim
							</Button>
							<Button onClick={cancelDelete} variant="lightblue" width="100%">
								Não
							</Button>
						</div>
					</ConfirmDelete>
				</Modal>
			)}
		</>
	)
}
