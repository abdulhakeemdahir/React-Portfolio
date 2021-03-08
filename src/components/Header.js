// import classes from "*.module.css";
import {
	Paper,
	Card,
	Avatar,
	Typography,
	Button,
	ButtonGroup,
	Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Pages from "@material-ui/icons/Pages";
import userImage from "../images/abdulhakeempic.jpg";

const useStyles = makeStyles({
	paper: {
		margin: "5px 0px",
		padding: "10px",
	},
	button: {
		margin: "5px 5px",
	},
});

export default function Header() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Avatar src={userImage} style={{ height: 100, width: 100 }} />
				<Typography variant='h5'>Abdulhakeem Dahir</Typography>
				<Typography variant='subtitle1' style={{ fontStyle: "italic" }}>
					Full Stack Web Developer
				</Typography>
				<Typography variant='subtitle1'>
					<span style={{ fontWeight: "bold" }}>E-mail:</span>
					somlutions@gmail.com
				</Typography>
				<Grid direction='row'>
					<ButtonGroup>
						<Button
							startIcon={<Github />}
							href='https://github.com/abdulhakeemdahir'
							variant='contained'
							color='primary'
						>
							GitHub
						</Button>
						<Button
							startIcon={<LinkedIn />}
							href='https://github.com/abdulhakeemdahir'
							variant='contained'
							color='secondary'
						>
							LinkedIn
						</Button>
						<Button
							startIcon={<Pages />}
							href='https://github.com/abdulhakeemdahir'
							variant='contained'
							color='primary'
						>
							Resume
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</Paper>
	);
}
