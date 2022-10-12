import { Request, Response } from "express";

export class HealthCheck {
  async check(req: Request, res: Response) {
    const healthCheck = {
      uptime: process.uptime(),
      responseTime: process.hrtime(),
      messagge: "OK",
      timeStamp: Date.now()
    };
  }
}