import Nav from "./components/Nav";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	return (
		<div className='App'>
			<Nav />
			<Container>
				<Header />
				<About />
				<Projects />
			</Container>
		</div>
	);
}

export default App;
