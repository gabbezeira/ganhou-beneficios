import {
	CampainCardIndex,
	CampainCardText,
	Divider,
} from '../CampainCard.styles'

export function CampainCardTexts({ index, description, id, leads }) {
	return (
		<>
			<CampainCardIndex>{index + 1}</CampainCardIndex>
			<CampainCardText $textWidth="24.5rem">{description}</CampainCardText>
			<Divider />
			<CampainCardText $textWidth="auto" $textOverflow="visible">
				ID: <span>{id}</span>
			</CampainCardText>
			<Divider />
			<CampainCardText $textWidth="auto" $textOverflow="visible">
				Leads: <span>{leads}</span>
			</CampainCardText>
		</>
	)
}
