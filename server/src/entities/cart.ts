import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./user";
import { Product } from "./product";
import "reflect-metadata";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => User, (user_id) => user_id.id)
  user_id: User[];

  @Column({ type: "int" })
  total: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  deleted_at: Date;
}

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Cart, (cart_id) => cart_id.id)
  cart_id: Cart[];

  @ManyToOne(() => Product, (product_id) => product_id.id)
  product_id: Product[];

  @Column({ type: "int" })
  quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  deleted_at: Date;
}
