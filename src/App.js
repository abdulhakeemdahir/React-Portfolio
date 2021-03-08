import Nav from "./components/Nav";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";

function App() {
	return (
		<div className='App'>
			<Nav />
			<Container>
				<Header />
				<About />
			</Container>
		</div>
	);
}

export default App;
