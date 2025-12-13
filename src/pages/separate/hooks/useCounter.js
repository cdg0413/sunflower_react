import { useState } from "react";

export default function useCounter() {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setNum((prev) => prev + step);
  };

  const decrease = () => {
    setNum((prev) => prev - step);
  };

  const changeStep = (nextStep) => {
    if (!Number.isInteger(nextStep)) return;
    if (nextStep <= 0) return;
    setStep(nextStep);
  };

  const isOdd = num % 2 !== 0;

  return { increase, decrease, num, isOdd, setStep: changeStep };
}
