import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/legacy/image";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/iamtienng/", current: false },
  { name: "Computer Science", href: "/iamtienng/cs", current: true },
  { name: "Game Criticism", href: "/iamtienng/gc", current: false },
  { name: "Keycap Designing", href: "/iamtienng/kd", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function cs() {
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

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="alt"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="alt"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="alt"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="alt"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="alt"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="alt"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
