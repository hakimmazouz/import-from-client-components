"use client";
import { useState } from "react";

export const fragment = "Hello from Client Component";

function MyClientComponent() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

export { MyClientComponent };
