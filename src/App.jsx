import { Body, PageWrapper } from '@globalStylesJSX'
import { CampainCard, Empty } from '@molecules'
import { Campains } from '@organisms'
import { Menu } from '@organisms'
import { Home } from './components/pages/Home/Home'

function App() {
	return (
		<PageWrapper>
			<Menu />
			<Body>
				<Home />
			</Body>
		</PageWrapper>
	)
}

export default App
