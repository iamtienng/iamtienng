import BlogListPost from "./BlogListPost";
import { useEffect, useState } from "react";

const BlogList = ({ blogPostsData, field }) => {
  const [latestBlogPost, setLatestBlogPost] = useState({});

  useEffect(() => {
    if (blogPostsData.length > 0) {
      setLatestBlogPost(blogPostsData[blogPostsData.length - 1]);
      blogPostsData.pop();
    }
  }, [blogPostsData]);

  return (
    <div className="flex flex-wrap-reverse gap-10 justify-around">
      {blogPostsData.map((post) => (
        <BlogListPost
          key={post.id}
          field={field}
          id={post.id}
          title={post.title}
          summary={post.summary}
          image={post.image}
          width={500}
          height={300}
        />
      ))}
      <div className="">
        {latestBlogPost && (
          <BlogListPost
            key={latestBlogPost.id}
            field={field}
            id={latestBlogPost.id}
            title={latestBlogPost.title}
            summary={latestBlogPost.summary}
            image={latestBlogPost.image}
            width={500}
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default BlogList;
