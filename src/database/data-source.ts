import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const migrationsDir = `${__dirname}/**/migrations/*.{ts,js}`;
const entitiesDir = `${__dirname}/**/entities/*.{ts,js}`;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  // logging: false,
  entities: [entitiesDir],
  migrations: [migrationsDir],
  // subscribers: [],
});

export default AppDataSource;