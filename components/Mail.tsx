import MailProps from "../interfaces/mail";

export default function Mail({ mail,setMail }: { mail: MailProps,setMail:()=>void }) {
  return (
    <li onClick={setMail} className="cursor-pointer hover:bg-gray-700 pb-3 sm:pb-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={mail.userImg}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate text-white">
            {mail.subject}
          </p>
          <p className="text-sm truncate text-gray-400" dangerouslySetInnerHTML={{__html:mail.content}} />
        </div>
      </div>
    </li>
  );
}
