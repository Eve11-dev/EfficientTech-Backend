import { Order } from "src/order/entities/order.entity";
import { Proveedores } from "src/proveedores/entities/proveedores.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cliente' })
export class Cliente {

    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;
  
    @Column({ type: 'varchar',  nullable: false })
    name: string;

    @Column({ type: 'varchar',  nullable: false })
    correo: string;

    @Column({ type: 'varchar',  nullable: false })
    direccion: string;

    @Column({ type: 'numeric',  nullable: false })
    telefono: number;

    //Relacion
    @OneToMany(() => Proveedores, (proveedores: Proveedores) => proveedores.cliente, {
        cascade: true,
        eager: true,
      })
      @JoinTable()
      proveedores: Proveedores[];

      @OneToMany(() => Order, (order: Order) => order.cliente, {
        cascade: true,
        eager: true,
      })
      @JoinTable()
      order: Order[];


}