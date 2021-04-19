import React from "react";
import {
	makeStyles,
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Typography,
	Grid,
	ButtonGroup,
	Button,
	Divider,
} from "@material-ui/core";
import { GitHub, Public, Web } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		borderRadius: "10px",
	},
	paper: {
		margin: "15px 5px",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	},
}));

export default function Cards(props) {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={3}>
			<Card className={classes.paper}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					<Web color='secondary' style={{ marginRight: "10" }} />
					{props.title}
				</Typography>
				<CardMedia className={classes.media} image={props.media} />
				<CardContent>
					<Typography
						variant='body3'
						color='primary'
						component='p'
						style={{ fontWeight: "900" }}
					>
						{props.tech}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{props.summary}
					</Typography>
				</CardContent>
				<Divider />
				<IconButton aria-label='add to favorites'>
					<ButtonGroup>
						<Button
							startIcon={<GitHub />}
							href={props.github}
							variant='contained'
							color='primary'
						>
							GitHub
						</Button>
						<Button
							startIcon={<Public />}
							href={props.live}
							variant='contained'
							color='secondary'
						>
							Live Site
						</Button>
					</ButtonGroup>
				</IconButton>
			</Card>
		</Grid>
	);
}
