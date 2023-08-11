import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className=" mx-auto flex max-w-prose justify-between flex-col sm:flex-row">
        <Link
          href={"/"}
          className="text-white/90 no-underline hover:text-white"
        >
          {" "}
          Stephen Ujah
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
