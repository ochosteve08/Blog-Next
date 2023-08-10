"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="bg-white p-2 text-black w-80 text-xl rounded-xl outline-blue-300"
        placeholder="search"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
};

export default Search;
