import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="px-5 py-2.5 bg-gray-900 border-b border-gray-700">
        <Link href="/">
          <div className="flex gap-4 items-center">
            <EnvelopeIcon className="h-6 w-6 text-blue-100" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              E-Mail
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
