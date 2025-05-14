import Button from "./components/Button";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Heading from "./components/Heading";
import StaggerList from "./components/StaggerList";
import "./styles/App.scss";

function App() {
  return (
    <>
      <h1 className="shiny-title">Hello!</h1>
      <div className="center">
        <Button />
      </div>
      <div className="center">
        <Heading />
      </div>
      <StaggerList />
      <div style={{ display: "flex", gap: 20 }}>
        <Card />
        <Gallery />
      </div>
    </>
  );
}

export default App;
