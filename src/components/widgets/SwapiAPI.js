import React from "react";
import { useState, useEffect } from "react";

const base_url = "https://www.swapi.tech/api"
const choices = ["films", "people", "planets", "species", "vehicles"]

function SwapiAPI(props) {

	const [selected, setSelected] = useState("");

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [species, setSpecies] = useState([]);
	const [starships, setStarships] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const [choices, setChoices] = useState([])

	useEffect(() => {

		const getChoices = async () => {

			const {data} = (await fetch("https://www.swapi.tech/api")).json()
			console.log('::d', data)

			// .then(data => console.log(Object.keys(data.result)))
			// .catch(err => console.error("Get Choices Error ", err))	
	
		}

		getChoices()




	}, [])



		function getSpecificData(endpoint, key){
			fetch(base_url + endpoint)
				.then(res => res.json())
				.then(data => {
					switch(endpoint.slice(1)) {
						case "people":
							setPeople(data)
					}
				})

		}

	


	const changeSelectOptionHandler = (e) => {
		setSelected(e.target.value);

		getSpecificData(`/${e.target.value}`)
	};



	let options = "";

	// let type = null;


	let ppl = people.map((item) => <option key={item.name}>{item.name}</option>);

	let plnts = planets.map((item) => <option key={item.name}>{item.name}</option>);

	let spcs = species.map((item) => <option key={item.name}>{item.name}</option>);

	let star_ships = starships.map((item) => <option key={item.name}>{item.name}</option>);

	let vehicles_ = vehicles.map((item) => <option key={item.name}>{item.name}</option>);




	

	if (selected === "people") {
		options = ppl
	} else if (selected === "planets") {
		options = {plnts}
	} else if (selected === "species") {
		options = {spcs}
	} else if (selected === "starships") {
		options = {star_ships}
	} else if (selected === "vehicles") {
		options = {vehicles_}
	}


	return (
		<div
		style={{
			padding: "16px",
			margin: "16px",
		}}
		>

			
		
		</div>
	);
};

function Test() {
	const [choices, setChoices] = useState([])
	const [selection, setSelection] = useState('')
	const [extraData, setExtraData] = useState([])
	const [extraSelection, setExtraSelection] = useState('')
	const [loadingChoices, setLoadingChoices] = useState(false)
	const [loadingExtraData, setLoadingExtraData] = useState(false)

	useEffect(() => {

		const getChoices = async () => {

			try {
				setLoadingChoices(true)
				const {result} = await (await fetch("https://www.swapi.tech/api")).json()

				setChoices(Object.keys(result))
	
			} catch (err) {
				console.log(err)

			} finally {
				setLoadingChoices(false)
			}

	
		}

		getChoices()
	}, [])

	useEffect(() => {


		const getData = async () => {
			const {results} = await (await fetch(`https://www.swapi.tech/api/${selection}?limit=1000`)).json()

			setExtraData(results)
		}

		if (selection === 'Make a choice...') setExtraData([])
		else if (selection === 'films') setExtraData([])
		else getData()

	}, [selection])

	const handleSelection = (e) => {
		setSelection(e.target.value)
	}

	const handleExtraSelection = (e) => {

	}


	return (
		<div>
			{/* Hello world */}
			<select onChange={handleSelection}>
				{loadingChoices && <option>Loading...</option>}
				{!loadingChoices && (<>
					<option>Make a choice...</option>
					{choices.map(item => <option key={item}>{item}</option>)}
				</>)}
			</select>

			{extraData?.length > 0 && (
				<select onChange={handleExtraSelection}>
					<option>Make another choice...</option>
					{extraData.map(item => <option key={item.uid}>{item.name}</option>)}
				</select>
			)}

		</div>
	)
}

export default Test
