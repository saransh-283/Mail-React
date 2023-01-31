import promotionsHandler from "../../../handlers/promotions";

export default async function GetPromotions(req, res) {
  const mails=await promotionsHandler()

  res.status(200).json(mails);
}
