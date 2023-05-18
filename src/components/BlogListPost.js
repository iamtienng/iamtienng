const BlogListPost = ({ title, content, author, date }) => {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-100 duration-300 text-left shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
      <h2>{title}</h2>
      <p>Summary: {content}</p>
    </div>
  );
};

export default BlogListPost;
