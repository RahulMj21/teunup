import { NextFunction, Request, Response } from "express";

const BigPromise =
  (handler: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(handler(req, res)).catch(next);

export default BigPromise;
