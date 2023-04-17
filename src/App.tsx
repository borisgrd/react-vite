import ListGroup from "./components/ListGroup";

ListGroup;

function App() {
  let items = ["NY", "SF", "LA", "WD"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
