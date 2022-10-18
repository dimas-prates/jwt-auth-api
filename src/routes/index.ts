import { Router } from "express";
import { HealthCheck } from "./healthCheckRouter";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "../../swagger.json";

const routes = Router();

routes.use("/healthCheck", new HealthCheck().check);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
routes.use("/terms", (request, response) => {

  return response.json({ message: "Terms of Service" });
});

export default routes;