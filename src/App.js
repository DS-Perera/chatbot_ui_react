import logo from "./logo.svg";
import "./App.css";
import Design from "./Design/Design";
import { useState } from "react";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  setTimeout(() => {
    setIsLoad(false);
  }, 1000);

  return (
    // <div>
    //   {isLoad ? (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> Darshana Perera
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   ) : (
    //     <Design />
    //   )}
    // </div>
    <div>
      <Design />
    </div>
  );
}

export default App;
