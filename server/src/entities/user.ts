import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import "reflect-metadata";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  avatar: string;

  @Column({ type: "varchar" })
  first_name: string;

  @Column({ type: "varchar" })
  last_name: string;

  @Column({ type: "varchar" })
  username: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @CreateDateColumn({ type: "date" })
  birth_of_date: Date;

  @Column({ type: "varchar" })
  phone_number: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
}

@Entity()
export class Adresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => User,(user_id) => user_id.id)
  user_id: User[]

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  address_line: string;

  @Column({ type: "varchar" })
  country: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  postal_code: number;

  @Column({ type: "varchar" })
  landmark: string;

  @Column({ type: "varchar" })
  phone_number: number;

  @CreateDateColumn({ type: "timestamp" })
  creates_at: Date;
}
