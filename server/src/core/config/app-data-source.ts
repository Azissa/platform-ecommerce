import { DataSource } from "typeorm";
import { Product } from "../../entities/product";
import { envs } from "./env";

export const dataSource = new DataSource({
  type: "postgres",
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  entities: [Product],
});


