function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    items = []
   
   
    const getMessage = () => {
      return items.length === 0 ? <p>No items found</p> : null
    }
   
    //When we do a map we need an unique identifier for each element (key)
    return (
      <>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
          {items.map((item) => (
            <li key={item} className="list-group-item">{item}</li>
          ))}
        </ul>
      </>
    );
   }
   
   
   export default ListGroup;