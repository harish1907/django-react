import AddForm from "./components/AddForm";
import TableView from "./components/TableView";
import Hello from "./components/Hello";
import React, {useState, useEffect} from "react";

var DUMMY_DATA = [];

function App() {

  const [person_details, addPerson] = useState(DUMMY_DATA);
  const [hello, changehello] = useState("");

  const URL = "http://127.0.0.1:8000";

  function fectGetApiData(){
    fetch(URL+"/person-api/")
    .then( response => response.json() )
    .then( data => {
      addPerson(data.data);
    });
  }

  useEffect(() => {
    fetch(URL+"/hello-api/")
      .then( response => response.json() )
      .then( data => {
        changehello(data.message);
      });
  }, [])

  useEffect(() => {
    fectGetApiData();
  },[])


  const addNewRecord = (childData) => {
    // addPerson([childData , ...person_details]);

    fetch(URL+"/person-api/",{
      method: "POST",
      body: JSON.stringify(childData),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.json());
      fectGetApiData();
    })
    ;
  };

  return (
    <div className="App">
      <h3>Table View</h3>
      <AddForm addNewRecord={addNewRecord}/>
      <TableView person_details={person_details}/>
      <Hello hello={hello}/>
    </div>
  );
}

export default App;
