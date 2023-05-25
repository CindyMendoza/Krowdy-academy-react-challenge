import { useState } from "react";
import CardVideo from "./components/cardVideo.jsx";
// import viteLogo from '/vite.svg'
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Video Cuestionario</h1>
      <CardVideo></CardVideo>
    </>
  );
}

export default App;
