import React, { useState } from "react";
import Cards from "./Cards";
import { Container, Grid } from "@material-ui/core";
import Project1 from "../images/project-1.png";
import Project2 from "../images/project-2.png";
import Homework5 from "../images/homework5.png";
import { CssBaseline } from "@material-ui/core";

export default function Projects() {
	const [projectState, setProjectState] = useState([
		{
			title: "Project 2",
			media: Project2,
			summary:
				"One World Academy is a learning management system where users can create courses and browse courses created by other users.",
		},
		{
			title: "Project 3",
			media: Project1,
			summary:
				"This was our first class project. We decided to create a dynamic State Covid tracker as a resource for Travelers.",
		},
		{
			title: "Project 4",
			media: Homework5,
			summary:
				"The Day Planner Application required us to navigate the DOM and to incorporate Local Storage as well as use jQuery.",
		},
	]);
	return (
		<>
			<CssBaseline>
				<Grid
					container
					direction='row'
					justify='space-evenly'
					alignItems='center'
				>
					{projectState.map(card => (
						<Cards
							title={card.title}
							media={card.media}
							summary={card.summary}
						/>
					))}
				</Grid>
			</CssBaseline>
		</>
	);
}
