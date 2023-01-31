import { Fragment } from "react";
import MailProps from "../interfaces/mail";
import MailHeader from "./MailHeader";

export default function Preview({ mail }: { mail: MailProps }) {
  return (
    <div className="overflow-y-scroll flex-1 flex flex-col">
      {mail ? (
        <Fragment>
          <MailHeader mail={mail} />
          <div
            className="overflow-y-scroll flex-1 p-5 bg-gray-700"
            dangerouslySetInnerHTML={{ __html: mail.content }}
          ></div>
        </Fragment>
      ) : (
        "Select a mail to read"
      )}
    </div>
  );
}
