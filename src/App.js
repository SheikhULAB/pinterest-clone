import "./App.css";
import Header from "./components/Header/Header";
import Mainboard from "./components/Mainboard/Mainboard";
import unsplash from "./api/unsplash";
import React, { useState, useEffect } from "react";

function App() {
  const [pins, setPins] = useState([]);
  const getData = async (term) => {
    unsplash
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          client_id: "VOe8m0UMgCTy5IBDiViPJgbM_aMCyyaXYA0jQt0OdGg",
          per_page: 30,
        },
      })
      .then((res) => {
        let results = res.data.results;

        setPins(results);
      });
  };

  useEffect(() => {
    getData("dog");
  }, []);

  return (
    <div className="App">
      <Header getData={getData} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
