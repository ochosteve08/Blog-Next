import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className=" mx-auto flex max-w-prose justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 ">
          <Link
            href={"/"}
            className="text-white/90 no-underline hover:text-white"
          >
            Stephen Ujah
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly space-x-6 align-middle text-white text-4xl lg:text-5xl ">
          <Link
            href={"https://www.youtube.com/channel/UC3aNNzv_PIG8CkWxtM_95lg"}
            className="text-red-700 hover:text-red-400"
          >
            <FaYoutube />
          </Link>
          <Link
            href={"https://github.com/ochosteve08"}
            className="text-gray-800 hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href={"https://twitter.com/Prof_Ochosteve"}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
