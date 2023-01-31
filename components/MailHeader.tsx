import { FlagIcon, TrashIcon } from "@heroicons/react/24/solid";
import MailProps from "../interfaces/mail";

export default function MailHeader({ mail,deleteMail }: { mail: MailProps,deleteMail:()=>void }) {
  return (
    <header>
      <nav className="px-5 py-2.5 bg-gray-900 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src={mail.userImg}
              alt="Neil image"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              {mail.subject}
            </span>
          </div>
          <div className="justify-between items-center flex gap-2">
            <div className="border-gray-600 hover:bg-gray-700 cursor-pointer border inline-flex w-full justify-center p-2 text-sm font-medium text-white focus:outline-none">
              <FlagIcon
                className={`h-4 w-4 ${
                  mail.flagged
                    ? "text-yellow-300"
                    : "text-yellow-500 text-opacity-50"
                }`}
                aria-hidden="true"
              />
            </div>

            <div onClick={deleteMail} className="border-gray-600 hover:bg-gray-700 cursor-pointer border inline-flex w-full justify-center p-2 text-sm font-medium text-white focus:outline-none">
              <TrashIcon
                className={`h-4 w-4 text-red-600`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
