import React, { useState } from "react";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";
import Project2 from "../images/project-2.png";
import Project1 from "../images/project-1.png";
import Homework18 from "../images/hw18.png";
import Homework17 from "../images/hw17.png";
import Homework12 from "../images/hw12.png";
import Homework11 from "../images/hw11.gif";
import Homework6 from "../images/hw6.png";
import Homework5 from "../images/homework5.png";
import { CssBaseline } from "@material-ui/core";

export default function Projects() {
	const [projectState] = useState([
		{
			title: "Dono Application",
			media: Homework11,
			summary:
				"This application allows NGO's to create causes that users can financially support, and more features to communicate with their donors.",
			github: "https://github.com/abdulhakeemdahir/dono-application",
			live: "https://dono-application.herokuapp.com/",
			tech: "React, Node, Express, MongoDB",
		},
		{
			title: "One World Academy",
			media: Project2,
			summary:
				"One World Academy is a learning management system where users can create courses and browse courses created by other users.",
			github: "https://github.com/TaaniBravo/One-World-Academy",
			live: "https://oneworldacademy.herokuapp.com/",
			tech: "Javascript, Node, Express, MySQL",
		},
		{
			title: "Covid Tracker",
			media: Project1,
			summary:
				"This was our first class project. We decided to create a dynamic State Covid tracker as a resource for Travelers.",
			github: "https://github.com/UWCode-Group-5/State-COVID-Tracker",
			live: "https://uwcode-group-5.github.io/State-COVID-Tracker/",
			tech: "Javascript, jQuery, Bootstrap",
		},
		{
			title: "Progressive Bgt App",
			media: Homework18,
			summary:
				"Created a Progressive Budget Application that allows a user to still input data when offline, and sends data once online.",
			github:
				"https://github.com/abdulhakeemdahir/Work-Day-Scheduler-Application",
			live: "https://abdulhakeemdahir.github.io/Work-Day-Scheduler-Application/",
			tech: "Javascript, IndexedDB, WebPack",
		},
		{
			title: "Workout Application",
			media: Homework17,
			summary:
				"This application allows you to keep track of all your workouts, it also calculates your total weights, reps and sets.",
			github: "https://github.com/abdulhakeemdahir/Workout-Tracker-Application",
			live: "https://still-gorge-03888.herokuapp.com/?id=602a9d98624f810015cc4f0c",
			tech: "Node, Express, MongoDB, Mongoose",
		},
		{
			title: "Employee App",
			media: Homework12,
			summary:
				"This is a CLI application that enables you to add, delete, update and manage employees via MySql databse and queriers.",
			github:
				"https://github.com/abdulhakeemdahir/employee-management-system-application",
			live: null,
			tech: "Node, Express, MySQL",
		},
		{
			title: "Weather App",
			media: Homework6,
			summary:
				"This application uses the Weather API to get current Day and future 5 day forecasts as well as the UV Index for any city in the world.",
			github:
				"https://github.com/abdulhakeemdahir/Weather-Dashboard-Application",
			live: "https://abdulhakeemdahir.github.io/Weather-Dashboard-Application/",
			tech: "Html, CSS, jQuery AJAX",
		},
		{
			title: "Workday Scheduler",
			media: Homework5,
			summary:
				"The Day Planner Application required us to navigate the DOM and to incorporate Local Storage as well as use jQuery.",
			github:
				"https://github.com/abdulhakeemdahir/Work-Day-Scheduler-Application",
			live: "https://abdulhakeemdahir.github.io/Work-Day-Scheduler-Application/",
			tech: "Javascript, jQuery, 3rd Party API",
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
							tech={card.tech}
						/>
					))}
				</Grid>
			</CssBaseline>
		</>
	);
}
