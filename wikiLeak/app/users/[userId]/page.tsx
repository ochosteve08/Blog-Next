import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import Link from "next/link";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData;

  return (
    <>
      <Link href="/users">
        <button>Back to Users List</button>
      </Link>
      <h2 className="font-bold text-2xl">Author: {user.name}</h2>

      <Suspense fallback={<div>Loading....</div>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
