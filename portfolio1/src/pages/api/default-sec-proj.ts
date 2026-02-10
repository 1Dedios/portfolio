import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "@/types/types";
import { queries } from "@/util/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    console.log("HITTING DEFAULT SEC PROJ API");
    const defaultSecQuery = await queries.defaultProjQuery("hacker");
    console.log("DEFAULT SEC PROJECTS QUERY RES:", defaultSecQuery);

    res.setHeader("Cache-Control", "s-maxage=14400");
    return res.status(200).json({ status: true, data: defaultSecQuery });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: false, error: `${e}` });
  }
}
