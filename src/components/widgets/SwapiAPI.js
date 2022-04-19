import React from "react";

export default function SwapiAPI(){
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

/** Different arrays for different dropdowns */
const people = [
	"Searching Algorithm",
	"Sorting Algorithm",
	"Graph Algorithm",
];
const planets = ["C++", "Java", "Python", "C#"];
const species = ["Arrays", "LinkedList", "Stack", "Queue"];
const starships = ["C++", "Java", "Python", "C#"];
const vehicles = ["Arrays", "LinkedList", "Stack", "Queue"];

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
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

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
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
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
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
	</div>
);
};


