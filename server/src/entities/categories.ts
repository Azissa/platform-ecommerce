import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import "reflect-metadata";

@Entity()
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  deleted_at: Date;
}
