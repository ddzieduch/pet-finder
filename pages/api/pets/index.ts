import { NextApiRequest, NextApiResponse } from "next";
import { samplePetData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(samplePetData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(samplePetData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
