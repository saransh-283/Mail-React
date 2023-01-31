import updatesHandler from "../../../handlers/updates";

export default async function GetUpdates(req, res) {
  const mails=await updatesHandler()

  res.status(200).json(mails);
}
