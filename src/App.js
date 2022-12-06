// import {
//   LineChart,
//   PieChart,
//   ColumnChart,
//   BarChart,
//   AreaChart,
//   ScatterChart,
// } from "react-chartkick";
import "chartkick/chart.js";

import "./App.css";
import InfoRoadMap from "./components/infoRoadMap/InfoRoadMap";

function App() {
  return (
    <div>
      <InfoRoadMap />
    </div>
  );
}

export default App;
