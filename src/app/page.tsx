import { MyClientComponent } from "@/components/MyClientComponent";
import { fetchData } from "@/lib/queries";

export default async function Home() {
  const data = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>{data}</h1>
        <MyClientComponent />
      </div>
    </main>
  );
}
