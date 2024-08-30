// src/Report.js
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Report.css'; // Import the CSS file

function Report() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      console.log(response);

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className="report">
      <h2>Performance Report</h2>

      <Table className="table" responsive="sm">
        <thead>
          <tr>
            <th>Candidate Info</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Caste</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{data.name || 'Table cell'}</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>

      <Table className="table" responsive="md">
        <thead>
          <tr>
            <th>Political Info</th>
            <th>Party Type</th>
            <th>Party Name</th>
            <th>State</th>
            <th>Constituency</th>
            <th>Party Changed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>

      <Table className="table" responsive="lg">
        <thead>
          <tr>
            <th>Election Info</th>
            <th>Vote Share</th>
            <th>Incumbent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Report;
