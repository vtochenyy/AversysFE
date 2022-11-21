import { Button } from "antd";
import axios from "axios";
// import {
//   LineChart,
//   PieChart,
//   ColumnChart,
//   BarChart,
//   AreaChart,
//   ScatterChart,
// } from "react-chartkick";
import "chartkick/chart.js";
import { Link } from "react-router-dom";
import "./App.css";
import InfoRoadMap from "./components/infoRoadMap/InfoRoadMap";

function App() {
  return (
    <div className="App">
      <InfoRoadMap />
      <Button
        onClick={() => {
          axios.post("http://localhost:9876/users/register", {
            firstName: "Eqw",
            lastName: "AsD",
            login: "Kolya",
            password: "23nlnf",
            age: 24,
          });
        }}
        style={{ margin: "20px" }}
        type="primary"
      >
        dsd
      </Button>
      <Link to="/register">
        <Button style={{ margin: "20px" }} type="default">
          dsd
        </Button>
      </Link>
      <Link to="/autorized">
        <Button style={{ margin: "20px" }} type="dashed">
          dsd
        </Button>
      </Link>
      <Link to="/mainPage">
        <Button style={{ margin: "20px" }} type="ghost">
          dsd
        </Button>
      </Link>
    </div>
  );
}

export default App;
