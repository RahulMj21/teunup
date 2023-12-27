import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import app from "./app";
import { logger } from "./utils";

const init = async () => {
  const PORT = process.env.PORT || 8000;
  const server = createServer(app);

  server.listen(PORT, () => logger.info(`Server is running on PORT: ${PORT}`));
};

init();
