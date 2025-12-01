import Item from "./Item";
import { useState } from "react";

let testData = [
  {
    id: 1,
    name: "item1",
    type: "fire",
    isParty: true,
  },
  {
    id: 2,
    name: "item2",
    type: "water",
    isParty: false,
  },
];

export default function FormBoard() {
  const [data, setData] = useState(testData);
  const [lastPrint, setLastPrint] = useState("");

  const addItem = () => {
    setData((prev) => {
      const nextId = prev.length ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          id: nextId,
          name: "",
          type: "fire",
          isParty: false,
        },
      ];
    });
  };

  const deleteItem = (id) => {
    setData((prev) => prev.filter((v) => v.id !== id));
  };

  const updateItem = (id, changes) => {
    console.log(id, changes);
    setData((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...changes } : it))
    );
  };

  const printItem = () => {
    console.log(data);
    setLastPrint(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>Object Test</h1>
      <div
        style={{
          border: "1px solid gold",
          padding: "8px",
          marginBottom: "8px",
        }}
      >
        <button onClick={addItem}>Add Item</button>
        <button onClick={printItem}>Print Items</button>
      </div>

      {data.map((item) => (
        <Item
          data={item}
          key={item.id}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}

      {lastPrint && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
          <h3>Printed Items</h3>
          <pre>{lastPrint}</pre>
        </div>
      )}
    </div>
  );
}
