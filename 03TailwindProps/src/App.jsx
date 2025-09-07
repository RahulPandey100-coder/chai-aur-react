import { useState } from "react";

import "./App.css";
import Card from "../components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj= {
    username: "Rahul",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4">
        Tailwind test is happening now
        </h1>
        <Card username = "chaiaurCode" />
        <Card/>

      

    
    </>
  );
}

export default App;
