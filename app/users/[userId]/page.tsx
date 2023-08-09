
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import {Suspense} from 'react'
import UserPosts from "./components/UserPosts";

type Params = {
    params: {
        userId: string,
    }
}


const UserPage = async ({params: {userId}}: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData;
  
  return (
    <>
      <h2 className="font-bold text-2xl">Author:  {user.name}</h2>

      <Suspense fallback={<div>Loading....</div>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export default UserPage