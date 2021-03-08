// import classes from "*.module.css";
import {
	Paper,
	Card,
	Avatar,
	Typography,
	Button,
	Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	paper: {
		margin: "5px 0px",
		padding: "10px",
	},
});

export default function Header() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper} id='#about-me'>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Avatar />
				<Typography variant='h5'>Abdulhakeem Dahir</Typography>
				<Typography variant='subtitle1'>Full Stack Web Developer</Typography>
			</Grid>
		</Paper>
	);
}
