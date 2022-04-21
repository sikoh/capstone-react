import React from "react";
import { useState, useEffect } from "react";


export default function SwapiAPI(){

const [selected, setSelected] = useState("");


const people = [
	"Luke Skywalker",
	"C-3PO",
	"R2-D2",
	"Darth Vader",
	"Leia Organa",
	"Owen Lars",
	"Beru Whitesun lars",
	"R5-D4",
	"Biggs Darklighter",
	"Obi-Wan Kenobi"
];


	const planets = ["Tatooine", "Alderaan", "Yavin IV", "Hoth", "Dagobah", 
					"Bespin", "Endor", "Naboo", "Coruscant", "Kamino"];

	const species = ["Human", "Droid", "Wookie", "Rodian", "Hutt", "Yoda's species", 
					"Trandoshan", "Mon Calamari", "Ewok", "Sullustan"];

	const starships = ["CR90 corvette", "Star Destroyer", "Sentinel-class landing craft", 
					"Death Star", "Y-wing", "Millennium Falcon", "TIE Advanced x1", "Executor", 
					"X-wing", "Rebel transport"];

	const vehicles = ["Sand Crawler", "X-34 landspeeder", "T-16 skyhopper", "TIE/LN starfighter", 
					"Snowspeeder", "AT-AT", "TIE bomber", "AT-ST", "Storm IV Twin-Pod cloud car", "Sail barge"];



	const changeSelectOptionHandler = (e) => {
						setSelected(e.target.value);
					};


	let type = null;


	let options = null;

/** Setting Type variable according to dropdown */
if (selected === "People") {
	type = people;
} else if (selected === "Planets") {
	type = planets;
} else if (selected === "Species") {
	type = species;
} else if (selected === "Starships") {
	type = starships;
} else if (selected === "Vehicles") {
	type = vehicles;
}


if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}
return (
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
		<form>
			<div>
			<select onChange={changeSelectOptionHandler}>
				<option>Choose...</option>
				<option>People</option>
				<option>Planets</option>
				<option>Species</option>
				<option>Starships</option>
				<option>Vehicles</option>
			</select>
			</div>
			<div>
			<select>
				{
				/** This is where we have used our options variable */
				options
				}
			</select>
			</div>
		</form>
		{/* <br/>
		<button>Get Info</button> */}
	
	</div>
);
};


