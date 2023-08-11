import Image from "next/image";

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/photo.png"
        width={200}
        height={200}
        alt="ujah stephen"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      />
    </section>
  );
};

export default MyProfilePic;
