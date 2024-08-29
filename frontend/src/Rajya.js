import React, { useState } from "react";

const General = () => {
  // State to manage loading state
  const [isLoading, setIsloading] = useState(false);
  // State to manage form data
  const [formData, setFormData] = useState({
    State_name: "",
    Year:"",
    Party_type: "",
    Party_name: ""
  });
  // State to manage prediction result
  const [result, setResult] = useState("");
  // State to manage displaying result
  const [showSpan, setShowSpan] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    let inputData = { ...formData };
    inputData[name] = value;
    setFormData(inputData);
  };

  // Function to handle the 'Predict Selling Price' button click
  const handlePredictClick = () => {
    const url = "http://localhost:5000/predict";
    setIsloading(true);
    const jsonData = JSON.stringify(formData);
    // Fetch request to the Flask backend
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: jsonData,
    })
      .then((response) => response.json())
      .then((response) => {
        setResult(response.Prediction);
        setIsloading(false);
        setShowSpan(true);
      });
  };

  //----------------------------------------------------
    
  const [file, setFile] = useState();
    const [array, setArray] = useState([]);
  
    const fileReader = new FileReader();
  
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
    };


    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
  
      const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
        return obj;
      });
  
      setArray(array);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(file);
      }
    };
  
    const headerKeys = Object.keys(Object.assign({}, ...array));

    //--------------------------------------------------------------------

  return (
    <>
      <div className="container text-center mt-4">
        <div className="container">
          <form method="post" acceptCharset="utf-8" name="Modelform">
           
        //input of form

        <div className="text-center mt-3">
              <label>
                <b>State name:</b>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="State_name"
                name="State_name"
                value={formData.State_name}
                onChange={handleChange}
                placeholder="Enter State name"
              />
            </div>

            <div className="text-center mt-3">
              <label>
                <b>Year:</b>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="Year"
                name="Year"
                value={formData.Year}
                onChange={handleChange}
                placeholder="Year"
              />
            </div>

            <div className="form-group">
              <label>
                <b>Party Type:</b>
              </label>
              <br />
              <select
                className="selectpicker form-control"
                id="Party_Type"
                name="Party_Type"
                value={formData.Party_Type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="0">National</option>
                <option value="1">State</option>
                <option value="1">Local</option>
                <option value="1">Independent</option>
              </select>
            </div>

            <div className="text-center mt-3">
              <label>
                <b>Party Name:</b>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="Party_name"
                name="Part_name"
                value={formData.Party_name}
                onChange={handleChange}
                placeholder="Enter Party Name"
              />
            </div>

------------------------------------------------------------------------

            <div className="form-group mt-3">
              <button
                className="btn btn-primary form-control"
                disabled={isLoading}
                onClick={!isLoading ? handlePredictClick : null}
              >
                Predict Selling Price
              </button>
            </div>
          </form>
          <br />
         
          <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


         
        </div>
      </div>
    </>
  );
};
export default General;