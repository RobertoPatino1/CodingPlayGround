import ListGroup from "./components/ListGroup";
function App() {
  //Then we just return the created component inside a macro component
  return (
    <div>
      <ListGroup
        items={["Python", "Java", "JavaScript", "C", "C++", "GDScript"]}
        heading="Programming Languages"
      ></ListGroup>
    </div>
  );
}

//Dont forget to export the current component!
export default App;
