import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  API_PREFIX: get("DEFAULT_API_PREFIX").default("/api/v1").asString(),
  NODE_ENV: get("NODE_ENV").default("development").asString(),
  DB_HOST: get("DATABASE_HOST").default("localhost").asString(),
  DB_PORT: get("DATABASE_PORT").asPortNumber(),
  DB_USERNAME: get("DATABASE_USERNAME").default("postgres").asString(),
  DB_PASSWORD: get("DATABASE_PASSWORD").default("admin1234").asString(),
  DB_NAME: get("DATABASE_NAME").default("ecommerce-db").asString(),
};
