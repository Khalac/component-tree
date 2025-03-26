import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Homepage />
    </div>
  );
}

export default App;
