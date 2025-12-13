export default function CounterViewA({ viewNum, onDecrease, onIncrease, isOdd }) {
  return (
    <div>
      <h3>A Type</h3>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button onClick={onDecrease}>-</button>
        <div>{viewNum}</div>
        <button onClick={onIncrease}>+</button>
      </div>
      <div>현재 값은 {isOdd ? "홀수" : "짝수"}입니다</div>
    </div>
  );
}
