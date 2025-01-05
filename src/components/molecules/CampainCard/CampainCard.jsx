import { Divider, StyledCampainCard } from './CampainCard.styles'
import { CampainCardButtons } from './CampainCardButtons/CampainCardButtons'
import { CampainCardTexts } from './CampainCardTexts/CampainCardTexts'

export function CampainCard({
	indexCampain,
	idCampain,
	descriptionCampain,
	leadsCampain,
	sheetsOnClick,
	linkOnClick,
	pencilOnClick,
	trashOnClick,
}) {
	return (
		<StyledCampainCard>
			<CampainCardTexts
				index={indexCampain}
				id={idCampain}
				description={descriptionCampain}
				leads={leadsCampain}
			/>
			<Divider />
			<CampainCardButtons
				sheets={sheetsOnClick}
				link={linkOnClick}
				pencil={pencilOnClick}
				trash={trashOnClick}
			/>
		</StyledCampainCard>
	)
}
