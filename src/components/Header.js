// import classes from "*.module.css";
import {
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
		height: "100%",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	},
	button: {
		boxShadow: "0 3.42857px 23px rgba(0, 0, 0, 0.1)",
	},
});

export default function Header() {
	const classes = useStyles();
	return (
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
				<ButtonGroup className={classes.button}>
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
						href='https://www.linkedin.com/in/abdulhakeem-dahir-5330b5177/'
						variant='contained'
						color='secondary'
					>
						LinkedIn
					</Button>
					<Button
						startIcon={<Pages />}
						href='https://drive.google.com/file/d/1MNN_jNYRZ_ZJAjBtRntyu5NkndSV4jlo/view?usp=sharing'
						variant='contained'
						style={{ background: "#ffffff" }}
					>
						Resume
					</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	);
}
