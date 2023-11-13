import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category' })
export class Category {

  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'varchar',  nullable: false })
  description: string;

  //Relacion

  @OneToMany(() => Product, (product: Product) => product.category, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  product: Product[];
}