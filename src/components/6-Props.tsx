import { useState } from "react";

//With the interface we can define the shape or the inteface of an object
//Props are inmmutable
interface ListGroupProps{
  items: string[];
  heading: string;
  // (item: string) => void 
  onSelectItem: (item: string) => void;
  
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null
  }

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item)
          }
          }>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
