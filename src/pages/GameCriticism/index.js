import { useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
import Script from "next/script";

import Navigation from "@/components/Navigation";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Computer Science", href: "/ComputerScience", current: false },
  { name: "Game Criticism", href: "/GameCriticism", current: true },
  { name: "Keycap Designing", href: "/KeycapDesigning", current: false },
];

export default function GameCriticism() {
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
    <div>
      <SectionHeader title="i am Tien Nguyen" favIconUrl="/favicon.ico" />
      <Script src="/theme.js" />
      <main className=" bg-white px-10 dark:bg-gray-900 ">
        <Navigation navigation={navigation} />

        <section className="py-10">
          <div>
            <p>Updating</p>
          </div>
        </section>
      </main>
    </div>
  );
}
