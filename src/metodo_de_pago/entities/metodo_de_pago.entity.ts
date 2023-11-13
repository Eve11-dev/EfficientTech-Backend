import { Order } from "src/order/entities/order.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'metodopago' })
export class MetodoPago {

  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'varchar',  nullable: false })
  forma_de_pago: string;

  @Column({ type: 'varchar', nullable: false })
  moneda: string;

  @Column({ type: 'varchar', nullable: false })
  pais:string;

  @Column({ type: 'varchar', nullable: false })
  description:string;
// Relacion 
@ManyToOne(() => Order, (order: Order) => order.metodopago)
      @JoinTable()
      order: Order[];

}