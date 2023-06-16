import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta } from "../../api/api";
import YouTube from "../../../components/Youtube";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect, useState } from "react";

import SectionHeader from "../../../components/SectionHeader";
import Navigation from "../../../components/Navigation";

const navigation = [
  { name: "About", href: "/", current: false },
  { name: "Computer Science", href: "/ComputerScience", current: true },
  { name: "Game Criticism", href: "/GameCriticism", current: false },
  { name: "Keycap Designing", href: "/KeycapDesigning", current: false },
];

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  useEffect(() => {
    // Load preferred theme from local storage
    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (preferredTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // If no theme preference is set, use the automatic theme based on user's system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  return (
    <>
      <SectionHeader title={post.meta.title} favIconUrl="/favicon.ico" />
      <main>
        <Navigation navigation={navigation} />
        <div className="max-w-5xl mx-auto py-10 px-4">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            {post.meta.title}
          </h2>
          <h1></h1>
          <div className="dark:prose-invert dark:text-white">
            <MDXRemote {...post.source} components={{ YouTube, Image }} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug, "cs");
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs("cs").map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
