import { Request, Response, Router } from "express";

const router = Router();

router.get("/healthcheck", async (_req: Request, res: Response) => {
  return res.status(200).json({ status: "OK", message: "healthy" });
});

export default router;
