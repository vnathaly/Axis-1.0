import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("standups")
export class Standup{
    @PrimaryGeneratedColumn("uuid")
      id!: string;
    @Column()
      title!: string;
    @Column()
      description!: string;
    @Column()
      createdAt!: Date;
    @Column()
      updatedAt!: Date;
    @Column("text", { array: true })
    comment!: string[];
}
