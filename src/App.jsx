import { Body, PageWrapper } from '@globalStylesJSX'
import { Empty } from '@molecules'
import { Menu } from '@organisms'

function App() {
	return (
		<PageWrapper>
			<Menu />
			<Body>
				<Empty />
			</Body>
		</PageWrapper>
	)
}

export default App
