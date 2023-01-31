import junkHandler from "../../../handlers/junk";

export default async function GetJunk(req, res) {
  const mails=await junkHandler()

  res.status(200).json(mails);
}
