import Script from "next/script";

import { useEffect } from "react";
import { FaGamepad, FaKeyboard, FaCodepen } from "react-icons/fa";

import iamtienng_image from "../../public/iamtienng_web.png";

import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import SocialLinks from "@/components/SocialLinks";
import ImageContainer from "@/components/ImageContainer";
import FieldCard from "@/components/FieldCard";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Computer Science", href: "/ComputerScience", current: false },
  { name: "Game Criticism", href: "/GameCriticism", current: false },
  { name: "Keycap Designing", href: "/KeycapDesigning", current: false },
];

export default function Home() {
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
        <section>
          <div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              For a more detailed and clear view of the field you are interested
              in me, please click on one of the three fields below.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-around">
            <FieldCard
              icon=<FaCodepen className="relative text-5xl" />
              fieldHref="/ComputerScience"
              fieldTitle="Computer Science"
              fieldDescription="With my strong passion for problem solving in general and programming skills in particular, I firmly believe that my ability to cooperate with you to create the foundation for the future world."
              fieldListTitle="Skills"
              fieldList={[
                "Software Engineering",
                "Data Analysis",
                "Teamwork",
                "Organized work style",
              ]}
            />
            <FieldCard
              icon=<FaKeyboard className="text-5xl" />
              fieldHref="/GameCriticism"
              fieldTitle="Game Criticism"
              fieldDescription="Right now, I am not aiming to write professional reviews. This will be where I nurture and develop an awareness of art specifically in the game. To me, games have a potential that goes beyond movies and books."
              fieldListTitle="Topics I will write about"
              fieldList={[
                "Story Analysis",
                "Game Analysis",
                "Lighting Design",
                "Game Engine Development",
              ]}
            />
            <FieldCard
              icon=<FaGamepad className="text-5xl" />
              fieldHref="/KeycapDesigning"
              fieldTitle="Keycap Designing"
              fieldDescription="From a passion for the beauty of custom high end mechanical keyboards. The world of keyboard is where I apply my knowledge of art to have the opportunity to create real creation."
              fieldListTitle="Tools I use"
              fieldList={[
                "Blender",
                "Moment of Inspiration",
                "Adobe Illustrator",
                "Adobe Photoshop",
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
