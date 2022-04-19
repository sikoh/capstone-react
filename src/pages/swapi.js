import React from 'react'

import SwapiAPI from '../components/widgets/SwapiAPI'

function swapi() {
  return (
    <div>
        {/* <form action="/action_page.php">
            <label htmlFor="cars">Choose :</label>
            <select id="endpoint" name="endpoins">
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
            </select>
            <input type="submit"/>
        </form> */}
        <SwapiAPI />
    </div>
  )
}

export default swapi