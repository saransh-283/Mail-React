import {
  ChevronDoubleLeftIcon,
  InboxIcon,
  InformationCircleIcon,
  SpeakerXMarkIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
export default function Folders() {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "All", icon: InboxIcon, link: "/" },
    { title: "Updates", icon: InformationCircleIcon, link: "/updates" },
    { title: "Promotions", icon: TagIcon, link: "/promotions" },
    { title: "Spam ", icon: SpeakerXMarkIcon, link: "/spam" },
    { title: "Junk", icon: TrashIcon, link: "/junk" },
  ];

  return (
    <div className="flex">
      <div className="w-max bg-gray-900 h-screen p-5 pr-8 relative duration-300">
        <div
          onClick={() => setOpen(!open)}
          className="p-2 rounded mb-4 border-b border-gray-700 cursor-pointer bg-gray-900 hover:bg-gray-700"
        >
          <ChevronDoubleLeftIcon
            className={`h-3 mx-auto text-gray-300 ${!open && "rotate-180"}`}
          />
        </div>
        <ul>
          {menus.map(({ title, icon: Icon, link }, index) => (
            <Link key={index} href={link}>
              <li
                className={`flex rounded-md mx-auto p-2 cursor-pointer hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 `}
              >
                <Icon className="h-5 w-5" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
