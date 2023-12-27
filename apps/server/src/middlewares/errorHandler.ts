import { NextFunction, Request, Response } from "express";

const errorHandler = async (
  err: { status?: number; message?: string },
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let status = 500;
  let message = "internal server error";

  if (err.status) {
    status = err.status;
  }
  if (err.message) {
    message = err.message;
  }

  return res.status(status).json({
    status: "ERROR",
    message,
  });
};

export default errorHandler;
