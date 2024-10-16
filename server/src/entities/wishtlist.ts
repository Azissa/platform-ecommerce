import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user";
import { Product } from "./product";
import "reflect-metadata";

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, (user_id) => user_id.id)
  @JoinColumn()
  user_id: User[];

  @OneToOne(() => Product, (product_id) => product_id.id)
  @JoinColumn()
  product_id: Product[];

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  deleted_at: Date;
}
