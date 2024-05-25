import { fragment } from "@/components/MyClientComponent";

console.log({ fragment });

export function fetchData() {
  console.log({ fragment });
  return fragment;
}
