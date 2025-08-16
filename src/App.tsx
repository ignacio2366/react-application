import "./App.css";
import { RoutePages } from "./routes/route";

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: "blue" }}>Navigation</nav>
      <RoutePages />
      <footer style={{ backgroundColor: "blue" }}>footer</footer>
    </div>
  );
}
export default App;
