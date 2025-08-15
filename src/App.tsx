import "./App.css";
import { RoutePages } from "./routes/route";

function App() {
  return (
    <>
      <nav style={{ backgroundColor: "blue" }}>Navigation</nav>
      <RoutePages />
      <footer style={{ backgroundColor: "blue" }}>footer</footer>
    </>
  );
}
export default App;
