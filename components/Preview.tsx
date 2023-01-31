import { Fragment } from "react";
import MailProps from "../interfaces/mail";
import MailHeader from "./MailHeader";

export default function Preview({ mail,deleteMail }: { mail: MailProps, deleteMail:(guid:string)=>void }) {
  return (
    <div className="overflow-y-scroll flex-1 flex flex-col">
      {mail ? (
        <Fragment>
          <MailHeader deleteMail={()=>deleteMail(mail.guid)} mail={mail} />
          <div
            className="overflow-y-scroll flex-1 p-5 bg-gray-700 text-white"
            dangerouslySetInnerHTML={{ __html: mail.content }}
          ></div>
        </Fragment>
      ) : (
        "Select a mail to read"
      )}
    </div>
  );
}
