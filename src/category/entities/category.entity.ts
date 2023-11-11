import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category' })
export class Category {

  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'varchar',  nullable: false })
  description: string;
}