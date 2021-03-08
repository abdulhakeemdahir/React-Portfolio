import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Grid, ButtonGroup, Button } from "@material-ui/core";
import { GitHub, Public, Web } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	paper: {
		margin: "15px 5px",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		// PublickitBackdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
		// boxShadow: "0 3.42857px 23px rgba(0, 0, 0, 0.1)",
	},
}));

export default function Cards(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	console.log(props);
	return (
		<Grid item xs={12} sm={4}>
			<Card className={classes.paper}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					<Web color='secondary' style={{ marginRight: "10" }} />
					{props.title}
				</Typography>
				<CardMedia className={classes.media} image={props.media} />
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						{props.summary}
					</Typography>
				</CardContent>
				{/* <CardActions disableSpacing> */}
				<IconButton aria-label='add to favorites' xs={12}>
					<ButtonGroup>
						<Button
							startIcon={<GitHub />}
							href={props.github}
							variant='contained'
							color='primary'
						>
							GitHub Repo
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
