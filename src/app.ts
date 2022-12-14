import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
// app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(routes);

export default app;