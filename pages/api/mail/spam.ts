import spamHandler from "../../../handlers/spam";

export default async function GetSpam(req, res) {
  const mails=await spamHandler()

  res.status(200).json(mails);
}
