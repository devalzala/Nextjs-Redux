"use client";
import { decrement, increment } from "@/counterSlice";
import { useAppDispatch } from "@/hooks";

export default function Home() {
  const dispatch = useAppDispatch()
  
  return (
    <>
      <div>
        <p>Count:</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}
