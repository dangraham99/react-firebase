import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App font-[Inter]">
      <Navbar />
      <div className="max-w-1/5">
        <Login />
      </div>
    </div>
  );
}

export default App;
