import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import errorHandler from "@/middlewares/errorHandler";
import { testRoutes } from "@/routes";

const app = express();

app.use(
    cors({
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(helmet());

app.use("/api/v1", testRoutes);

app.use(errorHandler);

export default app;
