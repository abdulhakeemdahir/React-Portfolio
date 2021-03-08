import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
// import Projects from "./Projects";

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
		margin: "5px 5px",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		// webkitBackdropFilter: "blur( 4px )",
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
				<Typography variant='h5'>{props.title}</Typography>
				<CardMedia className={classes.media} image={props.media} />
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						{props.summary}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography paragraph>Method:</Typography>
						<Typography paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron
							and set aside for 10 minutes.
						</Typography>
						<Typography paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
							over medium-high heat. Add chicken, shrimp and chorizo, and cook,
							stirring occasionally until lightly browned, 6 to 8 minutes.
							Transfer shrimp to a large plate and set aside, leaving chicken
							and chorizo in the pan. Add pimentón, bay leaves, garlic,
							tomatoes, onion, salt and pepper, and cook, stirring often until
							thickened and fragrant, about 10 minutes. Add saffron broth and
							remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
						<Typography paragraph>
							Add rice and stir very gently to distribute. Top with artichokes
							and peppers, and cook without stirring, until most of the liquid
							is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
							reserved shrimp and mussels, tucking them down into the rice, and
							cook again without stirring, until mussels have opened and rice is
							just tender, 5 to 7 minutes more. (Discard any mussels that don’t
							open.)
						</Typography>
						<Typography>
							Set aside off of the heat to let rest for 10 minutes, and then
							serve.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
	);
}
