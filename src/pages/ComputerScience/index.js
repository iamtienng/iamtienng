import { useEffect, useState } from "react";

import blogPostsData from "./contents/list/posts-list.json";

import SectionHeader from "../../components/SectionHeader";
import Navigation from "../../components/Navigation";
import BlogList from "../../components/BlogList";

const navigation = [
  { name: "About", href: "/", current: false },
  { name: "Computer Science", href: "/ComputerScience", current: true },
  { name: "Game Criticism", href: "/GameCriticism", current: false },
  { name: "Keycap Designing", href: "/KeycapDesigning", current: false },
];

export default function ComputerScience() {
  const [blogPosts, setBlogPosts] = useState([]);

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

    setBlogPosts(blogPostsData);
  }, []);

  return (
    <div>
      <SectionHeader title="I am Tien Nguyen" favIconUrl="/favicon.ico" />
      <main>
        <Navigation navigation={navigation} />
        <section>
          <div className="text-center p-5 py-5">
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome to my blog about Computer Science. Here, I share my
              experiences and insights into various projects I have worked on.
            </p>
          </div>
        </section>
        <section className="mx-auto py-10 px-4">
          <BlogList blogPostsData={blogPosts} field="ComputerScience" />
        </section>
      </main>
    </div>
  );
}
