import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'proveedores' })
export class Proveedores {

    @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'varchar',  nullable: false })
  name_proveedor:string

  @Column({ type: 'varchar',  nullable: false })
  direccion:string

  @Column({ type: 'varchar',  nullable: false })
  correo:string

  @Column({ type: 'numeric',  nullable: false })
  telefono:number

  @Column({ type: 'numeric',  nullable: false })
  precio_productos:number

  @Column({ type: 'varchar',  nullable: false })
  tiempo_entrega:string
}