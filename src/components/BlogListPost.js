import Link from "next/link";
import Image from "next/image";

const fieldHref = {
  ComputerScience: "Experience",
  GameCriticism: "Post",
  KeycapDesigning: "Project",
};

const BlogListPost = ({ id, field, title, summary, image, width, height }) => {
  return (
    <Link href={`/${field}/${fieldHref[field]}-${id}`}>
      <div className="flex-wrap grow transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-100 duration-300 text-left shadow-lg p-10 rounded-xl dark:bg-gray-200 ">
        <Image
          src={image}
          alt="alt"
          width={width}
          height={height}
          className="rounded-xl"
        />
        <h2>{title}</h2>
        <p>Summary: {summary}</p>
      </div>
    </Link>
  );
};

export default BlogListPost;
