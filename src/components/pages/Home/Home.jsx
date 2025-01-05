import { Input } from '@atoms'
import CampainsItems from '@mocks/campains.json'
import { Pagination } from '@molecules'
import { Campains } from '@organisms'
import { useState } from 'react'
import { StyledHome } from './Home.styles'

export function Home() {
	return (
		<StyledHome>
			<Campains />
		</StyledHome>
	)
}
