import { getSortedPostsData } from "@/lib/post";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = {
  params: {
    postId: string;
  };
};

export const generateMetadata = ({ params }: Params) => {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;
  const post = posts.find((post: { id: string }) => post.id === postId);
  console.log(!post);
  if (!post) {
    return {
      title: "Post Not Found", //presently not working
    };
  }

  return {
    title: post.title,
  };
};

const Post = async ({ params }: Params) => {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) notFound();

  return <div>page</div>;
};

export default Post;
