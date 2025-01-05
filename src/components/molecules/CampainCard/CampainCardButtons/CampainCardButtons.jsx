import { IconButton } from '@atoms'
import {
	Link,
	Pencil,
	FileSpreadsheet as Sheets,
	Trash2 as Trash,
} from 'lucide-react'
import { Divider } from '../CampainCard.styles'

export function CampainCardButtons({ sheets, link, pencil, trash }) {
	return (
		<>
			<IconButton variant="green" onClick={sheets}>
				<Sheets className="buttonIcon" />
			</IconButton>
			<IconButton variant="blue" onClick={link}>
				<Link className="Icon" />
			</IconButton>
			<Divider />
			<IconButton variant="lightblue" onClick={pencil}>
				<Pencil className="Icon" />
			</IconButton>
			<IconButton variant="red" onClick={trash}>
				<Trash className="Icon" />
			</IconButton>
		</>
	)
}
