import MailProps from "../interfaces/mail";

export default function Mail({ mail,setContent }: { mail: MailProps,setContent:(content:string)=>void }) {
  return (
    <li onClick={()=>setContent(mail.content)} className="cursor-pointer hover:bg-gray-700 pb-3 sm:pb-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={mail.userImg}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {mail.subject}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {mail.content}
          </p>
        </div>
      </div>
    </li>
  );
}
