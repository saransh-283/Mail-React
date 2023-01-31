import MailProps from "../interfaces/mail";
import Mail from "./Mail";

export default function Mails({mails,setContent}:{mails:MailProps[],setContent:(content:string)=>void}) {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {mails.map((mail)=><Mail mail={mail} setContent={(content:string)=>{setContent(content)}} key={mail.guid} />)}
    </ul>
  );
}
