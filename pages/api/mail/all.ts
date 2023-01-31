
import promotionsHandler from "../../../handlers/promotions";
import spamHandler from "../../../handlers/spam";
import updatesHandler from "../../../handlers/updates";

export default async function GetPromotions(req, res) {
    const updates = await updatesHandler()
    const promotions = await promotionsHandler()
    const spam=await spamHandler()
    const all = [...updates,...promotions,...spam]
  
    res.status(200).json(all);
  }  