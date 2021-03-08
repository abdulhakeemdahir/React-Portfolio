// import classes from "*.module.css";
import { Paper, Card, Typography, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { VerifiedUser } from "@material-ui/icons";

const useStyles = makeStyles({
	paper: {
		margin: "5px 0px",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		// webkitBackdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
		// boxShadow: "0 3.42857px 23px rgba(0, 0, 0, 0.1)",
	},
	button: {
		margin: "5px 5px",
	},
});

export default function About() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper} id='#about-me'>
			<Grid container justify='center' alignItems='left' direction='column'>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					<IconButton edge='start' color='inherit' aria-label='home'>
						<VerifiedUser />
					</IconButton>
					About Me:
				</Typography>
				<Grid>
					<Typography
						variant='subtitle1'
						style={{
							fontStyle: "italic",
							background: "#fafafa",
							padding: "10px",
							borderRadius: "10px",
						}}
					>
						Hello everyone, and welcome to my Online Portfolio! My name is
						Abdulhakeem Dahir and I am an aspiring Software Developer. This has
						been an incredibly difficult year, but luckily, I finally decided to
						take the jump and learn Full Stack Web Development. I am currently a
						student in the UW Full Stack Development Bootcamp! It's an amazing
						program, and because of it, I have managed to create some pretty
						nifty applications. Please check out my project repositories below!
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
