import { Menu, Transition } from "@headlessui/react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ThemeMenu = () => {
  return (
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
              localStorage.theme = "automatic";
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark");
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
  );
};

export default ThemeMenu;
