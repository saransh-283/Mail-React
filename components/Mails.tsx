import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import MailProps from "../interfaces/mail";
import Filter from "./Filter";
import Mail from "./Mail";

export default function Mails({
  mails,
  setMail,
}: {
  mails: MailProps[];
  setMail: (mail: MailProps) => void;
}) {
  const [all, setAll] = useState(mails);

  const filterAll = () => {
    setAll(mails);
  };

  const read = () => {
    let tmp = [...mails];
    tmp = tmp.filter((mail) => !mail.unread);
    setAll(tmp);
  };

  const unread = () => {
    let tmp = [...mails];
    tmp = tmp.filter((mail) => mail.unread);
    setAll(tmp);
  };

  const flagged = () => {
    let tmp = [...mails];
    tmp = tmp.filter((mail) => mail.flagged);
    setAll(tmp);
  };

  const unflagged = () => {
    let tmp = [...mails];
    tmp = tmp.filter((mail) => !mail.flagged);
    setAll(tmp);
  };

  const search = (query: string) => {
    let tmp = [...mails];
    tmp = tmp.filter(
      (mail) =>
        mail.subject.toLowerCase().includes(query) ||
        mail.content.toLowerCase().includes(query)
    );
    setAll(tmp);
  };
  return (
    <Fragment>
      <form className="flex justify-between gap-2 items-center p-2 mb-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </div>
          <input
            className="border text-sm outline-none focus:outline-none block w-full pl-10 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
        </div>

        <Filter
          all={filterAll}
          read={read}
          unflagged={unflagged}
          unread={unread}
          flagged={flagged}
        />
      </form>

      <ul className="max-w-md mt-4 divide-y divide-gray-200 dark:divide-gray-700">
        {all.map((mail) => (
          <Mail
            mail={mail}
            setMail={()=>setMail(mail)}
            key={mail.guid}
          />
        ))}
      </ul>
    </Fragment>
  );
}
