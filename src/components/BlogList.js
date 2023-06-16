import BlogListPost from "./BlogListPost";

const BlogList = ({ blogPostsData, field }) => {
  return (
    <div className="flex flex-wrap-reverse gap-10  justify-around">
      {blogPostsData.map((post) => (
        <BlogListPost
          key={post.id}
          field={field}
          id={post.id}
          title={post.title}
          summary={post.summary}
          url={post.url}
          image={post.image}
          width={500}
          height={300}
        />
      ))}
    </div>
  );
};

export default BlogList;
