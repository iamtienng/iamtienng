import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import { AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaGamepad, FaKeyboard, FaCodepen } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

import iamtienng from "../../public/iamtienng_web.png";
import Image from "next/image";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/iamtienng/", current: true },
  { name: "Computer Science", href: "/iamtienng/cs", current: false },
  { name: "Game Criticism", href: "/iamtienng/gc", current: false },
  { name: "Keycap Designing", href: "/iamtienng/kd", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>i am Tien Nguyen</title>
        <meta name="description" content="iamtienng corner" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/iamtienng/iamtienng/master/public/favicon.ico"
        />
      </Head>
      <Script src="/theme.js" />
      <main className=" bg-white px-10 dark:bg-gray-900 ">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto">
                <div className="relative flex h-20 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-950 dark:text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900"
                                : "text-gray-700 hover:bg-gray-300 hover:text-gray-950 dark:text-white dark:hover:bg-gray-700",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button
                          className="flex rounded-full dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800
                          bg-white  focus:ring-gray-950  focus:ring-offset-white"
                        >
                          <span className="sr-only">Open user menu</span>
                          <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ">
                          <Menu.Item
                            onClick={() => {
                              localStorage.theme = "dark";
                              document.documentElement.classList.add("dark");
                            }}
                          >
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Dark Mode
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              localStorage.theme = "light";
                              document.documentElement.classList.remove("dark");
                            }}
                          >
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Light Mode
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              localStorage.removeItem("theme");
                              window.matchMedia("(prefers-color-scheme: dark)")
                                .matches
                                ? document.documentElement.classList.add("dark")
                                : document.documentElement.classList.remove(
                                    "dark"
                                  );
                            }}
                          >
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Automatic
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <Transition
                show={open}
                enter="transition duration-700 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900"
                            : "text-gray-700 hover:bg-gray-300 hover:text-gray-950 dark:text-white dark:hover:bg-gray-700",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
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
            <div className="text-5xl flex justify-center gap-16 py-5 text-gray-600 dark:text-gray-400">
              <a target="_blank" href="https://www.instagram.com/iamtienng/">
                <AiFillInstagram className="cursor-pointer" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/iamtienng/">
                <AiFillLinkedin className="cursor-pointer" />
              </a>
              <a target="_blank" href="https://www.youtube.com/@iamtienng">
                <AiFillYoutube className="cursor-pointer" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-28 h-28 relative overflow-hidden mt-5 md:h-28 md:w-28">
              <Image
                src={iamtienng}
                layout="fill"
                objectFit="cover"
                alt="alt"
              />
            </div>
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
            <Link href="/cs">
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-white dark:hover:bg-white duration-300 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
                <FaCodepen className="relative text-5xl" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Computer Science
                </h3>
                <p className="py-2">
                  With my strong passion for problem solving in general and
                  programming skills in particular, I firmly believe that my
                  ability to cooperate with you to create the foundation for the
                  future world.
                </p>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Outstanding Skills
                </h3>
                <p className="text-gray-800 py-1">Software Engineering</p>
                <p className="text-gray-800 py-1">Data Analysis</p>
                <p className="text-gray-800 py-1">Teamwork</p>
                <p className="text-gray-800 py-1">Organized work style</p>
              </div>
            </Link>
            <Link href="/gc">
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-white dark:hover:bg-white duration-300 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
                <FaGamepad className="text-5xl" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Game Criticism
                </h3>
                <p className="py-2">
                  Right now, I am not aiming to write professional reviews. This
                  will be where I nurture and develop an awareness of art
                  specifically in the game. To me, games have a potential that
                  goes beyond movies and books.
                </p>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Topics I will write about
                </h3>
                <p className="text-gray-800 py-1">Story Analysis</p>
                <p className="text-gray-800 py-1">Game Analysis</p>
                <p className="text-gray-800 py-1">Lighting Design</p>
                <p className="text-gray-800 py-1">Game Engine Development</p>
              </div>
            </Link>
            <Link href="/kd">
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-white dark:hover:bg-white duration-300 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
                <FaKeyboard className="text-5xl" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Keycap Designing
                </h3>
                <p className="py-2">
                  From a passion for the beauty of custom high end mechanical
                  keyboards. The world of keyboard is where I apply my knowledge
                  of art to have the opportunity to create real creation.
                </p>
                <h3 className="text-lg font-medium pt-8 pb-2">Tools I use</h3>
                <p className="text-gray-800 py-1">Blender</p>
                <p className="text-gray-800 py-1">Moment of Inspiration</p>
                <p className="text-gray-800 py-1">Adobe Illustrator</p>
                <p className="text-gray-800 py-1">Adobe Photoshop</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
