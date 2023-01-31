import {
  InboxIcon,
  InformationCircleIcon,
  SpeakerXMarkIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Folders() {
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
        <ul>
          {menus.map(({ title, icon: Icon, link }, index) => (
            <Link key={index} href={link}>
              <li
                className={`flex rounded-md mx-auto p-2 cursor-pointer hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 `}
              >
                <Icon className="h-5 w-5" />
                <span className=" origin-left duration-200">{title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
