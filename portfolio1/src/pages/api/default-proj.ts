import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "@/types/types";
import { queries } from "@/util/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const defaultQuery = await queries.defaultProjQuery();
    console.log("DEFAULT QUERY RES", defaultQuery);
    return res.status(200).json({ status: true, data: defaultQuery });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: false, error: `${e}` });
  }
}
