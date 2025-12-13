import CounterContainerA from "./CounterContainerA";
import CounterContainerB from "./CounterContainerB";
export default function CounterContainer() {
  return (
    <>
      <CounterContainerA />
      <hr />
      <hr />
      <CounterContainerB />
    </>
  );
}
