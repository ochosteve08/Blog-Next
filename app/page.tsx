/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Steve</span>
        </span>
      </p>
    </main>
  );
}
