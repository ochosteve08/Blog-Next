import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1>HELLO WORLD</h1>
      <Link href={"/about"}>Go to About Page</Link>
      <Link href={"/users"}>Users</Link>
      
    </main>
  );
}
