import Nav from "./components/Nav";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	text: {
		fontWeight: "bold",
		marginTop: "25px",
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className='App'>
			<Nav />
			<Container>
				<Typography
					variant='subtitle1'
					className={classes.text}
					color='secondary'
				>
					About Section:
				</Typography>
				<Divider />
				<Grid container spacing={2} style={{ marginTop: "15px" }}>
					<Grid item xs={12} sm={6}>
						<Header />
					</Grid>
					<Grid item xs={12} sm={6}>
						<About />
					</Grid>
				</Grid>
				<Typography
					variant='subtitle1'
					className={classes.text}
					color='secondary'
				>
					Projects Section:
				</Typography>
				<Divider />
				<Projects />
			</Container>
		</div>
	);
}

export default App;
