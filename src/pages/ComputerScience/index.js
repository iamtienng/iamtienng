import { useEffect, useState } from "react";

import iamtienng_image from "../../../public/iamtienng_web.png";
import blogPostsData from "./json/project-posts.json";

import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import ImageContainer from "@/components/ImageContainer";
import BlogList from "@/components/BlogList";

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
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tien M. Nguyen
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              A developer, a gamer and a keyboard lover.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              My major is Computer Science so I define myself as a developer.
              Love writing about the great things in the video games I play.
              Sometimes I also design keycaps for mechanical keyboards.
            </p>
            <SocialLinks />
            <ImageContainer src={iamtienng_image} alt="alt" />
          </div>
        </section>
        <section className="py-10">
          <BlogList blogPostsData={blogPosts} />
        </section>
      </main>
    </div>
  );
}
