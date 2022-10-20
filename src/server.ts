import "dotenv/config";
import app from "./app";
import Database from "./database/data-source";

const appPort = process.env.PORT || 3000;
const processId = process.pid;
const server = app.listen(appPort, () => {
  console.log(`Server's (PID ${processId}) running on PORT:${appPort}`);
});

Database.initialize().then(async (connection) => {
  const { type, database } = connection.options;
  console.log(`Database ${database} (${type}): ${connection.isInitialized ? "connected" : "disconnect"}\n`);
}).catch(error => console.log(error));

function gracefulShutdown(event: string) {
  return (signal: NodeJS.Signals) => {
    server.close(async () => {
      console.log(`App (PID:${processId}) received: ${signal}`);
      await Database.destroy();
      console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
      process.exit(0);
    });
  };
}

function shutdown() {
  server.close(async () => {
    await Database.destroy();
    console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
    process.exit(1);
  });
  setTimeout(() => { process.exit(1); }, 1000).unref();
}

process.on("SIGINT", gracefulShutdown("SIGINT"));
process.on("SIGTERM", gracefulShutdown("SIGTERM"));

process.on("uncaughtException", (error, origin) => {
  console.log(`App (PID: ${processId}) received: ${origin}\n${error}`);
  shutdown();
});

process.on("unhandledRejection", (error) => {
  console.log(`App (PID: ${processId}) received: ${error}`);
  shutdown();
});