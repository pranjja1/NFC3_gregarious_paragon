// src/CsvTable.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CsvTable = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file when the component mounts
    Papa.parse('./LokSabhaParliamentaryWork.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setHeaders(Object.keys(results.data[0] || {}));
        setData(results.data);
      },
      skipEmptyLines: true
    });
  }, []);

  return (
    <div>
      <h1>CSV Table Display</h1>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CsvTable;
