import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import './Style.css';
import City from "./City";
function App() {
  const key = "7d2c17d647fcc6d35cdfd7783162a49b";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
      <div className="App">
        <div>
          <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="District"
              className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          />
          {city && <City city={city} />}
        </div>
      </div>
  );
}

export default App;