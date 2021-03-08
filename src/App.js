import Nav from "./components/Nav";
import { Container } from "@material-ui/core";
import Header from "./components/Header";

function App() {
	return (
		<div className='App'>
			<Nav />
			<Container>
				<Header />
			</Container>
		</div>
	);
}

export default App;
