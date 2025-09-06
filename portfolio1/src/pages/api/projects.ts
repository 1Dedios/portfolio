import type { NextApiRequest, NextApiResponse } from "next";
// TODO: API route for projects based on type
type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  return res.status(200).json({ message: "john doe" });
}
