import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/util/mongoService";
import ProjectsDBModel from "@/models/ProjectsDBModel";
import { InterfaceProjects } from "@/types/interface/mongoose-interfaces";

type ResponseData = {
  status: boolean;
  data?: InterfaceProjects[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const defaultQuery = await ProjectsDBModel.find({ status: "deployed" }).lean();
      console.log("DEFAULT QUERY", defaultQuery);

      return res.status(200).json({ status: true, data: defaultQuery });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: false, error: `${e}}` });
    }
  }
}
