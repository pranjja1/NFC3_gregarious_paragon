import React, { useState, useEffect } from 'react';
import table from './state.csv';
import Papa from 'papaparse';



function Table() {

  const [stateInput, setStateInput] = useState('');

  const [cities, setCities] = useState([]);

  const [filteredCities, setFilteredCities] = useState([]);



  // Load CSV file

  useEffect(() => {

    fetch('./state.csv')

      .then(response => response.text())

      .then(data => {

        const parsedData = Papa.parse(data, { header: true });

        setCities(parsedData.data);

      });

  }, []);



  // Filter cities based on state input

  useEffect(() => {

    if (stateInput) {

      const filtered = cities.filter(city => city.state === stateInput);

      setFilteredCities(filtered);

    } else {

      setFilteredCities([]);

    }

  }, [stateInput, cities]);



  return (

    <div>

      <form>

        <label>

          State:

          <input

            type="text"

            value={stateInput}

            onChange={(e) => setStateInput(e.target.value)}

          />

        </label>

      </form>



      <table>

        <thead>

          <tr>

            <th>City</th>

            <th>State</th>

          </tr>

        </thead>

        <tbody>

          {filteredCities.map((city, index) => (

            <tr key={index}>

              <td>{city.city}</td>

              <td>{city.state}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}



export default Table;