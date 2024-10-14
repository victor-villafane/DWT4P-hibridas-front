import React from "react";

const ListItem = ({ item }) => {
  return (
    <li>
      <strong>{item.name}</strong> - {item.email}
    </li>
  );
};

export default ListItem;
