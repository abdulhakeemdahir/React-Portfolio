import Nav from "./components/Nav";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { makeStyles } from "@material-ui/core/styles";
import Skills from "./components/Skills";

const useStyles = makeStyles({
	text: {
		fontWeight: "bold",
		marginTop: "25px",
	},
	card: {
		height: "100%",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
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
				<Grid
					container
					spacing={1}
					style={{ marginTop: "15px" }}
					className={classes.card}
				>
					<Grid item xs={12} sm={4}>
						<Header />
					</Grid>
					<Grid item xs={12} sm={8}>
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
				<Typography
					variant='subtitle1'
					className={classes.text}
					color='secondary'
				>
					Skills Section:
				</Typography>
				<Divider />
				<Skills />
			</Container>
		</div>
	);
}

export default App;
