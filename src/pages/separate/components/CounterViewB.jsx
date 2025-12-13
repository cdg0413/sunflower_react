export default function CounterViewB({ viewNum, onDecrease, onIncrease, isOdd }) {
  return (
    <div>
      <h3>B Type</h3>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button onClick={onDecrease}>-</button>
        <div>
          {viewNum} {isOdd ? "(ODD)" : "(EVEN)"}
        </div>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
