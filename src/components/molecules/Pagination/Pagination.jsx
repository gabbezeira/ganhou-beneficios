import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import {
	PageNumber,
	PaginationButton,
	StyledPagination,
} from './Pagination.styles'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}

	const renderPageNumbers = () => {
		return Array.from({ length: totalPages }, (_, index) => {
			const page = index + 1
			return (
				<PageNumber
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className={currentPage === index + 1 ? 'active' : ''}
					onClick={() => handlePageChange(index + 1)}
				>
					{index + 1}
				</PageNumber>
			)
		})
	}

	return (
		<StyledPagination>
			<PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
				<ChevronLeft className="icon" />
			</PaginationButton>

			{renderPageNumbers()}

			<PaginationButton
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				<ChevronRight className="icon" />
			</PaginationButton>
		</StyledPagination>
	)
}
