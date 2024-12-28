import { useEffect, useRef, useState } from 'react'
import { ModalStyled } from './Modal.styles'

export const Modal = ({ onClose, children }) => {
	const [isVisible, setIsVisible] = useState(false)
	const modalRef = useRef()

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		setIsVisible(true)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [onClose])

	const handleAnimationEnd = () => {
		if (!isVisible) {
			onClose()
		}
	}

	return (
		<ModalStyled className={isVisible ? 'show' : ''}>
			<div
				className={`modalContent ${isVisible ? 'show' : ''}`}
				ref={modalRef}
				onAnimationEnd={handleAnimationEnd}
			>
				{children}
			</div>
		</ModalStyled>
	)
}
