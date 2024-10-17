import { DataSource } from "typeorm";
import { Product } from "../../entities/product";
import { envs } from "./env";
import { Cart, CartItem } from "../../entities/cart";
import { Categories } from "../../entities/categories";
import { Adresses, User } from "../../entities/user";
import { Wishlist } from "../../entities/wishtlist";
import { OrderDetails, OrderItem, PaymentDetails } from "../../entities/order";

export const dataSource = new DataSource({
  type: "postgres",
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  entities: [
    Product,
    Cart,
    CartItem,
    Categories,
    User,
    Adresses,
    Wishlist,
    OrderDetails,
    OrderItem,
    PaymentDetails,
  ],
  logging: true,
  synchronize: true,
});
