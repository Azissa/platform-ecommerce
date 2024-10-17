import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import "reflect-metadata";
import { Product } from "./product";
import { User } from "./user";

export enum StatusPayment {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
  CANCELLED = "CANCELLED",
}

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => User, (user_id) => user_id.id)
  user_id: User[];

  @ManyToOne(() => PaymentDetails, (payment_id) => payment_id.id)
  payment_id: PaymentDetails[];

  @Column({ type: "int" })
  total: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  updated_at: Date;
}

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrderDetails, (order_id) => order_id.id)
  order_id: OrderDetails[];

  @ManyToMany(() => Product, (product_id) => product_id.id)
  @JoinTable()
  product_id: Product[];

  @Column({ type: "int" })
  quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  updated_at: Date;
}

@Entity()
export class PaymentDetails {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => OrderDetails, (order_id) => order_id.id)
  @JoinTable()
  order_id: OrderDetails[];

  @Column({ type: "int" })
  amount: number;

  @Column({ type: "varchar" })
  provider: string;

  @Column({ type: "enum", enum: StatusPayment })
  status: StatusPayment;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
