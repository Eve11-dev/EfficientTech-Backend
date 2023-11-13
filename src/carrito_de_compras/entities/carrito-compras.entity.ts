import { Order } from "src/order/entities/order.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'carritocompras' })
export class CarritoCompras {

  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({type:'int4', nullable: false}) 
  user_id: number;

  @Column({type:'int4', nullable: false}) 
  product_id: number;

  @Column({type: 'varchar'})  
  direccion: string;

  @Column({ type: 'numeric', name: 'total', nullable: false })
  cant_product: number;

  //Relacion

  @ManyToOne(() => Order, (order: Order) => order.carritocompras)
  @JoinTable()
  order: Order[];
}