import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Categories } from "./categories";
import "reflect-metadata";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @ManyToMany(() => Categories,(category_id) => category_id.id)
  @JoinTable()
  category_id: Categories[]

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "varchar" })
  summary: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar" })
  imageUrl: string;

  @Column({ type: "int" })
  stock: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  deleted_at: Date;
}
