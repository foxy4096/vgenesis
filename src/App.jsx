import "./App.css";
import Coordinators from "./components/Coordinators";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";

function App() {
  return (
    <div className="dot-bg">
      <CustomCursor />
      <Hero />
      <Invitation/>
      <Coordinators/>
      <div className="bg"></div>
    </div>
  );
}

export default App;
