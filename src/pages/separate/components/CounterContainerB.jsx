import CounterViewA from "./CounterViewA";
import CounterViewB from "./CounterViewB";
import useCounter from "../hooks/useCounter";
import { useState } from "react";

export default function CounterContainerB() {
  const { increase, decrease, num, isOdd, setStep } = useCounter();

  const [viewType, setViewType] = useState("A");
  const ViewMap = {
    A: CounterViewA,
    B: CounterViewB,
  };

  const ViewComponent = ViewMap[viewType];
  return (
    <>
      <div>
        <button onClick={() => setViewType("A")}>A type</button>
        <button onClick={() => setViewType("B")}>B type</button>
      </div>
      <div>
        <button onClick={() => setStep(1)}>1씩 증감하기</button>
        <button onClick={() => setStep(3)}>3씩 증감하기</button>
        <button onClick={() => setStep(5)}>5씩 증감하기</button>
      </div>
      <hr />
      <div>
        <ViewComponent
          viewNum={num}
          isOdd={isOdd}
          onDecrease={decrease}
          onIncrease={increase}
        />
      </div>
    </>
  );
}
