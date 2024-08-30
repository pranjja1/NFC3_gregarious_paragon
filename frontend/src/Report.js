import Table from 'react-bootstrap/Table';

function Report() {
  return (

    
    <div className='report' style={{position:"absolute",alignItems:"center",top:"70px",left:"30px",margin:"13px",textAlign:"center"}}>
      <h2>Performance Report</h2>
      <Table responsive="sm" >
        <thead >
          <tr style={{backgroundColor:"red"}}>
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
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
        </tbody>
      </Table>
      <Table responsive="md">
        <thead>
          <tr>
            <th>Political Info</th>
            <th>Party Type</th>
            <th>Party Name</th>
            <th>State</th>
            <th>Constituency</th>
            <th>Party changed</th>
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
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Election Info</th>
            <th>Vote share</th>
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