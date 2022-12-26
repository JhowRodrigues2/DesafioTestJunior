import { useState } from "react";
import "./App.css";
import FormLogin from "./FormLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FormLogin />
    </div>
  );
}

export default App;
