import { CarritoCompras } from 'src/carrito_de_compras/entities/carrito-compras.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { MetodoPago } from 'src/metodo_de_pago/entities/metodo_de_pago.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany } from 'typeorm';

@Entity({ name: 'order' })
export class Order {
    
  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'date', name: 'fecha', nullable: false })
  fecha: Date;

  @Column({ type: 'numeric', name: 'total', nullable: false })
  total: number;

  @Column({ type: 'varchar', name: 'direccion', nullable: false, length: 100 })
  direccion: string;

  @Column({ type: 'varchar', name: 'ciudad', nullable: false, length: 50 })
  ciudad: string;

  @Column({ type: 'varchar', name: 'pais', nullable: false, length: 50 })
  pais: string;

  @Column({
    type: 'varchar',
    name: 'codigo_postal',
    nullable: false,
    length: 10,
  })
  codigoPostal: string;

  //Relacion 
  @ManyToOne(() => Cliente, (cliente: Cliente) => cliente.order)
  @JoinTable()
  cliente: Cliente[];

  @OneToMany(() => MetodoPago, (metodopago: MetodoPago) => metodopago.order, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  metodopago: MetodoPago[];

  @OneToMany(() => CarritoCompras, (carritocompras: CarritoCompras) => carritocompras.order, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  carritocompras: CarritoCompras[];
}
