import React, { useState } from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import jquery from "../images/jquery.png";
import bootstrap from "../images/bootstrap.png";
import github from "../images/github.png";

const useStyles = makeStyles({
	card: {
		height: "100%",
		padding: "10px",
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 4px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	},
	media: {
		height: "100%",
		width: "100%",
		borderRadius: "5px",
	},
});

export default function Skills() {
	const [skillState] = useState([
		{
			image: html,
			skill: "HTML",
			summary: ["Semantic HTML", "HTML 5", "Accessebility", "Data Attributes"],
		},
		{
			image: css,
			skill: "CSS",
		},
		{
			image: js,
			skill: "JS",
		},
		{
			image: jquery,
			skill: "JQUERY",
		},
		{
			image: bootstrap,
			skill: "BOOTSTRAP",
		},
		{
			image: github,
			skill: "GITHUB",
		},
	]);
	const classes = useStyles();
	return (
		<Grid
			container
			spacing={1}
			justify='space-between'
			className={classes.card}
			style={{ marginTop: "15px", marginBottom: "15px" }}
		>
			{skillState.map(skill => (
				<Grid item xs={6} sm={2}>
					<Avatar
						variant='square'
						className={classes.media}
						src={skill.image}
					/>
				</Grid>
			))}
		</Grid>
	);
}
