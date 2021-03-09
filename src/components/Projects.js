import React, { useState } from "react";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";
import Project1 from "../images/project-1.png";
import Project2 from "../images/project-2.png";
import Homework5 from "../images/homework5.png";
import { CssBaseline } from "@material-ui/core";

export default function Projects() {
	const [projectState] = useState([
		{
			title: "One World Academy",
			media: Project2,
			summary:
				"One World Academy is a learning management system where users can create courses and browse courses created by other users.",
			github: "https://github.com/TaaniBravo/One-World-Academy",
			live: "https://oneworldacademy.herokuapp.com/",
		},
		{
			title: "Covid Tracker",
			media: Project1,
			summary:
				"This was our first class project. We decided to create a dynamic State Covid tracker as a resource for Travelers.",
			github: "https://github.com/UWCode-Group-5/State-COVID-Tracker",
			live: "https://uwcode-group-5.github.io/State-COVID-Tracker/",
		},
		{
			title: "Workday Scheduler",
			media: Homework5,
			summary:
				"The Day Planner Application required us to navigate the DOM and to incorporate Local Storage as well as use jQuery.",
			github:
				"https://github.com/abdulhakeemdahir/Work-Day-Scheduler-Application",
			live:
				"https://abdulhakeemdahir.github.io/Work-Day-Scheduler-Application/",
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
							github={card.github}
							live={card.live}
						/>
					))}
				</Grid>
			</CssBaseline>
		</>
	);
}
