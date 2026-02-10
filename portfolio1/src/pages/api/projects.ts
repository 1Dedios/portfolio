import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "@/types/types";
import { queries } from "@/util/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const projectType = url.searchParams.get("projType");
    console.log("SERVER PROJ TYPE PARAM", projectType);
    const queryRes = await queries.projByTypeQuery(projectType!);
    console.log("QUERY RESPONSE", queryRes);

    res.setHeader("Cache-Control", "s-maxage=14400");
    return res.status(200).json({ status: true, data: queryRes });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: false, error: `${e}` });
  }
}
