import pino from "pino";
import PinoPretty from "pino-pretty";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const config = PinoPretty({
  colorize: true,
});

const logger = pino(
  {
    level: "info",
    timestamp: () =>
      `,"time":"${dayjs().utc().format("DD-MM-YYYY hh:mm:ssa UTC")}"`,
    base: { pid: false },
  },
  config,
);

export default logger;
