import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

export default function Filter({
  all,
  read,
  unread,
  flagged,
  unflagged,
}: {
  all: () => void;
  read: () => void;
  unread: () => void;
  flagged: () => void;
  unflagged: () => void;
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="border-gray-600 border inline-flex w-full justify-center bg-gray-700 px-4 py-2 text-sm font-medium text-white focus:outline-none">
          <FunnelIcon
            className="h-5 w-5 text-gray-400 hover:text-gray-200"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-gray-700 border border-gray-600 shadow-lg focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={all}
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  } cursor-pointer group flex w-full items-center px-2 py-2 text-sm`}
                >
                  All
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={unread}
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  } cursor-pointer group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Unread
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={read}
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  } cursor-pointer group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Read
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={flagged}
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  } cursor-pointer group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Flagged
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={unflagged}
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  } cursor-pointer group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Unflagged
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
