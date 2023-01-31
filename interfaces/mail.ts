export default interface MailProps {
  guid: string;
  unread?: boolean;
  flagged?: boolean;
  subject: string;
  content: string;
  userImg: string;
}
