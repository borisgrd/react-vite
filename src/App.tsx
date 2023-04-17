import ListGroup from "./components/ListGroup";

ListGroup;

function App() {
  let items = ["NY", "SF", "LA", "WD"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
