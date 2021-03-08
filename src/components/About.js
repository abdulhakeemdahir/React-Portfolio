// import classes from "*.module.css";
import { Paper, Card, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	paper: {
		margin: "5px 0px",
		padding: "10px",
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
				<Typography variant='h5'>About Me</Typography>
				<Grid>
					<Typography
						variant='subtitle1'
						style={{ fontStyle: "italic", borderLeft: "2 solid 000000" }}
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
