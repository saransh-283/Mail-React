import useSWR from "swr";
import { Fragment, useEffect, useState } from "react";
import Mails from "../components/Mails";
import Preview from "../components/Preview";
import MailProps from "../interfaces/mail";


const IndexPage = () => {
  const [mails, setMails] = useState([]);

  const fetcher = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    setMails(json)
    return json
  };
  
  const { data, error } = useSWR("/api/mail/junk", fetcher);
  const [mail, setMail] = useState<MailProps>();

  const deleteMail=(guid: string) => {
    let tmp = [...mails]
    tmp.splice(tmp.findIndex(mail=>mail.guid===guid), 1);
    setMails(tmp)
    setMail(undefined)
  }
  
  const flagMail=(guid: string) => {
    let tmp = [...mails]
    let index = tmp.findIndex(mail => mail.guid === guid);
    tmp[index].flagged=!tmp[index].flagged
    setMails(tmp)
  }
  
  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <Fragment>
      <div className="overflow-y-scroll w-80 border-x border-gray-700 p-5 bg-gray-900">
        <Mails setMail={(mail: MailProps) => setMail(mail)} mails={mails} />
      </div>
      <Preview flagMail={flagMail} deleteMail={deleteMail} mail={mail} />
    </Fragment>
  );
};

export default IndexPage;
