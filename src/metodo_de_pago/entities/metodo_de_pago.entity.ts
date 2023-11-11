import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}