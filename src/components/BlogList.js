import BlogListPost from "./BlogListPost";

const BlogList = ({ blogPostsData }) => {
  // Sort blog posts by id in descending order
  blogPostsData.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <div className="lg:flex gap-10 justify-around">
      {blogPostsData.map((post) => (
        <BlogListPost key={post.id} title={post.title} summary={post.summary} />
      ))}
    </div>
  );
};

export default BlogList;
