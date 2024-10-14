import React from "react";
import ListItem from "./ListItem";
import Contador from "../contador/Contador";

const List = ( { children, items, titulo, ...rest } ) => {
  // console.log("props",props.items)
  // const { items } = props 
  console.log("titulo", titulo)
  // const misStylos = { backgroundColor: "blue", color: "red" }
  return (
    <>
      <p>{titulo}</p>
      <ul { ...rest } >
        { children }
        {items.map((item, indice) => (
          <div key={indice}>
            <ListItem  item={item} />
            <Contador />
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;
