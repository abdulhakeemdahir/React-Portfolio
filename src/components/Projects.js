import React, { useState } from "react";
import Cards from "./Cards";

export default function Projects() {
	const [projectState, setProjectState] = useState([
		{
			title: "Project 2",
			media: "",
			summary: "Lorem Ipsum",
		},
		{
			title: "Project 3",
			media: "",
			summary: "Lorem Ipsum",
		},
	]);
	return (
		<div>
			{projectState.map(card => (
				<Cards title={card.title} media={card.media} summary={card.summary} />
			))}
		</div>
	);
}
