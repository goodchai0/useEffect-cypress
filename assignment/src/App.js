import logo from "./logo.svg";
import "./App.css";
// import Stepper from "./components/Stepper";
import Timer from "./components/1st.jsx";
import Timer2 from "./components/2nd.jsx";

import Counter from "./components/3rd.jsx";
import Counter2 from "./components/Assignment";
function App() {
  return (
    <div className="App">
      {/* <Stepper /> */}
      <Timer />
      <Timer2 />
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
