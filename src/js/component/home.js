import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbo } from "./jumbo.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export default function Home() {
	let cards = [
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},

		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		}
	];

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo />
			<div className="row">
				{cards.map((card, index) => (
					<div className="col-3" key={index}>
						<Card
							tittle={card.title}
							body={card.body}
							buttonText={card.buttonText}
							url={card.url}
							image={card.image}
						/>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}
