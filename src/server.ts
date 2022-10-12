import "dotenv/config";
import app from "./app";

const appPort = process.env.PORT || 3000;
const processId = process.pid;

const server = app.listen(appPort, () => {
  console.log(`Server's (PID ${processId}) running on PORT:${appPort}`);
});

function gracefulShutdown(event: string) {
  return (signal: NodeJS.Signals) => {
    server.close(async () => {
      console.log(`App (PID:${processId}) received: ${signal}`);
      // console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
      // await Database.destroy();
      process.exit(0);
    });
  };
}

process.on("SIGINT", gracefulShutdown("SIGINT"));
process.on("SIGTERM", gracefulShutdown("SIGTERM"));

process.on("uncaughtException", (error, origin) => {
  server.close(async () => {
    console.log(`App (PID: ${processId}) received: ${origin}\n${error}`);
    // console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
    // await Database.destroy();
    process.exit(1);
  });
  setTimeout(() => { process.exit(1); }, 1000).unref();
});

process.on("unhandledRejection", (error) => {
  server.close(async () => {
    console.log(`App (PID: ${processId}) received: ${error}`);
    // console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
    // await Database.destroy();
    process.exit(1);
  });
  setTimeout(() => { process.exit(1); }, 1000).unref();
});