import { Router } from "express";
import { HealthCheck } from "./healthCheckRouter";
import swaggerUi from "swagger-ui-express";

const routes = Router();

routes.use("/healthCheck", new HealthCheck().check);
routes.use("/api-docs", swaggerUi.serve,swaggerUi.setup());

export default routes;