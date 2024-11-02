import "./App.css";
import { Header } from "./components/Header";
import { RoutesList } from "./components/RoutesList";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <RoutesList />
      </main>
    </>
  );
}

export default App;
