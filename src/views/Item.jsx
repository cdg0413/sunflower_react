export default function Item({ data, deleteItem, updateItem }) {
  // Controlled inputs: call updateItem on change
  return (
    <div style={{ border: "1px solid #fff", padding: "8px" }}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={(e) => updateItem(data.id, { name: e.target.value })}
      />

      <span>&nbsp;</span>

      <select
        name="type"
        id={`type-${data.id}`}
        value={data.type}
        onChange={(e) => updateItem(data.id, { type: e.target.value })}
      >
        <option value="fire">fire</option>
        <option value="water">water</option>
        <option value="grass">grass</option>
      </select>

      <span>&nbsp;</span>

      <label htmlFor={`isParty-${data.id}`}>isParty</label>
      <input
        type="checkbox"
        id={`isParty-${data.id}`}
        checked={!!data.isParty}
        onChange={(e) => updateItem(data.id, { isParty: e.target.checked })}
      />

      <span>&nbsp;</span>

      <button onClick={() => deleteItem(data.id)}>Remove</button>
    </div>
  );
}
