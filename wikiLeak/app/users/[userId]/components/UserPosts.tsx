type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  const content = posts.map((post, index) => {
    return (
      <article className="mb-4  w-1/2" key={post.id}>
        <h2 className="text-blue-400 ">
          <span className="mr-6">{index + 1}.</span>
          {post.title}
        </h2>
        <p>{post.body}</p>
      </article>
    );
  });

  return <div>{content}</div>;
};

export default UserPosts;
