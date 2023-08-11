import { getPostData, getSortedPostsData } from "@/lib/post";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Params = {
  params: {
    postId: string;
  };
};

export const generateMetadata = ({ params }: Params) => {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;
  const post = posts.find((post: { id: string }) => post.id === postId);

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

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 max-w-prose prose-slate dark:prose-invert mx-auto mb-10">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0 italic text-orange-600">{pubDate}</p>
      <article>
        <section
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link href="/">
            <button className="bg-inherit/70 hover:bg-slate-700 rounded-xl py-2 px-3 mt-3">
              {" "}
              ← Back to home
            </button>
          </Link>
        </p>
      </article>
    </main>
  );
};

export default Post;
