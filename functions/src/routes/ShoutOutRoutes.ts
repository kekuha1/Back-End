import express, { Request, Response } from "express";
import { getClient } from "../db";
export const shoutOutRoutes = express.Router();
shoutOutRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const client = await getClient();
    const result = client
      .db("ShoutOut")
      .collection("ShoutOut")
      .find({})
      .toArray();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});
