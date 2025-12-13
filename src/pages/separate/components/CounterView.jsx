export default function CounterView({ viewNum, func1, func2, isOdd }) {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button onClick={func1}>-</button>
        <div>{viewNum}</div>
        <button onClick={func2}>+</button>
      </div>
      <div>{isOdd ? "홀수" : "짝수"}</div>
    </div>
  );
}
