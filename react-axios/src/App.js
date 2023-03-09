import React, { useEffect } from "react";
import axios from "axios";

function App() {

  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:3000/test", {});
  //   console.log(response.data);
  // }

  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:3000/human", {});
  //   console.log(response.data);
  // }

  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:3000/conn_param", { params:{ title:"title" } });
  //   console.log(response.data);
  // }

  // post 는 parameter가 다름
  const fetchData = async () => {
    const response = await axios.post("http://localhost:3000/allList", null, { params:{ user:"skin" } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
    
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
