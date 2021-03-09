import { Paper, Typography, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { VerifiedUser } from "@material-ui/icons";

const useStyles = makeStyles({
	paper: {
		height: "100%",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	},
	button: {
		margin: "5px 5px",
	},
});

export default function About() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Grid container justify='center' alignItems='left' direction='column'>
				<Typography
					variant='h5'
					style={{
						fontWeight: "bold",
						borderBottom: "1px",
						borderBottomColor: "#e1e1e1",
						borderBottomStyle: "dashed",
					}}
				>
					<IconButton edge='start' color='secondary' aria-label='home'>
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
							marginLeft: "10px",
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
