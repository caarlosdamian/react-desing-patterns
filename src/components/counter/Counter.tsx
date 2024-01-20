import { useState } from 'react';

export const Counter = ({
  children,
}: {
  children: (
    counter: number,
    decrement: () => void,
    increment: () => void
  ) => void;
}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return <>{children(counter, increment, decrement)}</>;
};
