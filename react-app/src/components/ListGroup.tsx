function ListGroup() {
  const items = ["Python", "Java", "JavaScript", "C", "C++", "GDScript"];
  return (
    <>
      <h1>List Group of elements!!!</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
